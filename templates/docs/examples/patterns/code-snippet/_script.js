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
  }

  targetPanel.classList.remove('u-hide');
}

function setupCodeSnippetDropdowns(codeSnippetDropdownSelector) {
  var dropdowns = [].slice.call(document.querySelectorAll(codeSnippetDropdownSelector));

  dropdowns.forEach(function (dropdown) {
    attachDropdownEvents(dropdown);
  });
}

setupCodeSnippetDropdowns('.p-code-snippet__dropdown');
