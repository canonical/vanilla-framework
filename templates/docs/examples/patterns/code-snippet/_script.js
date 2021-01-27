function attachDropdownEvents(dropdown) {
  dropdown.addEventListener('change', function (e) {
    var targetElement = document.getElementById(e.target.value);

    togglePanel(targetElement, dropdown.options);
  });
}

function togglePanel(targetPanel, options) {
  for (var i = 0; i < options.length; i++) {
    var panel = document.getElementById(options[i].value);
    panel.classList.add('u-hide');
    panel.setAttribute('aria-hidden', true);
  }

  targetPanel.classList.remove('u-hide');
  targetPanel.setAttribute('aria-hidden', false);
}

function setupCodeSnippetDropdowns(codeSnippetDropdownSelector) {
  var dropdowns = [].slice.call(document.querySelectorAll(codeSnippetDropdownSelector));

  dropdowns.forEach(function (dropdown) {
    attachDropdownEvents(dropdown);
  });
}

setupCodeSnippetDropdowns('.p-code-snippet__dropdown');
