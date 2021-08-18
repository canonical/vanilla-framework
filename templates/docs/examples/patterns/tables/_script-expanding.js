/**
  Toggles the necessary aria- attributes' values on the table panels
  to show or hide them.
  @param {HTMLElement} element The tab that acts as the handles.
  @param {Boolean} show Whether to show or hide the expanded row panel.
*/
function toggleExpanded(element, show) {
  var target = document.getElementById(element.getAttribute('aria-controls'));

  if (target) {
    element.setAttribute('aria-expanded', show);

    // Adjust the text of the toggle button
    if (show) {
      element.innerHTML = element.getAttribute('data-shown-text');
    } else {
      element.innerHTML = element.getAttribute('data-hidden-text');
    }

    target.setAttribute('aria-hidden', !show);
  }
}

/**
    Attaches event listeners for the expandable table open and close click events.
    @param {HTMLElement} table The expandable table container element.
  */
function setupExpandableTable(table) {
  // Set up an event listener on the container so that panels can be added
  // and removed and events do not need to be managed separately.
  table.addEventListener('click', function (event) {
    var target = event.target;
    var isTargetOpen = target.getAttribute('aria-expanded') === 'true';

    if (target.classList.contains('u-toggle')) {
      // Toggle visibility of the target panel.
      toggleExpanded(target, !isTargetOpen);
    }
  });
}

// Setup all expandable tables on the page.
var tables = document.querySelectorAll('.p-table--expanding');

for (var i = 0, l = tables.length; i < l; i++) {
  setupExpandableTable(tables[i]);
}
