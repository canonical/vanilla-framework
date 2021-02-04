/**
  Attaches change event listener to a given select.
  @param {HTMLElement} dropdown Select element belonging to a code snippet.
*/
function attachDropdownEvents(dropdown) {
  dropdown.addEventListener('change', function (e) {
    var targetElement = document.getElementById(e.target.value);

    if (targetElement) {
      toggleElement(targetElement, dropdown.options);
    }
  });
}

/**
  Shows a given code snippet panel, and hides the rest.
  @param {HTMLElement} targetElement the element to show.
  @param {HTMLOptionsCollection} options collection of options
  whose values reference elements to be hidden.
*/
function toggleElement(targetElement, options) {
  for (var i = 0; i < options.length; i++) {
    var element = document.getElementById(options[i].value);
    element.classList.add('u-hide');
    element.setAttribute('aria-hidden', true);
  }

  targetElement.classList.remove('u-hide');
  targetElement.setAttribute('aria-hidden', false);
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
