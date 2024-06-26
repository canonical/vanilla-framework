/**
  Create a simple text chip element
  @param {string} value The value of the search input.
  @return {HTMLElement} A chip element containing the value
*/
function createChip(value) {
  var chip = document.createElement('button');
  chip.classList.add('p-chip');
  chip.setAttribute('aria-pressed', 'false');
  chip.innerHTML = `<span class="p-chip__value">'${value}'</span>`;
  return chip;
}

// Add click handler for clicks on elements with aria-controls
[].slice
  .call(document.querySelectorAll('.p-search-and-filter'))
  .filter(function (searchAndFilterComponent) {
    return searchAndFilterComponent.querySelector('.p-search-and-filter__search-prompt');
  })
  .forEach(function (searchAndFilterComponent) {
    var input = searchAndFilterComponent.querySelector('.p-search-and-filter__input');
    var query = searchAndFilterComponent.querySelector('.p-search-and-filter__search-query');
    var prompt = searchAndFilterComponent.querySelector('.p-search-and-filter__search-prompt');
    var container = searchAndFilterComponent.querySelector('.p-search-and-filter__search-container');
    var searchBox = searchAndFilterComponent.querySelector('.p-search-and-filter__box');
    var clear = searchAndFilterComponent.querySelector('.p-search-and-filter__clear');

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
      var targetPanel = searchAndFilterComponent.querySelector('.p-search-and-filter__panel');
      targetPanel.setAttribute('aria-hidden', 'true');
      container.setAttribute('aria-expanded', 'false');
    });

    input.addEventListener('focus', function (event) {
      var targetPanel = searchAndFilterComponent.querySelector('.p-search-and-filter__panel');
      targetPanel.setAttribute('aria-hidden', 'false');
      container.setAttribute('aria-expanded', 'true');
    });
  });
