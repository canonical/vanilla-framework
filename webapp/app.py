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
def _get_examples():
    example_files = glob.glob("docs/examples/*/**/*.html", recursive=True)
    examples = {}

    for filepath in sorted(example_files):
        # Remove "docs/examples/" prefix
        prefix_length = len("docs/examples/")
        example_path = filepath[prefix_length:]
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
            {"path": example_path, "friendly_name": " / ".join(friendly_parts)}
        )

    return examples


# Global context settings
@app.context_processor
def global_template_context():
    with open("package.json") as package_json:
        version = json.load(package_json)["version"]

    return {
        "version": version,
        "current_year": datetime.datetime.now().year,
        "path": flask.request.path,
    }


template_finder_view = TemplateFinder.as_view("template_finder")


@app.route("/examples")
def examples_index():
    return flask.render_template(
        "examples/index.html", examples=_get_examples()
    )


@app.route("/examples/standalone")
def standalone_examples_index():
    return flask.render_template(
        "examples/standalone.html", examples=_get_examples()
    )


@app.route("/examples/standalone/<path:example_path>")
def standalone_example(example_path):
    return flask.render_template(
        f"examples/{example_path}.html", is_standalone=True
    )


app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
