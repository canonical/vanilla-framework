# Dependencies
import yaml
import flask
from webapp.util import _add_query_param_to_url

# Constants
with open("color-themes.yml") as color_themes_file:
    color_themes_file_contents = yaml.load(color_themes_file.read(), Loader=yaml.FullLoader)
    SUPPORTED_COLOR_THEMES = color_themes_file_contents["themes"]
    DEFAULT_COLOR_THEME = color_themes_file_contents["default_theme"]
    COLOR_THEME_PATH_OVERRIDES = color_themes_file_contents["path_overrides"]


def _deduce_theme_from_path_name(path):
    """
    There is a naming convention that (most) of our theme-specific components use; end of the path is a color theme.
    This method examines `path` and returns the first color theme that matches the end of `path`
    :param path:
    :return: color theme name that matches the end of `path`, else None
    """
    for theme_name in SUPPORTED_COLOR_THEMES:
        # If an example's path ends with a theme name, then only that theme is supported.
        if path.endswith(theme_name):
            return theme_name


def _get_available_color_theme_names_for_example(path):
    """
    Gets the color themes for an example component
    :param path: Path to the example component, from the webroot
    :return: list of color themes supported for the example
    """
    if path in COLOR_THEME_PATH_OVERRIDES:
        theme_path_override_metadata = COLOR_THEME_PATH_OVERRIDES[path]
        if "is_not_themed" in theme_path_override_metadata and theme_path_override_metadata["is_not_themed"]:
            return list()
        if "available_themes" in theme_path_override_metadata:
            return [path_theme for path_theme in theme_path_override_metadata["available_themes"] if
                    path_theme in SUPPORTED_COLOR_THEMES]

    return list(SUPPORTED_COLOR_THEMES.keys())


def _path_to_color_theme_reference(path):
    """
    `color-themes.yml` stores maps of color theme paths that can be used to quickly lpok up theme information for a path.
    This method may be used to quickly convert a path to the format used in `color-themes.yml`
    :param path: Requested HTTP path, relative to webroot
    :return: `path` in a format that matches `color-themes.yml`
    """
    path = path.lower()
    # Remove / from prefix and suffix of the path to match path_overrides in color-themes.yml
    if path.startswith("/"):
        path = path[1:]
    if path.endswith("/"):
        path = path[:-1]
    return path


def _get_available_color_theme_names(path):
    """
    Gets the color themes for a path
    :param path: Requested HTTP path, relative to webroot
    :return: List of color themes supported for the path
    """
    if path.startswith("docs/examples/"):
        return _get_available_color_theme_names_for_example(path)


def _get_default_color_theme(path):
    """
    :param path: Requested HTTP path, relative to webroot
    :return: Default color theme for a path
    """
    path = _path_to_color_theme_reference(path)

    # This path has a color theme path override defined
    if path in COLOR_THEME_PATH_OVERRIDES:
        color_theme_path_override_metadata = COLOR_THEME_PATH_OVERRIDES[path]

        # This path is marked as unthemed
        if "is_not_themed" in color_theme_path_override_metadata and color_theme_path_override_metadata["is_not_themed"]:
            return

        # Return the path-specific default theme if found
        if "default_theme" in color_theme_path_override_metadata and color_theme_path_override_metadata["default_theme"]:
            return color_theme_path_override_metadata["default_theme"]

    # Return first available color theme name for this path
    available_color_theme_names = _get_available_color_theme_names(path)
    if len(available_color_theme_names) > 0:
        return available_color_theme_names[0]

    # Fallback to global default color theme
    return DEFAULT_COLOR_THEME


def _apply_color_theme(path):
    """
    Applies color theme and supported color theme query parameters to the requested route.
    :param path: Requested HTTP path, relative to webroot
    :return:
    """

    path = _path_to_color_theme_reference(path)
    requested_color_theme = flask.request.args.get("theme")
    available_color_themes = list()

    # The path requested a specific color theme by naming convention
    theme_referenced_specifically_by_path = _deduce_theme_from_path_name(path)
    if theme_referenced_specifically_by_path:
        color_theme_to_use = theme_referenced_specifically_by_path
    else:
        available_color_themes = _get_available_color_theme_names(path)
        # Valid color theme passed in by query params
        if requested_color_theme is not None and requested_color_theme in available_color_themes:
            color_theme_to_use = requested_color_theme
        # Invalid / no color theme requested and no supported themes available; fallback to default
        else:
            color_theme_to_use = _get_default_color_theme(path)

    # Construct a new URL with the query parameters updated
    redirect_url = _add_query_param_to_url(flask.request.url, "theme", color_theme_to_use)
    color_themes_for_query_params = list()
    # Only add an available themes query parameter if there is more than 1 color theme available
    if len(available_color_themes) > 1:
        color_themes_for_query_params = available_color_themes
    redirect_url = _add_query_param_to_url(redirect_url, "available_themes", ','.join(color_themes_for_query_params))

    # Redirect the user to the modified URL if they are not currently at that address
    if flask.request.url != redirect_url:
        return flask.redirect(redirect_url, code=307)
