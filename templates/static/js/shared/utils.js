(function() {
// throttling function calls, by Remy Sharp
// http://remysharp.com/2010/07/21/throttling-function-calls/
  const throttle = function(fn, delay) {
    let timer = null;
    return function() {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  };

  /**
   * `fetch()` wrapper that throws an error if the response is not OK.
   * @param {String} url Address to fetch
   * @param {RequestInit} opts Options for the fetch request
   * @returns {Promise<Response>} Response object
   * @throws {Error} If the response is not in the 200 (OK) range
   */
  const fetchResponse = async function(url, opts = {}) {
    const response = await fetch(url, opts);
    if (!response.ok) {
      throw new Error(`Failed to fetch example ${url} with status ${response.status}`);
    }
    return response;
  };

  /**
   * Fetch the response text of a URL.
   * @param {String} url Address to fetch
   * @returns {Promise<String>} Response text
   * @throws {Error} If the response is not in the 200 (OK) range
   */
   const fetchResponseText = async function(url) {
    return (await fetchResponse(url)).text();
  }

  window.throttle = throttle;
  window.fetchResponse = fetchResponse;
  window.fetchResponseText = fetchResponseText;
})();
