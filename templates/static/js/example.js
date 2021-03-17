(function () {
  if (!window.VANILLA_VERSION) {
    throw Error('VANILLA_VERSION not specified.');
  }

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

    // IE11 doesn't support forEach on NodeList
    // we use this check to skip rendering embeds in IE
    if (examples.forEach) {
      [].slice.call(examples).forEach(fetchExample);
    }
  });

  function fetchExample(exampleElement) {
    var link = exampleElement.href;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.status === 200 && request.readyState === 4) {
        var html = request.responseText;
        renderExample(exampleElement, html);
        exampleElement.style.display = 'none';
      }
    };

    request.open('GET', link, true);
    request.send(null);
  }

  function createPreCode(source, lang) {
    var code = document.createElement('code');
    code.appendChild(document.createTextNode(source));

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

  function renderExample(placementElement, html) {
    var bodyPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    var titlePattern = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
    var headPattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;

    var title = titlePattern.exec(html)[1].trim();
    var bodyHTML = bodyPattern.exec(html)[1].trim();
    var headHTML = headPattern.exec(html)[1].trim();

    var htmlSource = stripScriptsFromSource(bodyHTML);
    var jsSource = getScriptFromSource(bodyHTML);
    var cssSource = getStyleFromSource(headHTML);
    var externalScripts = getExternalScriptsFromSource(html);
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

    // Build code block structure
    var options = ['html'];
    codeSnippet.appendChild(createPreCode(htmlSource, 'html'));
    if (jsSource) {
      codeSnippet.appendChild(createPreCode(jsSource, 'js'));
      options.push('js');
    }
    if (cssSource) {
      codeSnippet.appendChild(createPreCode(cssSource, 'css'));
      options.push('css');
    }

    renderDropdown(header, options);
    placementElement.parentNode.insertBefore(codeSnippet, placementElement);
    renderIframe(codeSnippet, html, height);
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
          var frameHeight = iframe.contentDocument.body.scrollHeight;
          var style = iframe.contentWindow.getComputedStyle(iframe.contentDocument.body);
          iframe.height = frameHeight + 32 + 'px'; // accommodate for body margin
          clearInterval(resizeInterval);
        }
      }, 100);

      // cancel resizing if frame didn't load in 5s
      setTimeout(function () {
        clearInterval(resizeInterval);
      }, 5000);
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
