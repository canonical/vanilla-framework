# Code
import datetime
import glob
import json
import os

# Packages
import flask
from canonicalwebteam.flask_base.app import FlaskBase
from canonicalwebteam.templatefinder import TemplateFinder


# Rename your project below
app = FlaskBase(
    __name__,
    "docs.vanillaframework.io",
    template_folder="../docs",
    static_folder="../docs/static",
    template_404="404.html",
    template_500="500.html",
)


# Helpers
# ===


# Global context settings
@app.context_processor
def global_template_context():
    with open("package.json") as package_json:
        version = json.load(package_json)["version"]

    return {
        "version": version,
        "current_year": datetime.datetime.now().year,
        "path": flask.request.path,
        "is_standalone": "standalone" in flask.request.args,
    }


template_finder_view = TemplateFinder.as_view("template_finder")


@app.route("/examples")
def examples_view():
    example_files = glob.glob("docs/examples/*/**/*.html", recursive=True)
    examples = {}

    for filepath in sorted(example_files):
        # Remove "docs/examples/" prefix
        example_path = filepath[len("docs/examples/") :]
        # Remove extension
        example_path = os.path.splitext(example_path)[0]

        name_parts = example_path.split(os.sep)
        outermost_parent = name_parts.pop(0)

        # Make path parts sentence case
        friendly_parts = []
        for part in name_parts:
            friendly_parts.append(
                part.capitalize().replace("-", " ").replace("_", " ")
            )

        examples.setdefault(outermost_parent, []).append(
            {
                "path": f"/examples/{example_path}",
                "friendly_name": " / ".join(friendly_parts),
            }
        )

    show_standalone = "standalone" in flask.request.args
    if show_standalone:
        return flask.render_template("examples/standalone.html", examples=examples)
    else:
        return flask.render_template("examples/index.html", examples=examples)


app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
