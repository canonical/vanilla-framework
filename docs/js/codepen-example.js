(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var examples = document.querySelectorAll('.js-example');
    examples.forEach(renderExample);
  });

  function renderExample(exampleElement) {
    var link = exampleElement.href;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (request.status === 200 && request.readyState === 4) {
        var html = request.responseText;
        renderCodeBlock(exampleElement, html);
        exampleElement.style.display = 'none';
      }
    };

    request.open('GET', link, true);
    request.send(null);
  }

  function renderCodeBlock(placementElement, html) {
    var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    var source = pattern.exec(html)[1].trim();
    var htmlSource = stripScripts(source);
    var jsSource = getExampleScript(source);
    var patternCode = document.createTextNode(htmlSource);
    var container = document.createElement('div');
    var pre = document.createElement('pre');
    var code = document.createElement('code');

    // Set attributes of code block

    container.classList.add('p-code-example');
    container.classList.add('codepen-example');

    var codepenMetadata = {
      head: '<style>body { margin: 1rem !important; }</style>',
      stylesheets: 'https://assets.ubuntu.com/v1/vanilla-framework-version-2.5.0.min.css',
      tags: ['Vanilla framework']
    };

    container.setAttribute('data-prefill', JSON.stringify(codepenMetadata));
    container.setAttribute('data-theme-id', '38411');
    //container.setAttribute("data-default-tab", "html,result");
    //container.setAttribute("data-height", "600");

    // data-height="400"
    // data-theme-id="1"
    // data-default-tab="html,result"

    pre.classList.add('p-code-example__pre');
    pre.setAttribute('data-lang', 'html');
    code.classList.add('html', 'p-code-example__code');

    // Build code block structure
    container.appendChild(pre);
    pre.appendChild(code);
    code.appendChild(patternCode);

    if (jsSource) {
      patternCode = document.createTextNode(jsSource);
      pre = document.createElement('pre');
      pre.setAttribute('data-lang', 'js');
      code = document.createElement('code');

      pre.classList.add('p-code-example__pre');
      code.classList.add('html', 'p-code-example__code');

      container.appendChild(pre);
      pre.appendChild(code);
      //pre.appendChild(copyBtn);
      code.appendChild(patternCode);
    }

    placementElement.parentNode.insertBefore(container, placementElement);

    // init codepen after examples code is rendered
    setTimeout(function() {
      window.__CPEmbed('.codepen-example');
    }, 1);
  }

  function stripScripts(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
  }

  function getExampleScript(source) {
    var div = document.createElement('div');
    div.innerHTML = source;
    var script = div.querySelector('script');
    return script ? script.innerHTML : null;
  }
})();
