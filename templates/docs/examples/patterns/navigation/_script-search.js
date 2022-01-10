function initNavigationSearch(element) {
  const searchButton = element.querySelector('.js-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', openSearch);
  }

  const overlay = element.querySelector('.p-navigation__search-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSearch);
  }

  function openSearch(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var searchInput = navigation.querySelector('.p-search-box__input');
    navigation.classList.add('has-search-open');
    searchInput.focus();
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeSearch() {
    var navigation = document.querySelector('.p-navigation.has-search-open');
    var banner = document.querySelector('.p-navigation__banner');
    navigation.classList.remove('has-search-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function keyPressHandler(e) {
    if (e.key === 'Escape') {
      closeSearch();
    }
  }
}

var navigation = document.querySelector('#navigation');
initNavigationSearch(navigation);
