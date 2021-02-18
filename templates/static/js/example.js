(function () {
  var CODEPEN_HEIGHT = 400;

  document.addEventListener('DOMContentLoaded', function () {
    var examples = document.querySelectorAll('.js-example');

    // IE11 doesn't support forEach on NodeList, CodePen doesn't support IE as well
    // so we don't want to load CodePen when forEach is not supported
    if (examples.forEach) {
      examples.forEach(renderExample);
    }
  });

  function renderExample(exampleElement) {
    var link = exampleElement.href;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.status === 200 && request.readyState === 4) {
        var html = request.responseText;
        renderCodeBlocks(exampleElement, html);
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

  function renderCodeBlocks(placementElement, html) {
    var bodyPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    var titlePattern = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
    var headPattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;

    var title = titlePattern.exec(html)[1].trim();
    var bodyHTML = bodyPattern.exec(html)[1].trim();
    var headHTML = headPattern.exec(html)[1].trim();

    var htmlSource = stripScriptsFromSource(bodyHTML);
    var jsSource = getScriptFromSource(bodyHTML);
    var cssSource = getStyleFromSource(headHTML);

    var height = placementElement.getAttribute('data-height') || CODEPEN_HEIGHT;

    var container = document.createElement('div');

    container.classList.add('p-code-snippet', 'codepen-example');

    var header = document.createElement('div');
    header.classList.add('p-code-snippet__header');
    var titleEl = document.createElement('h5');
    titleEl.classList.add('p-code-snippet__title');
    titleEl.innerText = title;
    header.appendChild(titleEl);

    container.appendChild(header);

    // Build code block structure
    container.appendChild(createPreCode(htmlSource, 'html'));

    if (jsSource || cssSource) {
      var dropdownsEl = document.createElement('div');
      dropdownsEl.classList.add('p-code-snippet__dropdowns');
      var selectEl = document.createElement('select');
      selectEl.classList.add('p-code-snippet__dropdown');
      dropdownsEl.appendChild(selectEl);
      header.appendChild(dropdownsEl);
      var optionHTML = document.createElement('option');
      optionHTML.value = 'html';
      optionHTML.innerText = 'HTML';
      selectEl.appendChild(optionHTML);
      attachDropdownEvents(selectEl);
    }

    if (jsSource) {
      container.appendChild(createPreCode(jsSource, 'js'));
      var optionJS = document.createElement('option');
      optionJS.value = 'js';
      optionJS.innerText = 'JS';
      selectEl.appendChild(optionJS);
    }

    if (cssSource) {
      container.appendChild(createPreCode(cssSource, 'css'));
      var optionCSS = document.createElement('option');
      optionCSS.value = 'css';
      optionCSS.innerText = 'CSS';
      selectEl.appendChild(optionCSS);
    }

    placementElement.parentNode.insertBefore(container, placementElement);

    var iframe = renderIframe(container, html, height);

    if (Prism) {
      Prism.highlightAllUnder(container);
    }
  }

  function renderIframe(container, html, height) {
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = height + 'px';
    iframe.frameBorder = 0;
    container.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    // TODO:
    // // Wait for content to load before determining height
    // var resizeInterval = setInterval(
    //   function() {
    //     console.log('interval')
    //     if (iframe.contentDocument.readyState == 'complete') {
    //       console.log('complete');
    //       // remove any residual margin
    //       // iframe.contentDocument.body.style.margin = 0;
    //       // // add padding to see shadows pattern shadows
    //       // iframe.contentDocument.body.style.padding = '.5rem .25rem';
    //       // Add extra spacing to catch edge cases
    //       const frameHeight = iframe.contentDocument.body.scrollHeight;
    //       iframe.height = (frameHeight + 32) + "px";
    //       console.log('complete', frameHeight);
    //       clearInterval(resizeInterval);
    //     }
    //   },
    //   100
    // );
    // setTimeout(function() {clearInterval(resizeInterval);}, 2000);

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

  function setupCodeSnippetDropdowns(codeSnippetDropdownSelector) {
    var dropdowns = [].slice.call(document.querySelectorAll(codeSnippetDropdownSelector));

    dropdowns.forEach(function (dropdown) {
      attachDropdownEvents(dropdown);
    });
  }
})();
