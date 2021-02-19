(function () {
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

    var height = placementElement.getAttribute('data-height');

    var codeSnippet = document.createElement('div');

    codeSnippet.classList.add('p-code-snippet', 'codepen-example');

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
    iframe.width = '100%';
    if (height) {
      iframe.height = height + 'px';
    }
    iframe.frameBorder = 0;
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
