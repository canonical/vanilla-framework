# Core packages
import os
import re

# External packages
import flask

# Local packages
import routing


application_root = ''
base_dir = os.path.abspath(os.path.dirname(__file__))
app = flask.Flask(
    __name__,
    root_path=base_dir,
    static_folder=os.path.join(base_dir, 'static'),
    template_folder=os.path.join(base_dir, 'templates'),
)

permanent_redirects_path = app.config.get(
    'PERMANENT_REDIRECTS_FILEPATH',
    'permanent-redirects.yaml'
)
redirects_path = app.config.get(
    'REDIRECTS_FILEPATH',
    'redirects.yaml'
)
permanent_redirect_map = routing.YamlRegexMap(permanent_redirects_path)
redirect_map = routing.YamlRegexMap(redirects_path)


# Ordered before_request processors
# ===
# The order of these functions must be preserved


@app.before_request
def apply_redirects():
    """
    Process the two mappings defined above
    of permanent and temporary redirects to target URLs,
    to send the appropriate redirect responses
    """

    permanent_redirect_url = permanent_redirect_map.get_target(
        flask.request.path
    )
    if permanent_redirect_url:
        return flask.redirect(permanent_redirect_url, code=301)

    redirect_url = redirect_map.get_target(flask.request.path)
    if redirect_url:
        return flask.redirect(redirect_url)


@app.before_request
def strip_extensions():
    """
    Remove .html and index.html
    """

    index_match = re.match(r'^(.*/)index(.html)?$', flask.request.path)
    html_match = re.match(r'^(.*[^/]).html$', flask.request.path)

    if index_match:
        return flask.redirect(index_match.group(1), code=301)
    elif html_match:
        return flask.redirect(html_match.group(1), code=301)


@app.before_request
def find_file_or_redirect():
    """
    If a file doesn't exist at the requested path, see if it exists at one
    of the other paths, and redirect there if necessary
    """

    # Check the request is within this application
    if not flask.request.path.startswith(application_root):
        return

    # Get a contextual request_path by stripping application_root
    local_request_path = flask.request.path[len(application_root):]

    template_finder = routing.TemplateFinder(app.template_folder)
    file_path = routing.get_file(local_request_path)
    preferred_languages = routing.requested_languages(flask.request)
    if 'en' not in preferred_languages:
        preferred_languages.append('en')
    languages = template_finder.get_languages(preferred_languages)
    versions = routing.get_versions(
        app.config.get('VERSION_FILEPATH', 'versions')
    )

    if os.path.isfile(app.template_folder + file_path):
        return flask.render_template(file_path)
    else:
        new_path = template_finder.find_alternate_path(
            local_request_path,
            languages,
            versions
        )

        if new_path:
            return flask.redirect(application_root + new_path)


@app.route('/')
def redirect_to_root():
    """
    Redirect homepage to application_root
    """

    return flask.redirect(application_root + '/')
