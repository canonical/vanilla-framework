/**
  Toggles the necessary aria- attributes' values on the accordion panels
  and handles to show or hide them.
  @param {HTMLElement} element The tab that acts as the handles.
  @param {Boolean} show Whether to show or hide the accordion panel.
*/
function toggleExpanded(element, show) {
  var target = document.getElementById(element.getAttribute('aria-controls'));

  if (target) {
    element.setAttribute('aria-expanded', show);
    target.setAttribute('aria-hidden', !show);
  }
}

/**
  Attaches event listeners for the accordion open and close click events.
  @param {HTMLElement} accordionContainer The accordion container element.
*/
function setupAccordion(accordionContainer) {
  // Finds any open panels within the container and closes them.
  function closeAllPanels() {
    var openPanels = accordionContainer.querySelectorAll('[aria-expanded=true]');

    for (var i = 0, l = openPanels.length; i < l; i++) {
      toggleExpanded(openPanels[i], false);
    }
  }

  // Set up an event listener on the container so that panels can be added
  // and removed and events do not need to be managed separately.
  accordionContainer.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest) {
      target = target.closest('[class*="p-accordion__tab"]');
    }

    if (target) {
      var isTargetOpen = target.getAttribute('aria-expanded') === 'true';
      closeAllPanels();

      // Toggle visibility of the target panel.
      toggleExpanded(target, !isTargetOpen);
    }
  });
}

// Setup all accordions on the page.
var accordions = document.querySelectorAll('.p-accordion');

for (var i = 0, l = accordions.length; i < l; i++) {
  setupAccordion(accordions[i]);
}
