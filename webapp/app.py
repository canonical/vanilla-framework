# Code
import glob
import json
import os

# Packages
import flask
from canonicalwebteam.flask_base.app import FlaskBase
from canonicalwebteam.templatefinder import TemplateFinder
from canonicalwebteam.search import build_search_view


# Constants
with open("package.json") as package_json:
    VANILLA_VERSION = json.load(package_json)["version"]


app = FlaskBase(
    __name__,
    "docs.vanillaframework.io",
    template_folder="../site",
    static_folder="../site/static",
    template_404="404.html",
    template_500="500.html",
)


# Helpers
# ===
def _get_title(title):
    yield title


def _get_examples():
    example_files = glob.glob("site/docs/examples/*/**/*.html", recursive=True)
    examples = {}

    for filepath in sorted(example_files):
        # Remove "site/" prefix
        docs_length = len("site/")

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


# Global context settings
@app.context_processor
def global_template_context():
    return {"version": VANILLA_VERSION, "path": flask.request.path}


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
    return flask.render_template(
        f"docs/examples/{example_path}.html", is_standalone=True
    )


app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule(
    "/docs/search",
    "search",
    build_search_view(
        site="docs.vanillaframework.io", template_path="docs/search.html"
    ),
)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
