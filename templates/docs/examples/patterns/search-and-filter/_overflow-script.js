// Add click handler for clicks on elements with aria-controls
[].slice.call(document.querySelectorAll('.p-search-and-filter')).forEach(function (pattern) {
  var overflowCount = pattern.querySelector('.p-search-and-filter__selected-count');
  var container = pattern.querySelector('.p-search-and-filter__search-container');
  var searchBox = pattern.querySelector('.p-search-and-filter__box');
  var panel = pattern.querySelector('.p-search-and-filter__panel');
  overflowCount.addEventListener('click', function (event) {
    searchBox.dataset.overflowing = 'true';
    panel.setAttribute('aria-hidden', 'false');
    container.setAttribute('aria-expanded', 'true');
  });
});
