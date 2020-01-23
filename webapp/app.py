# Code
import datetime
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

def child_paths(base_path):
    """
    Inspect the filesystem to get the list of example pages
    """

    paths = []

    loader = flask.current_app.jinja_loader

    for template_path in loader.list_templates():
        if template_path.startswith(base_path + "/"):
            remainder = template_path[len(base_path)+1:]
            path = os.path.splitext(remainder)[0]

            if path == "/index":
                continue
            elif path.endswith("/index"):
                path = path[:-6]

            paths.append(path)

    return paths


# Global context settings
@app.context_processor
def global_template_context():
    with open("package.json") as package_json:
        version = json.load(package_json)["version"]

    return {
        "version": version,
        "current_year": datetime.datetime.now().year,
        "path": flask.request.path,
        "child_paths": child_paths
    }


# Template finder
template_finder_view = TemplateFinder.as_view("template_finder")
app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
