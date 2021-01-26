function setupCodeSnippetOptions(dropdown) {
  var dropdownLabel = dropdown.querySelector('span');
  var targetMenu = document.getElementById(dropdown.getAttribute('aria-controls'));
  var options = [].slice.call(targetMenu.querySelectorAll('[aria-controls]'));

  options.forEach(function (option) {
    option.addEventListener('click', function (e) {
      e.preventDefault();
      var targetPanel = document.getElementById(option.getAttribute('aria-controls'));

      dropdownLabel.innerHTML = option.innerHTML;
      togglePanel(targetPanel, options);
    });
  });
}

function togglePanel(targetPanel, options) {
  options.forEach(function (option) {
    var panel = document.getElementById(option.getAttribute('aria-controls'));
    panel.classList.add('u-hide');
  });

  targetPanel.classList.remove('u-hide');
}

function setupCodeSnippetDropdowns(codeSnippetDropdownSelector) {
  var dropdowns = [].slice.call(document.querySelectorAll(codeSnippetDropdownSelector));

  dropdowns.forEach(function (dropdown) {
    setupCodeSnippetOptions(dropdown);
  });
}

setupCodeSnippetDropdowns('.p-code-snippet__toggle');
