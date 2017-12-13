# Core packages
import os
import re
import yaml

# External packages
import pycountry
import yamlordereddictloader


# Helper functions
# ===

def is_language(code):
    """
    Check if a 2-letter language code is valid
    """

    try:
        return bool(pycountry.languages.get(alpha_2=code))
    except KeyError:
        return False


def requested_languages(flask_request):
    """
    Given a Flask request object, return a list of the preferred languages
    """

    accept_language = flask_request.headers.get('accept-language', '')
    preferred_languages = []
    for language in accept_language.split(','):
        preferred_languages.append(language[:2])

    return preferred_languages


def get_versions(version_filepath):
    """
    Check if this repo has versions
    """

    if os.path.isfile(version_filepath):
        with open(version_filepath) as version_file:
            versions = list(filter(None, version_file.read().splitlines()))

        if len(versions):
            return versions


def get_file(request_path):
    """
    Given a request_path, return the path where the file should be
    """

    if request_path.endswith('/'):
        return request_path + '/index.html'
    else:
        return request_path + '.html'


def is_version(version):
    """
    Check if a string is one of the available versions
    """

    versions = get_versions()

    return versions and version in versions


def split_path(request_path, languages, versions):
    """
    Given a URL path of the form:
      (/{version})(/language)/remaining/path
    and a list of valid versions and languages,
    extract and return any versions and languages and the remaining URL path
    """

    # Try parsing languages and versions
    url_parts = request_path.split('/')[1:]
    language = None
    version = None

    for part in url_parts:
        if languages and part in languages:
            language = part
            url_parts.remove(part)
        elif versions and part in versions:
            version = part
            url_parts.remove(part)

    return (language, version, "/" + "/".join(url_parts))


class YamlRegexMap:
    def __init__(self, filepath):
        """
        Given the path to a YAML file of RegEx mappings like:

            hello/(?P<person>.*)?: "/say-hello?name={person}"
            google/(?P<search>.*)?: "https://google.com/?q={search}"

        Return a list of compiled Regex matches and destination strings:

            [
                (<regex>, "/say-hello?name={person}"),
                (<regex>, "https://google.com/?q={search}"),
            ]
        """

        self.matches = []

        if os.path.isfile(filepath):
            with open(filepath) as redirects_file:
                lines = yaml.load(
                    redirects_file,
                    Loader=yamlordereddictloader.Loader
                )

                if lines:
                    for url_match, target_url in lines.items():
                        if url_match[0] != '/':
                            url_match = '/' + url_match

                        self.matches.append(
                            (re.compile(url_match), target_url)
                        )

    def get_target(self, url_path):
        for (match, target) in self.matches:
            result = match.fullmatch(url_path)

            if result:
                parts = {}
                for name, value in result.groupdict().items():
                    parts[name] = value or ''
                return target.format(**parts)


class TemplateFinder:
    """
    Provides functions for matching URL paths to templates
    """

    def __init__(self, templates_dir):
        """
        Initialise the class with the path to the templates we should use
        """

        self.templates_dir = templates_dir

    def get_languages(self, preferred_order=[]):
        """
        Find the available languages that exist as template folders
        """

        available_languages = []
        top_folders = os.listdir(self.templates_dir)

        for folder in top_folders:
            if is_language(folder):
                available_languages.append(folder)

        weighted_languages = []

        if available_languages and preferred_order:
            for item in available_languages:
                try:
                    weight = preferred_order.index(item)
                except ValueError:
                    weight = available_languages.index(item) + len(
                        preferred_order
                    )

                weighted_languages.append(
                    (weight, item)
                )

            weighted_languages = sorted(weighted_languages)

            available_languages = [item[1] for item in weighted_languages]

        return available_languages

    def try_alternate_path(self, path):
        """
        If the path is for a file, see if the directory exists instead.
        If the path is for a directory, see if the file exists instead.
        If the alternate exists, return it. Otherwise return None.
        """

        # Try the other URL form
        if path.endswith('/'):
            new_path = path.rstrip('/')
            if os.path.isfile(self.templates_dir + get_file(new_path)):
                return new_path
        else:
            new_path = path + '/'
            if os.path.isfile(self.templates_dir + get_file(new_path)):
                return new_path

    def try_language_version_path(self, path, languages, versions):
        """
        Given a URL path that doesn't contain any language or version
        information, and a list of possible languages and versions,
        try adding each language and version to the URL until we find
        an existing file, and then return the path for that file
        """

        # Build up language and version URLs
        search_paths = []

        if languages:
            for language in languages:
                search_paths.append("/" + language + path)

        if versions:
            new_paths = []
            for version in versions:
                search_paths.append("/" + version + path)

                for search_path in search_paths:
                    new_paths.append("/" + version + search_path)

            search_paths += new_paths

        for path in search_paths:
            alt_path = path + '/'
            if alt_path.endswith('//'):
                alt_path = alt_path[:-2]

            template = self.templates_dir + get_file(path)
            alt_template = self.templates_dir + get_file(alt_path)

            if os.path.isfile(template):
                return path
            elif os.path.isfile(alt_template):
                return alt_path

    def find_alternate_path(self, request_path, languages, versions):
        """
        For a request_path that doesn't match up to a file,
        try our best to find a URL that does
        """

        alternate_path = self.try_alternate_path(request_path)

        if alternate_path:
            return alternate_path

        (language, version, remaining_path) = split_path(
            request_path, languages, versions
        )

        # If the URL contained a language or version, then
        # we should limit the lists of possibilities
        if language:
            languages = [language]

        if version:
            versions = [version]

        language_version_path = self.try_language_version_path(
            remaining_path,
            languages,
            versions
        )

        if language_version_path:
            return language_version_path
