# Code
import glob
import json
import os
import random
import yaml
import urllib
import markupsafe
import mistune

# Packages
import talisker.requests
import requests
import flask
import jinja2
from canonicalwebteam.flask_base.app import FlaskBase
from canonicalwebteam.templatefinder import TemplateFinder
from canonicalwebteam.search import build_search_view
from canonicalwebteam import image_template
from canonicalwebteam.discourse import DiscourseAPI, DocParser, Docs


# Constants
with open("package.json") as package_json:
    VANILLA_VERSION = json.load(package_json)["version"]

with open("build/classreferences.yaml") as data_yaml:
    CLASS_REFERENCES = yaml.load(data_yaml, Loader=yaml.FullLoader)

with open("releases.yml") as releases_file:
    FEATURES_LIST = yaml.load(releases_file.read(), Loader=yaml.FullLoader)

# Read side-navigation.yaml
with open("side-navigation.yaml") as side_navigation_file:
    SIDE_NAVIGATION = yaml.load(
        side_navigation_file.read(),
        Loader=yaml.FullLoader,
    )


app = FlaskBase(
    __name__,
    "vanillaframework.io",
    template_folder="../templates",
    static_folder="../templates/static",
    template_404="404.html",
    template_500="500.html",
)
session = talisker.requests.get_session()

TEAM_MEMBERS = [
    {"login": "anthonydillon", "role": "Engineering Director"},
    {"login": "bartaz", "role": "Staff Web Engineer"},
    {"login": "lyubomir-popov", "role": "Lead Visual Designer"},
    {"login": "jmuzina", "role": "Software Engineer"}
]


# Helpers
# ===
def _get_title(title):
    yield title


def _get_examples():
    # get all example files (but ignore partials that start with _)
    example_files = glob.glob(
        "templates/docs/examples/*/**/[!_]*.html", recursive=True
    )
    examples = {}

    for filepath in sorted(example_files):
        # Remove "templates/" prefix
        docs_length = len("templates/")

        # Get template object
        template_path = filepath[docs_length:]
        template = flask.current_app.jinja_env.get_template(template_path)

        # Remove "docs/examples/"
        examples_length = len("docs/examples/")
        # Remove "docs/examples/" and extension for the path
        example_path = os.path.splitext(template_path[examples_length:])[0]

        outermost_parent = example_path.split(os.sep).pop(0)

        title = example_path

        if "title" in template.blocks:
            title = next(template.blocks["title"](template.new_context({})))

        examples.setdefault(outermost_parent, []).append(
            {"path": example_path, "title": title}
        )

    return examples


def _make_github_request(endpoint):
    github_secret = os.getenv("GITHUB_TOKEN")
    headers = {}

    if github_secret:
        headers = {"Authorization": f"token {github_secret}"}

    try:
        response = requests.get(
            f"https://api.github.com/{endpoint}", headers, timeout=3
        )

        response.raise_for_status()
    except:
        return {}

    return response.json()


def _get_team_members(contributors):
    # based on the TEAM_MEMBERS list, see if
    # they're in the repo's list of contributors.
    # If they are, use their contributor data; if
    # they aren't, make a further request to get
    # their user data instead. If that fails, fall
    # back to what is stored in the TEAM_MEMBERS array.

    contributors = {
        contributor["login"]: contributor for contributor in contributors
    }

    for team_member in TEAM_MEMBERS:
        member = (
            contributors.get(team_member["login"])
            or _make_github_request(f'users/{team_member["login"]}')
            or team_member
        )
        member["role"] = team_member["role"]
        yield member


def _get_contributors():
    contributors = _make_github_request(
        "repos/canonical/vanilla-framework/contributors"
    )

    return contributors


def _filter_contributors(contributors):
    # Distinguish team_members from contributors

    member_usernames = [member["login"] for member in TEAM_MEMBERS]
    return [
        contributor
        for contributor in contributors
        if contributor["login"] not in member_usernames
    ]


# Global context settings
@app.context_processor
def global_template_context():
    version_parts = VANILLA_VERSION.split(".")
    version_minor = f"{version_parts[0]}.{version_parts[1]}"

    # Add an exception for the /docs/search path
    if flask.request.path == "/docs/search":
        docs_slug = ""
    else:
        docs_slug = (
            flask.request.path.replace("/docs/", "")
            .replace("/design/", "")
            .replace("/accessibility", "")
            .replace("/design-guidelines", "")
        )

        docs_slug = "" if docs_slug == "/docs" else docs_slug

    # Read navigation.yaml
    with open("component_tabs.yaml") as component_tabs_file:
        component_tabs = yaml.load(
            component_tabs_file.read(), Loader=yaml.FullLoader
        )

    updated_features = {}
    for feature in FEATURES_LIST[0]["features"]:
        feature_url = feature["url"].split("#")[0]
        if feature_url not in updated_features:
            updated_features[feature_url] = feature["status"]

    return {
        "version": VANILLA_VERSION,
        "versionMinor": version_minor,
        "path": flask.request.path,
        "page_tabs": component_tabs.get(docs_slug),
        "slug": docs_slug,
        "sideNavigation": SIDE_NAVIGATION,
        "releaseNotes": FEATURES_LIST,
        "updatedFeatures": updated_features,
    }


@app.template_filter()
def markdown(text):
    return markupsafe.Markup(mistune.markdown(text))


def class_reference(component=None):
    component = (
        component
        or urllib.parse.urlsplit(flask.request.path).path.split("/")[-1]
    )
    data = CLASS_REFERENCES["class-references"][component]
    return markupsafe.Markup(
        flask.render_template("_layouts/_class-reference.html", data=data)
    )


@app.context_processor
def utility_processor():
    return {"class_reference": class_reference, "image": image_template}


template_finder_view = TemplateFinder.as_view("template_finder")


@app.route("/docs/examples")
def examples_index():
    return flask.render_template(
        "docs/examples/index.html", examples=_get_examples()
    )


@app.route("/docs/examples/standalone")
def standalone_examples_index():
    return flask.render_template(
        "docs/examples/standalone.html", examples=_get_examples()
    )


@app.route("/docs/examples/standalone/<path:example_path>")
def standalone_example(example_path):
    try:
        return flask.render_template(
            f"docs/examples/{example_path}.html", is_standalone=True
        )
    except jinja2.exceptions.TemplateNotFound:
        return flask.abort(404)


@app.route("/contribute")
def contribute_index():
    all_contributors = _get_contributors()
    team_members = list(_get_team_members(all_contributors))
    contributors = _filter_contributors(all_contributors)

    response = flask.make_response(
        flask.render_template(
            "contribute.html",
            team_members=team_members,
            contributors=contributors,
        )
    )

    response.cache_control.max_age = 86400
    response.cache_control.public = True

    return response


app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule(
    "/docs/search",
    "search",
    build_search_view(
        session=session,
        site="vanillaframework.io/docs",
        template_path="docs/search.html",
    ),
)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)

discourse_docs = Docs(
    parser=DocParser(
        api=DiscourseAPI(
            base_url="https://discourse.ubuntu.com/", session=session
        ),
        index_topic_id=27037,  # https://discourse.ubuntu.com/t/design-system-website-config/27037
        url_prefix="/design",
    ),
    document_template="/_layouts/docs_discourse.html",
    url_prefix="/design",
)
discourse_docs.init_app(app)
