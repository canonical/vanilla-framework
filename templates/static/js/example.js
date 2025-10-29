(function () {
  if (!window.VANILLA_VERSION) {
    throw Error('VANILLA_VERSION not specified.');
  }

  // throttling function calls, by Remy Sharp
  // http://remysharp.com/2010/07/21/throttling-function-calls/
  const throttle = function (fn, delay) {
    let timer = null;
    return function () {
      const context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  /**
   * Mapping of example keys to the regex patterns used to strip them out of an example
   * @type {{body: RegExp, jinja: RegExp, title: RegExp, head: RegExp}}
   */
  const EXAMPLE_CONTENT_PATTERNS = {
    body: /<body[^>]*>((.|[\n\r])*)<\/body>/im,
    jinja: /{% block content %}([\s\S]*?){% endblock( content)? %}/,
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
  const EXAMPLE_LANGUAGE_OPTION_CONFIG = {
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

  const CODEPEN_CONFIG = {
    title: 'Vanilla framework example',
    head: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    stylesheets: [
      // link to latest Vanilla CSS
      // if it's a demo, use local build.css for better QA, otherwise use latest published Vanilla
      /demos\.haus$/.test(window.location.host)
        ? `${window.location.origin}/static/build/css/build.css`
        : 'https://assets.ubuntu.com/v1/vanilla_framework_version_' + VANILLA_VERSION.replaceAll('.', '_') + '_min.css',
      // link to example stylesheet (to set margin on body)
      'https://assets.ubuntu.com/v1/4653d9ba-example.css',
    ],
    tags: ['Vanilla framework'],
  };

  document.addEventListener('DOMContentLoaded', function () {
    const examples = document.querySelectorAll('.js-example');

    [].slice.call(examples).forEach((placementElement) => {
      renderExample(placementElement).catch((error) => {
        console.error('Failed to render example', {placementElement, error});
      });
    });
  });

  /**
   * `fetch()` wrapper that throws an error if the response is not OK.
   * @param {String} url Address to fetch
   * @param {RequestInit} opts Options for the fetch request
   * @returns {Promise<Response>} Response object
   * @throws {Error} If the response is not in the 200 (OK) range
   */
  const fetchResponse = async function (url, opts = {}) {
    try {
      const response = await fetch(url, opts);
      if (!response.ok) {
        throw new Error(`Failed to fetch example ${url} with status ${response.status}`);
      }
      return response;
    } catch (err) {
      console.error('An error occurred while performing a fetch request', err);
      throw err;
    }
  };

  /**
   * Fetch the response text of a URL.
   * @param {String} url Address to fetch
   * @returns {Promise<String>} Response text
   * @throws {Error} If the response is not in the 200 (OK) range
   */
  const fetchResponseText = async function (url) {
    return fetchResponse(url).then((response) => response.text());
  };

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
   * @param {String} source Formatted source code
   * @param {'html'|'jinja'|'js'|'css'} lang Language of the source code
   * @param {Boolean} isHidden Whether the pre-code should be hidden initially
   * @returns {HTMLPreElement} Code snippet containing the source code
   */
  function createPreCode(source, lang, isHidden = true) {
    const code = document.createElement('code');
    code.appendChild(document.createTextNode(source));

    const pre = document.createElement('pre');
    pre.classList.add('p-code-snippet__block');

    // TODO: move max-height elsewhere to CSS?
    pre.style.maxHeight = '300px';

    if (isHidden) {
      pre.classList.add('u-hide');
    }

    if (lang) {
      pre.setAttribute('data-lang', lang);
      pre.classList.add('language-' + (EXAMPLE_LANGUAGE_OPTION_CONFIG[lang]?.langIdentifier || lang));
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
   * Fetches the rendered HTML of an example and extracts the relevant sections for rendering and code snippets.
   * @param {HTMLAnchorElement} placementElement The placeholder element for the example
   * @returns {Promise<{renderedHtml: String, bodyHtml: String, title: String, jsSource: String, externalScripts: NodeListOf<Element>, cssSource: String}>} The extracted sections of the example
   */
  async function fetchRenderedHtml(placementElement) {
    const renderedHtml = await fetchResponseText(placementElement.href);
    let bodyHtml = getExampleSection('body', renderedHtml);

    // Extract JS from the body before we strip it out
    let jsSource = getScriptFromSource(bodyHtml);
    const externalScripts = getExternalScriptsFromSource(renderedHtml);

    // Filter external scripts to only include project-local scripts (not CDN/third-party)
    // and exclude utility/tool files that aren't part of the actual example
    const baseUrl = new URL(placementElement.href);
    const projectScripts = externalScripts.filter((scriptSrc) => {
      try {
        const scriptUrl = new URL(scriptSrc, baseUrl);
        // Only include scripts from the same origin (project scripts)
        if (scriptUrl.origin !== baseUrl.origin) {
          return false;
        }

        // Exclude common utility files that aren't part of the actual example code
        const excludedFiles = ['example-tools.js', 'example.js', 'build.js'];

        const scriptPath = scriptUrl.pathname;
        return !excludedFiles.some((excludedFile) => scriptPath.includes(excludedFile));
      } catch (error) {
        return false;
      }
    });

    // Render external scripts, if no inline-script was found
    if (!jsSource && projectScripts.length > 0) {
      const projectScriptContents = await Promise.all(
        projectScripts.map(async (scriptSrc) => {
          try {
            const absoluteUrl = new URL(scriptSrc, baseUrl).href;
            const scriptContent = await fetchResponseText(absoluteUrl);
            return scriptContent;
          } catch (error) {
            console.warn(`Failed to fetch project script: ${scriptSrc}`, error);
            return `// Failed to load: ${scriptSrc}`;
          }
        }),
      );

      const allJsContent = projectScriptContents.filter(Boolean);
      jsSource = allJsContent.length > 0 ? allJsContent.join('\n\n') : null;
    }

    jsSource = jsSource ? formatSource(jsSource, 'js') : null;
    bodyHtml = formatSource(stripScriptsFromSource(bodyHtml), 'html');

    const title = getExampleSection('title', renderedHtml).split('|')[0];
    const headHtml = getExampleSection('head', renderedHtml);
    const cssSource = formatSource(getStyleFromSource(headHtml), 'css');

    return {renderedHtml, bodyHtml, title, jsSource, externalScripts, cssSource};
  }

  /**
   * Fetches the raw Jinja template of an example and returns the Jinja content block
   * @param {HTMLElement} placementElement The placeholder element for the example
   * @returns {Promise<String>} The Jinja content block of the example
   */
  async function fetchJinjaContentBlock(placementElement) {
    // Raw templates are not served at standalone paths, so strip it from the URL if it was found.
    const exampleUrl = new URL(`${placementElement.href.replace(/standalone/, '/')}`);

    // Add `?raw=true` query parameter to the URL to request the raw Jinja template
    const queryParams = new URLSearchParams(exampleUrl.search);
    queryParams.set('raw', true);
    exampleUrl.search = queryParams.toString();

    const rawJinjaTemplate = await fetchResponseText(exampleUrl.toString());
    return formatSource(getExampleSection('jinja', rawJinjaTemplate), 'jinja');
  }

  /**
   * Replaces an example placeholder element with its rendered result and code snippet.
   * @param {HTMLAnchorElement} placementElement `a.js-example` element used as a placeholder for the example to render
   */
  async function renderExample(placementElement) {
    const codeSnippet = document.createElement('div');
    codeSnippet.classList.add('p-code-snippet', 'is-bordered');

    const header = document.createElement('div');
    header.classList.add('p-code-snippet__header');

    const titleEl = document.createElement('h5');
    titleEl.classList.add('p-code-snippet__title');

    // Example data will be asynchronously fetched and placed here on promise resolution.
    const srcData = {
      html: undefined,
      renderedHtml: undefined,
      jinja: undefined,
      css: undefined,
      js: undefined,
      codePen: undefined,
      title: undefined,
    };

    const exampleRequests = [];

    const fetchHtml = fetchRenderedHtml(placementElement).then(({renderedHtml, bodyHtml, title, jsSource, externalScripts, cssSource}) => {
      // There are required, so throw if they failed
      if (renderedHtml && bodyHtml && title) {
        srcData.renderedHtml = renderedHtml;
        srcData.html = bodyHtml;
        srcData.title = title;
      } else {
        throw new Error('Failed to fetch HTML for example iframe and HTML source.');
      }

      // The rest of the views are optional
      srcData.js = jsSource;
      srcData.css = cssSource;
      srcData.codePen = {
        html: bodyHtml,
        css: cssSource,
        js: jsSource,
        externalJS: externalScripts,
      };
    });
    exampleRequests.push(fetchHtml);

    if (placementElement.getAttribute('data-lang') === 'jinja') {
      // Perform jinja template fetching if the example was marked as a Jinja template
      const fetchJinja = fetchJinjaContentBlock(placementElement).then((contentBlock) => {
        const hasJinjaTemplate = contentBlock?.length > 0;
        if (hasJinjaTemplate) {
          srcData.jinja = contentBlock;
        }
      });
      exampleRequests.push(fetchJinja);
    }

    // Perform as much of the data fetching and processing as possible in parallel
    await Promise.all(exampleRequests);
    // Code after this point depends on the data above being fully fetched, so must come after an `await`

    titleEl.innerText = srcData.title;
    header.appendChild(titleEl);
    codeSnippet.appendChild(header);
    placementElement.parentNode.insertBefore(codeSnippet, placementElement);
    renderIframe(codeSnippet, srcData.renderedHtml, placementElement.getAttribute('data-height'));

    // Gather the languages that have source code available, in the order they should be displayed
    // We can't rely on order of these languages being made available in the promise blocks above due to async nature
    const languageOptions = ['jinja', 'html', 'js', 'css'].filter((lang) => srcData[lang]);
    const sourceBlocks = languageOptions
      // THe first language option that was found is displayed by default. The rest are viewable using dropdown.
      .map((lang, idx) => createPreCode(srcData[lang], lang, idx > 0));

    // Code snippet must be populated with code before Prism can highlight it
    sourceBlocks.forEach((block) => codeSnippet.appendChild(block));
    if (Prism) {
      Prism.highlightAllUnder(codeSnippet);
    }

    if (srcData.codePen) {
      renderCodePenEditLink(codeSnippet, srcData.codePen);
    }

    renderDropdown(header, languageOptions);

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
    if (codeSnippetModes.length <= 1) return;

    const dropdownsEl = document.createElement('div');
    dropdownsEl.classList.add('p-code-snippet__dropdowns');

    const selectEl = document.createElement('select');
    selectEl.classList.add('p-code-snippet__dropdown');

    codeSnippetModes.forEach(function (option) {
      const optionHTML = document.createElement('option');
      optionHTML.value = option.toLowerCase();
      optionHTML.innerText = EXAMPLE_LANGUAGE_OPTION_CONFIG[option]?.label || option.toLowerCase();
      selectEl.appendChild(optionHTML);
    });

    dropdownsEl.appendChild(selectEl);
    codeSnippetHeader.appendChild(dropdownsEl);
    attachDropdownEvents(selectEl);
  }

  function resizeIframe(iframe) {
    if (iframe.contentDocument.readyState == 'complete') {
      const frameHeight = iframe.contentDocument.body.scrollHeight;
      iframe.height = frameHeight + 32 + 'px'; // accommodate for body margin
    }
  }

  function renderIframe(container, html, height) {
    const iframe = document.createElement('iframe');

    if (height) {
      iframe.height = height + 'px';
    }
    container.appendChild(iframe);
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    // if height wasn't specified, try to determine it from example content
    if (!height) {
      // Wait for content to load before determining height
      const resizeInterval = setInterval(function () {
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
    const html = sourceData.html === null ? '' : sourceData.html;
    const css = sourceData.css === null ? '' : sourceData.css;
    const js = sourceData.js === null ? '' : sourceData.js;

    if (html || css || js) {
      const container = document.createElement('div');
      const form = document.createElement('form');
      const input = document.createElement('input');
      const link = document.createElement('a');
      const data = {
        title: CODEPEN_CONFIG.title,
        head: CODEPEN_CONFIG.head,
        html: html,
        css: css,
        js: js,
        css_external: CODEPEN_CONFIG.stylesheets.join(';'),
        js_external: sourceData.externalJS.join(';'),
      };
      // Replace double quotes to avoid errors on CodePen
      const JSONstring = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;');

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
    const div = document.createElement('div');
    div.innerHTML = source;
    const style = div.querySelector('style');
    return style ? style.innerHTML.trim() : null;
  }

  function stripScriptsFromSource(source) {
    const div = document.createElement('div');
    div.innerHTML = source;
    const scripts = div.getElementsByTagName('script');
    let i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML.trim();
  }

  function getScriptFromSource(source) {
    const div = document.createElement('div');
    div.innerHTML = source;
    const script = div.querySelector('script');
    return script ? script.innerHTML.trim() : null;
  }

  function getExternalScriptsFromSource(source) {
    const div = document.createElement('div');
    div.innerHTML = source;
    let scripts = div.querySelectorAll('script[src]');
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
      const snippet = e.target.closest('.p-code-snippet');

      // toggle code blocks visibility based on selected language
      for (let i = 0; i < dropdown.options.length; i++) {
        const lang = dropdown.options[i].value;
        const block = snippet && snippet.querySelector("[data-lang='" + lang + "']");

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
