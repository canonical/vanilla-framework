/**
  Create a simple text chip element
  @param {string} value The value of the search input.
  @return {HTMLElement} A chip element containing the value
*/
function createChip(value) {
  var chip = document.createElement('div');
  chip.classList.add('p-chip');
  chip.setAttribute('aria-pressed', 'false');
  chip.setAttribute('role', 'button');
  chip.innerHTML = `<span class="p-chip__value">'${value}'</span>`;
  return chip;
}

// Add click handler for clicks on elements with aria-controls
[].slice.call(document.querySelectorAll('.p-search-and-filter')).forEach(function (pattern) {
  var input = pattern.querySelector('.p-search-and-filter__input');
  var query = pattern.querySelector('.p-search-and-filter__search-query');
  var prompt = pattern.querySelector('.p-search-and-filter__search-prompt');
  var container = pattern.querySelector('.p-search-and-filter__search-container');
  var searchBox = pattern.querySelector('.p-search-and-filter__box');
  var clear = pattern.querySelector('.p-search-and-filter__clear');

  clear.addEventListener('click', function (event) {
    input.value = '';
    clear.style.display = 'none';
  });

  input.addEventListener('keyup', function (event) {
    query.innerHTML = input.value;
    if (input.value === '') {
      clear.style.display = 'none';
    } else {
      clear.style.display = 'block';
    }
  });

  prompt.addEventListener('click', function (event) {
    if (input.value !== '') {
      container.insertBefore(createChip(input.value), searchBox);
      input.value = '';
      clear.style.display = 'none';
      query.innerHTML = '';
    }
  });

  input.addEventListener('blur', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    targetPanel.setAttribute('aria-hidden', 'true');
    container.setAttribute('aria-expanded', 'false');
  });

  input.addEventListener('focus', function (event) {
    var targetPanel = pattern.querySelector('.p-search-and-filter__panel');
    targetPanel.setAttribute('aria-hidden', 'false');
    container.setAttribute('aria-expanded', 'true');
  });
});
