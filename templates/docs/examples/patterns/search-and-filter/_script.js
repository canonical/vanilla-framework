/**
  Toggles visibility of filter panel.
  @param {HTMLElement} panel Filter panel to show or hide.
*/
function togglePanel(panel) {
  if (panel) {
    if (panel.getAttribute('aria-hidden') === 'false') {
      panel.setAttribute('aria-hidden', 'true');
    } else {
      panel.setAttribute('aria-hidden', 'false');
    }
  }
}

// Add click handler for clicks on elements with aria-controls
const patterns = document.querySelectorAll('.p-search-and-filter');
patterns.forEach(function (pattern) {
  const input = pattern.querySelector('.p-search-box__input');
  input.addEventListener('blur', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    togglePanel(targetPanel);
  });
  input.addEventListener('focus', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    togglePanel(targetPanel);
  });
});
