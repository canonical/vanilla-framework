class DiscourseAPI:
  """
  Retrieve information from a Discourse installation
  through its API
  """

  def __init__(self, base_url, session, api_key=None, api_username=None):
      """
      @param base_url: The Discourse URL (e.g. https://discourse.example.com)
      """

      self.base_url = base_url.rstrip("/")
      self.session = session

      if api_key and api_username:
          self.session.headers = {
              "Api-Key": api_key,
              "Api-Username": api_username,
          }
