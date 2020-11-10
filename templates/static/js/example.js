/* global VANILLA_VERSION */
(function () {
  if (!window.VANILLA_VERSION) {
    throw Error('VANILLA_VERSION not specified.');
  }

  var CODEPEN_PREFILL_CONFIG = {
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
    if (lang) {
      pre.setAttribute('data-lang', lang);
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

    // Set attributes of code block to be parsed by CodePen embed script

    // hide code container by default, so it doesn't flash on page
    // before CodePen is rendered
    container.classList.add('codepen-example', 'u-hide');

    var config = JSON.parse(JSON.stringify(CODEPEN_PREFILL_CONFIG));
    // update title in the config with title of the example page
    if (title) {
      config.title = title;
    }

    container.setAttribute('data-prefill', encodeURI(JSON.stringify(config)));
    container.setAttribute('data-height', height);
    // For more options see CodePen docs
    // https://blog.codepen.io/documentation/prefill-embeds/
    //
    // For example:
    //container.setAttribute('data-theme-id', 'light');
    //container.setAttribute("data-default-tab", "html,result");

    // Build code block structure
    container.appendChild(createPreCode(htmlSource, 'html'));

    if (jsSource) {
      container.appendChild(createPreCode(jsSource, 'js'));
    }

    if (cssSource) {
      container.appendChild(createPreCode(cssSource, 'css'));
    }

    placementElement.parentNode.insertBefore(container, placementElement);

    if (window.__CPEmbed) {
      // init codepen after examples code is rendered
      window.__CPEmbed('.codepen-example');
    } else {
      // or show the code blocks as a fallback
      container.classList.remove('u-hide');
    }
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
})();
