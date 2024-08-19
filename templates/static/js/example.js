(function () {
  if (!window.VANILLA_VERSION) {
    throw Error('VANILLA_VERSION not specified.');
  }

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

  async function fetchResponseText(url) {
    var request = new XMLHttpRequest();

    const prms = new Promise(function(resolve, reject)  {
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

    return prms;
  }

  async function fetchExample(exampleElement) {
    const [renderedHtml, rawHtml] = await Promise.all([
      fetchResponseText(exampleElement.href),
      fetchResponseText(exampleElement.href.replace(/docs/, '/').replace(/standalone/, '/'))
    ]);

    renderExample(exampleElement, renderedHtml, rawHtml);
    exampleElement.style.display = 'none';
  }

  /**
   * Format source code based on language
   * @param {String} source - source code to format
   * @param {String} lang - language of the source code
   * @returns {String} formatted source code
   */
  function formatSource(source, lang) {
    try {
      switch (lang) {
        case 'html':
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

  function createPreCode(source, lang) {
    var code = document.createElement('code');
    code.appendChild(document.createTextNode(formatSource(source, lang)));

    var pre = document.createElement('pre');
    pre.classList.add('p-code-snippet__block');

    // TODO: move max-height elsewhere to CSS?
    pre.style.maxHeight = '300px';

    if (lang !== 'html') {
      pre.classList.add('u-hide');
    }

    if (lang) {
      pre.setAttribute('data-lang', lang);
      pre.classList.add('language-' + lang);
    }

    pre.appendChild(code);
    return pre;
  }

  function renderExample(placementElement, renderedHtml, rawHtml) {
    var bodyPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    var contentPattern = /{% block content %}([\s\S]*?){% endblock %}/;
    var titlePattern = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
    var headPattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;

    var title = titlePattern.exec(renderedHtml)[1].trim();
    var bodyHTML = bodyPattern.exec(renderedHtml)[1].trim();
    var headHTML = headPattern.exec(renderedHtml)[1].trim();
    var contentTemplate = contentPattern.exec(rawHtml)[1].trim();

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
    codeSnippet.appendChild(createPreCode(contentTemplate, 'html'));
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
  }

  function renderDropdown(header, options) {
    // only add dropdown if there is more than one code block
    if (options.length > 1) {
      var dropdownsEl = document.createElement('div');
      dropdownsEl.classList.add('p-code-snippet__dropdowns');

      var selectEl = document.createElement('select');
      selectEl.classList.add('p-code-snippet__dropdown');

      options.forEach(function (option) {
        var optionHTML = document.createElement('option');
        optionHTML.value = option.toLowerCase();
        optionHTML.innerText = option.toUpperCase();
        selectEl.appendChild(optionHTML);
      });

      dropdownsEl.appendChild(selectEl);
      header.appendChild(dropdownsEl);
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
