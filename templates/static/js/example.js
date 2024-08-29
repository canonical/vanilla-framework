(function () {
  if (!window.VANILLA_VERSION) {
    throw Error('VANILLA_VERSION not specified.');
  }

  /**
   * Mapping of example keys to the regex patterns used to strip them out of an example
   * @type {{body: RegExp, jinja: RegExp, title: RegExp, head: RegExp}}
   */
  const EXAMPLE_CONTENT_PATTERNS = {
    body: /<body[^>]*>((.|[\n\r])*)<\/body>/im,
    jinja: /{% block content %}([\s\S]*?){% endblock %}/,
    title: /<title[^>]*>((.|[\n\r])*)<\/title>/im,
    head: /<head[^>]*>((.|[\n\r])*)<\/head>/im,
  };

  /**
   * Object representing the structure for language option mappings.
   * @typedef {Object} ExampleLanguageConfig
   * @property {string} label - Human-readable label.
   * @property {string} langIdentifier - Prism language identifier.
   */

  /**
   * Mapping of example keys to their configurations.
   * @type {{jinja: ExampleLanguageConfig, css: ExampleLanguageConfig, js: ExampleLanguageConfig, html: ExampleLanguageConfig}}
   */
  const EXAMPLE_OPTIONS_CFG = {
    html: {
      label: 'HTML',
      langIdentifier: 'html',
    },
    css: {
      label: 'CSS',
      langIdentifier: 'css',
    },
    js: {
      label: 'JS',
      langIdentifier: 'js',
    },
    jinja: {
      label: 'Jinja',
      // While `jinja2` is an option on Prism, it does not seem to highlight syntax properly. So use HTML instead.
      langIdentifier: 'html',
    },
  };

  // throttling function calls, by Remy Sharp
  // http://remysharp.com/2010/07/21/throttling-function-calls/
  var throttle = function (fn, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  var CODEPEN_CONFIG = {
    title: 'Vanilla framework example',
    head: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    stylesheets: [
      // link to latest Vanilla CSS
      // if it's a demo, use local build.css for better QA, otherwise use latest published Vanilla
      /demos\.haus$/.test(window.location.host)
        ? `${window.location.origin}/static/build/css/build.css`
        : 'https://assets.ubuntu.com/v1/vanilla-framework-version-' + VANILLA_VERSION + '.min.css',
      // link to example stylesheet (to set margin on body)
      'https://assets.ubuntu.com/v1/4653d9ba-example.css',
    ],
    tags: ['Vanilla framework'],
  };

  document.addEventListener('DOMContentLoaded', function () {
    var examples = document.querySelectorAll('.js-example');

    [].slice.call(examples).forEach(fetchExample);
  });

  /**
   * Sends a `GET` request to `url` to request an example's contents.
   * @param {String} url Address of the example
   * @returns {Promise<String>} Response text
   */
  async function fetchExampleResponseText(url) {
    var request = new XMLHttpRequest();

    const result = new Promise(function (resolve, reject) {
      request.onreadystatechange = function () {
        if (request.status === 200 && request.readyState === 4) {
          resolve(request.responseText);
        } else if (request.status > 0 && (request.status < 200 || request.status >= 300)) {
          reject('Failed to fetch example ' + url + ' with status ' + request.status);
        }
      };
    });

    request.open('GET', url, true);
    request.send(null);

    return result;
  }

  /**
   * Fetches the requested example and replaces the example element with the content and code snippet of the example.
   * @param {HTMLAnchorElement} exampleElement `a.js-example` element with `href` set to the address of the example to fetch
   */
  async function fetchExample(exampleElement) {
    // TODO - integrate fetching/rendering more cleanly in future
    /** Rendered HTML that will be seen by users */
    const fetchRendered = fetchExampleResponseText(exampleElement.href);

    var exampleRequests = [fetchRendered];

    // If the example requires raw template rendering, request the raw template file as well
    if (exampleElement.getAttribute('data-lang') === 'jinja') {
      var exampleURL = new URL(exampleElement.href);
      var queryParams = new URLSearchParams(exampleURL.search);
      queryParams.set('raw', true);
      exampleURL.search = queryParams.toString();

      const fetchRaw = fetchExampleResponseText(
        exampleURL.href
          // Raw templates are not served at standalone paths, so strip it from the URL if it was found.
          .replace(/standalone/, '/'),
      );
      exampleRequests.push(fetchRaw);
    }

    const [renderedHtml, rawHtml] = await Promise.all(exampleRequests);

    renderExample(exampleElement, renderedHtml, rawHtml);
  }

  /**
   * Format source code based on language
   * @param {String} source - source code to format
   * @param {'html'|'jinja'|'js'|'css'} lang - language of the source code
   * @returns {String} formatted source code
   */
  function formatSource(source, lang) {
    try {
      switch (lang) {
        case 'html':
        case 'jinja':
          return window.html_beautify(source, {indent_size: 2});
        case 'js':
          return window.js_beautify(source, {indent_size: 2});
        case 'css':
          return window.css_beautify(source, {indent_size: 2});
        default:
          return source;
      }
    } catch (error) {
      // If beautify fails (e.g. invalid source, CDN outage, error upstream), return original source
      console.error(`Failed to format ${lang} source code: ${error}`, `This could be due to invalid ${lang} source code, an issue with the formatter, or a CDN outage.`, {source});
      return source;
    }
  }

  /**
   * Create `pre`-formatted code for a block of source
   * @param {String} source Unformatted source code
   * @param {'html'|'jinja'|'js'|'css'} lang Language of the source code
   * @param {Boolean} hide Whether the pre-code should be hidden initially
   * @returns {HTMLPreElement} Code snippet containing the source code
   */
  function createPreCode(source, lang, hide = true) {
    var code = document.createElement('code');
    code.appendChild(document.createTextNode(formatSource(source, lang)));

    var pre = document.createElement('pre');
    pre.classList.add('p-code-snippet__block');

    // TODO: move max-height elsewhere to CSS?
    pre.style.maxHeight = '300px';

    if (hide) {
      pre.classList.add('u-hide');
    }

    if (lang) {
      pre.setAttribute('data-lang', lang);
      pre.classList.add('language-' + (EXAMPLE_OPTIONS_CFG[lang].langIdentifier || lang));
    }

    pre.appendChild(code);
    return pre;
  }

  /**
   * Extract a section of HTML from the document
   * @param {'body'|'jinja'|'title'|'head'} sectionKey The key/type of content to be extracted
   * @param {String} documentHTML The example's full HTML content. This may be rendered or raw Jinja template.
   * @returns {String} The requested section of the document, or an empty string if it was not found.
   */
  function getExampleSection(sectionKey, documentHTML) {
    const pattern = EXAMPLE_CONTENT_PATTERNS[sectionKey];
    return pattern?.exec(documentHTML)?.[1]?.trim() || '';
  }

  /**
   * Replaces an example placeholder element with its rendered result and code snippet.
   * @param {HTMLAnchorElement} placementElement `a.js-example` element used as a placeholder for the example to render
   * @param {String} renderedHtml Full document HTML of the example as it is shown to end-users
   * @param {String|null} jinjaTemplate Jinja Template of the example as it may be used by developers, if supported
   */
  function renderExample(placementElement, renderedHtml, jinjaTemplate) {
    const bodyHTML = getExampleSection('body', renderedHtml);
    const headHTML = getExampleSection('head', renderedHtml);
    const title = getExampleSection('title', renderedHtml);
    const templateHTML = getExampleSection('jinja', jinjaTemplate);
    const hasJinjaTemplate = templateHTML?.length > 0;

    var htmlSource = stripScriptsFromSource(bodyHTML);
    var jsSource = getScriptFromSource(bodyHTML);
    var cssSource = getStyleFromSource(headHTML);
    var externalScripts = getExternalScriptsFromSource(renderedHtml);
    var codePenData = {
      html: htmlSource,
      css: cssSource,
      js: jsSource,
      externalJS: externalScripts,
    };

    var height = placementElement.getAttribute('data-height');

    var codeSnippet = document.createElement('div');

    codeSnippet.classList.add('p-code-snippet', 'is-bordered');

    var header = document.createElement('div');
    header.classList.add('p-code-snippet__header');
    var titleEl = document.createElement('h5');
    titleEl.classList.add('p-code-snippet__title');

    // example page title is structured as "... | Examples | Vanilla documentation"
    // we want to strip anything after first | pipe
    titleEl.innerText = title.split('|')[0];

    header.appendChild(titleEl);
    codeSnippet.appendChild(header);

    placementElement.parentNode.insertBefore(codeSnippet, placementElement);
    renderIframe(codeSnippet, renderedHtml, height);

    // Build code block structure
    var options = ['html'];
    if (hasJinjaTemplate) {
      codeSnippet.appendChild(createPreCode(templateHTML, 'jinja', false));
      // Make sure Jinja comes first if it's supported, so it's the default option
      options.unshift('jinja');
    }
    codeSnippet.appendChild(createPreCode(bodyHTML, 'html', hasJinjaTemplate));
    if (jsSource) {
      codeSnippet.appendChild(createPreCode(jsSource, 'js'));
      options.push('js');
    }
    if (cssSource) {
      codeSnippet.appendChild(createPreCode(cssSource, 'css'));
      options.push('css');
    }

    renderDropdown(header, options);
    renderCodePenEditLink(codeSnippet, codePenData);

    if (Prism) {
      Prism.highlightAllUnder(codeSnippet);
    }

    // The example has been rendered successfully, hide the placeholder element.
    placementElement.style.display = 'none';
  }

  /**
   * Renders a dropdown containing the code snippet options, allowing user to switch between multiple views.
   * @param {HTMLDivElement} codeSnippetHeader The header element of the code snippet
   * @param {('html'|'jinja'|'js'|'css')[]} codeSnippetModes List of code snippet mode options
   */
  function renderDropdown(codeSnippetHeader, codeSnippetModes) {
    // only add dropdown if there is more than one code block
    if (codeSnippetModes.length > 1) {
      var dropdownsEl = document.createElement('div');
      dropdownsEl.classList.add('p-code-snippet__dropdowns');

      var selectEl = document.createElement('select');
      selectEl.classList.add('p-code-snippet__dropdown');

      codeSnippetModes.forEach(function (option) {
        var optionHTML = document.createElement('option');
        optionHTML.value = option.toLowerCase();
        optionHTML.innerText = EXAMPLE_OPTIONS_CFG[option]?.label || option.toLowerCase();
        selectEl.appendChild(optionHTML);
      });

      dropdownsEl.appendChild(selectEl);
      codeSnippetHeader.appendChild(dropdownsEl);
      attachDropdownEvents(selectEl);
    }
  }

  function resizeIframe(iframe) {
    if (iframe.contentDocument.readyState == 'complete') {
      var frameHeight = iframe.contentDocument.body.scrollHeight;
      var style = iframe.contentWindow.getComputedStyle(iframe.contentDocument.body);
      iframe.height = frameHeight + 32 + 'px'; // accommodate for body margin
    }
  }

  function renderIframe(container, html, height) {
    var iframe = document.createElement('iframe');

    if (height) {
      iframe.height = height + 'px';
    }
    container.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    // if height wasn't specified, try to determine it from example content
    if (!height) {
      // Wait for content to load before determining height
      var resizeInterval = setInterval(function () {
        if (iframe.contentDocument.readyState == 'complete') {
          resizeIframe(iframe);
          clearInterval(resizeInterval);
          fixScroll();
        }
      }, 100);

      // cancel resizing if frame didn't load in 5s
      setTimeout(function () {
        clearInterval(resizeInterval);
      }, 5000);

      window.addEventListener(
        'resize',
        throttle(function () {
          resizeIframe(iframe);
        }, 10),
      );
    }

    return iframe;
  }

  function renderCodePenEditLink(snippet, sourceData) {
    var html = sourceData.html === null ? '' : sourceData.html;
    var css = sourceData.css === null ? '' : sourceData.css;
    var js = sourceData.js === null ? '' : sourceData.js;

    if (html || css || js) {
      var container = document.createElement('div');
      var form = document.createElement('form');
      var input = document.createElement('input');
      var link = document.createElement('a');
      var data = {
        title: CODEPEN_CONFIG.title,
        head: CODEPEN_CONFIG.head,
        html: html,
        css: css,
        js: js,
        css_external: CODEPEN_CONFIG.stylesheets.join(';'),
        js_external: sourceData.externalJS.join(';'),
      };
      // Replace double quotes to avoid errors on CodePen
      var JSONstring = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;');

      container.classList.add('p-code-snippet__header');

      form.setAttribute('action', 'https://codepen.io/pen/define');
      form.setAttribute('method', 'POST');
      form.setAttribute('target', '_blank');

      input.setAttribute('type', 'hidden');
      input.setAttribute('name', 'data');
      input.setAttribute('value', JSONstring);

      link.innerHTML = 'Edit on CodePen';
      link.style.cssText = 'display: block; padding: 0.5rem 0;';

      form.appendChild(input);
      form.appendChild(link);
      container.appendChild(form);
      handleCodePenClick(link, form);
      snippet.appendChild(container);
    }
  }

  function handleCodePenClick(link, form) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      form.submit();
    });

    // handle middle mouse button click
    link.addEventListener('mouseup', function (e) {
      if (e.which === 2) {
        link.click();
      }
    });
  }

  function getStyleFromSource(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var style = div.querySelector('style');
    return style ? style.innerHTML.trim() : null;
  }

  function stripScriptsFromSource(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML.trim();
  }

  function getScriptFromSource(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var script = div.querySelector('script');
    return script ? script.innerHTML.trim() : null;
  }

  function getExternalScriptsFromSource(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var scripts = div.querySelectorAll('script[src]');
    scripts = [].slice.apply(scripts).map(function (s) {
      return s.src;
    });
    return scripts;
  }

  function fixScroll() {
    const titleId = window.location.hash;
    if (titleId) {
      const title = document.querySelector(titleId);
      title.scrollIntoView();
    }
  }

  /**
    Attaches change event listener to a given select.
    @param {HTMLElement} dropdown Select element belonging to a code snippet.
  */
  function attachDropdownEvents(dropdown) {
    dropdown.addEventListener('change', function (e) {
      var snippet = e.target.closest('.p-code-snippet');

      // toggle code blocks visibility based on selected language
      for (var i = 0; i < dropdown.options.length; i++) {
        var lang = dropdown.options[i].value;
        var block = snippet && snippet.querySelector("[data-lang='" + lang + "']");

        if (lang === e.target.value) {
          block.classList.remove('u-hide');
          block.setAttribute('aria-hidden', false);
        } else {
          block.classList.add('u-hide');
          block.setAttribute('aria-hidden', true);
        }
      }
    });
  }
})();
