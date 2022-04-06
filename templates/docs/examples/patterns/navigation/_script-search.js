function initNavigationSearch(element) {
  const searchButtons = element.querySelectorAll('.js-search-button');

  searchButtons.forEach((searchButton) => {
    searchButton.addEventListener('click', toggleSearch);
  });

  const menuButton = element.querySelector('.js-menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  const overlay = element.querySelector('.p-navigation__search-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeAll);
  }

  function toggleMenu(e) {
    e.preventDefault();

    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      closeAll();
      openMenu(e);
    }
  }

  function toggleSearch(e) {
    e.preventDefault();

    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-search-open')) {
      closeAll();
    } else {
      closeAll();
      openSearch(e);
    }
  }

  function openSearch(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var searchInput = navigation.querySelector('.p-search-box__input');
    var buttons = document.querySelectorAll('.js-search-button');

    buttons.forEach((searchButton) => {
      searchButton.setAttribute('aria-pressed', true);
    });

    navigation.classList.add('has-search-open');
    searchInput.focus();
    document.addEventListener('keyup', keyPressHandler);
  }

  function openMenu(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var buttons = document.querySelectorAll('.js-menu-button');

    buttons.forEach((searchButton) => {
      searchButton.setAttribute('aria-pressed', true);
    });

    navigation.classList.add('has-menu-open');
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeSearch() {
    var navigation = document.querySelector('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var banner = document.querySelector('.p-navigation__banner');
    var buttons = document.querySelectorAll('.js-search-button');

    buttons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

    navigation.classList.remove('has-search-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function closeMenu() {
    var navigation = document.querySelector('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var banner = document.querySelector('.p-navigation__banner');
    var buttons = document.querySelectorAll('.js-menu-button');

    buttons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

    navigation.classList.remove('has-menu-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function closeAll() {
    closeSearch();
    closeMenu();
  }

  function keyPressHandler(e) {
    if (e.key === 'Escape') {
      closeAll();
    }
  }
}

var navigation = document.querySelector('#navigation');
initNavigationSearch(navigation);
