/**
  Attaches change event listener to a given select.
  @param {HTMLElement} dropdown Select element belonging to a code snippet.
*/
function attachDropdownEvents(dropdown) {
  dropdown.addEventListener('change', function (e) {
    var targetElement = document.getElementById(e.target.value);

    if (targetElement) {
      // Check if target is another dropdown (cascading dropdowns)
      if (targetElement.tagName === 'SELECT') {
        // Find the container with all dropdowns
        var container = dropdown.closest('.p-code-snippet__dropdowns');

        // Hide all panels from all code snippet dropdowns in this group
        var allChannelDropdowns = container.querySelectorAll('.p-code-snippet__dropdown');
        allChannelDropdowns.forEach(function (channelDropdown) {
          for (var i = 0; i < channelDropdown.options.length; i++) {
            var panel = document.getElementById(channelDropdown.options[i].value);
            if (panel && panel.tagName !== 'SELECT') {
              panel.classList.add('u-hide');
              panel.setAttribute('aria-hidden', true);
            }
          }
        });

        // Toggle between channel dropdowns
        toggleElement(targetElement, dropdown.options);

        // Show the panel for the newly visible dropdown's selected option
        var panelId = targetElement.value;
        var panelElement = document.getElementById(panelId);
        if (panelElement && panelElement.tagName !== 'SELECT') {
          panelElement.classList.remove('u-hide');
          panelElement.setAttribute('aria-hidden', false);
        }
      } else {
        // Target is a code panel
        toggleElement(targetElement, dropdown.options);
      }
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
    if (element) {
      element.classList.add('u-hide');
      element.setAttribute('aria-hidden', true);
    }
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
