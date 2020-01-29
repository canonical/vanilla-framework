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

from ruamel.yaml import YAML
import json

_yaml = YAML(typ="rt")
_yaml_safe = YAML(typ="safe")

def get_yaml_loader(typ="safe"):
    if typ == "safe":
        return _yaml_safe
    return _yaml

def get_file(filename, replaces={}):
    """
    Reads a file, replaces occurences of all the keys in `replaces` with
    the correspondant values and returns the resulting string or None

    Keyword arguments:
    filename -- name if the file to load.
    replaces -- key/values to replace in the file content (default {})
    """
    filepath = os.path.join(flask.current_app.root_path, filename)

    try:
        with open(filepath, "r") as f:
            data = f.read()
            for key in replaces:
                data = data.replace(key, replaces[key])
    except Exception:
        data = None

    return data

def get_yaml(filename, typ="safe", replaces={}):
    """
    Reads a file, replaces occurences of all the keys in `replaces` with the
    correspondant values and returns an ordered dict with the YAML content

    Keyword arguments:
    filename -- name if the file to load.
    typ -- type of yaml loader
    replaces -- key/values to replace in the file content (default {})
    """
    try:
        yaml = get_yaml_loader(typ)
        data = get_file(filename, replaces)
        return yaml.load(data)
    except Exception:
        return None

def examples_list_view():
    examples = get_yaml("../docs/examples/examples.yaml")

    context = {
        "examples": examples,
    }

    return flask.render_template("examples/index.html", **context)


def example_view(subpath):
    examples = get_yaml("../docs/examples/examples.yaml")
    path = subpath.split("/")

    example = examples[path[0]][path[1]]
    return flask.render_template("_layouts/examples.html", **example)

# Template finder
template_finder_view = TemplateFinder.as_view("template_finder")
app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/examples", view_func=examples_list_view)
app.add_url_rule("/examples/<path:subpath>", view_func=example_view)
# app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
