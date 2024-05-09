import urllib

def _add_query_param_to_url(url, param_name, param_value):
    """
    Modifies a `url` by adding `param_name=param_value` to the query string.
    :param url: URL to apply `param_name=param_value` to
    :param param_name: Name of the query parameter to set
    :param param_value: Value of the query parameter to set
    :return: `url` after adding `param_name=param_value` to the query string.
    """
    parsed_url = urllib.parse.urlparse(url)
    query_params = urllib.parse.parse_qs(parsed_url.query)
    param_value = param_value.strip() if param_value else ""

    if len(param_value) > 0:
        query_params[param_name] = param_value
    elif param_name in query_params:
        del query_params[param_name]

    encoded_query_params = urllib.parse.urlencode(query_params, doseq=True)
    new_url_parts = (
        parsed_url.scheme, parsed_url.netloc, parsed_url.path, parsed_url.params, encoded_query_params,
        parsed_url.fragment)

    return urllib.parse.urlunparse(new_url_parts)