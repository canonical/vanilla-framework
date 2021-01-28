/**
  Attaches change event listener to a given select.
  @param {HTMLElement} dropdown Select element belonging to a code snippet.
*/
function attachDropdownEvents(dropdown) {
  dropdown.addEventListener('change', function (e) {
    var targetElement = document.getElementById(e.target.value);

    togglePanel(targetElement, dropdown.options);
  });
}

/**
  Shows a given code snippet panel, and hides the rest.
  @param {HTMLElement} targetPanel the panel to show.
  @param {HTMLOptionsCollection} options collection of options
  whose values reference panels to be hidden.
*/
function togglePanel(targetPanel, options) {
  for (var i = 0; i < options.length; i++) {
    var panel = document.getElementById(options[i].value);
    panel.classList.add('u-hide');
    panel.setAttribute('aria-hidden', true);
  }

  targetPanel.classList.remove('u-hide');
  targetPanel.setAttribute('aria-hidden', false);
}

/**
  Attaches events to selects with a given classname.
  @param {String} codeSnippetDropdownSelector class name of the select elements
  we want to attach events to.
*/
function setupCodeSnippetDropdowns(codeSnippetDropdownSelector) {
  var dropdowns = [].slice.call(document.querySelectorAll(codeSnippetDropdownSelector));

  dropdowns.forEach(function (dropdown) {
    attachDropdownEvents(dropdown);
  });
}

setupCodeSnippetDropdowns('.p-code-snippet__dropdown');
