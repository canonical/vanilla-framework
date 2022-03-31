function initNavigationSearch(element) {
  const searchButtons = element.querySelectorAll('.js-search-button');

  searchButtons.forEach((searchButton) => {
    searchButton.addEventListener('click', toggleSearch);
  });

  const overlay = element.querySelector('.p-navigation__search-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSearch);
  }

  function toggleSearch(e) {
    e.preventDefault();
    const button = e.target.closest('.js-search-button');

    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-search-open')) {
      closeSearch(e);
    } else {
      openSearch(e);
    }
  }

  function openSearch(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var searchInput = navigation.querySelector('.p-search-box__input');
    var buttons = document.querySelectorAll('.js-search-button');

    searchButtons.forEach((searchButton) => {
      searchButton.setAttribute('aria-pressed', true);
    });

    navigation.classList.add('has-search-open'); // for legacy expanding search
    searchInput.focus();
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeSearch() {
    var navigation = document.querySelector('.p-navigation.has-search-open');
    var nav = navigation.querySelector('.p-navigation__nav');

    var banner = document.querySelector('.p-navigation__banner');
    var buttons = document.querySelectorAll('.js-search-button');

    searchButtons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

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
