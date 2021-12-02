/**
  Toggles visibility of filter panel.
  @param {HTMLElement} panel Filter panel to show or hide.
*/
function togglePanel(container, panel, collapse) {
  if (typeof collapse === 'undefined') {
    collapse = panel.getAttribute('aria-hidden') !== 'false';
  }
  if (panel && container) {
    if (collapse) {
      panel.setAttribute('aria-hidden', 'true');
      container.setAttribute('aria-expanded', 'false');
    } else {
      panel.setAttribute('aria-hidden', 'false');
      container.setAttribute('aria-expanded', 'true');
    }
  }
}

// Add click handler for clicks on elements with aria-controls
[].slice.call(document.querySelectorAll('.p-search-and-filter')).forEach(function (pattern) {
  var input = pattern.querySelector('.p-search-and-filter__input');
  var container = pattern.querySelector('.p-search-and-filter__search-container');
  input.addEventListener('blur', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    togglePanel(container, targetPanel, true);
  });
  input.addEventListener('focus', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    togglePanel(container, targetPanel, false);
  });
});
