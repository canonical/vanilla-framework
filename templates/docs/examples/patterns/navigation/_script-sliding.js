const navigation = document.querySelector('.p-navigation--sliding');
const toggles = document.querySelectorAll('.p-navigation__link[aria-controls]:not(.js-back)');
const searchButtons = document.querySelectorAll('.js-search-button');
const menuButton = document.querySelector('.js-menu-button');

const hasSearch = searchButtons.length > 0;

const initNavigationSliding = () => {
  const closeAll = () => {
    if (hasSearch) {
      closeSearch();
    }
    resetToggles();
    navigation.classList.remove('has-menu-open');
    menuButton.innerHTML = 'Menu';
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Escape') {
      closeAll();
    }
  };

  const closeSearch = () => {
    searchButtons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

    navigation.classList.remove('has-search-open');
    document.removeEventListener('keyup', keyPressHandler);
  };

  const toggleFocusableListItems = () => {
    const hiddenListItems = document.querySelectorAll('.p-navigation__dropdown[aria-hidden="true"] li');
    const shownListItems = document.querySelectorAll('.p-navigation__dropdown[aria-hidden="false"] li');

    hiddenListItems.forEach(function (el) {
      el.children[0].setAttribute('tabindex', '-1');
    });

    shownListItems.forEach(function (el) {
      el.children[0].setAttribute('tabindex', '0');
    });
  };

  menuButton.addEventListener('click', function (e) {
    closeSearch();
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      navigation.classList.add('has-menu-open');
      e.target.innerHTML = 'Close menu';
    }
  });

  toggleFocusableListItems();

  const resetToggles = (exception) => {
    toggles.forEach(function (el) {
      const target = document.getElementById(el.getAttribute('aria-controls'));
      if (target === exception) {
        return;
      }
      target.setAttribute('aria-hidden', 'true');
      el.parentNode.classList.remove('is-active');
      el.parentNode.parentNode.classList.remove('is-active');
      toggleFocusableListItems();
    });
  };

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest) {
      if (!target.closest('.p-navigation--sliding')) {
        resetToggles();
      }
    }
  });

  toggles.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(el.getAttribute('aria-controls'));
      const isNested = target.parentNode.parentNode.classList.contains('p-navigation__dropdown');

      if (!isNested) {
        resetToggles(target);
      }
      if (target.getAttribute('aria-hidden') === 'true') {
        target.setAttribute('aria-hidden', 'false');
        el.parentNode.classList.add('is-active');
        el.parentNode.parentNode.classList.add('is-active');
      } else {
        target.setAttribute('aria-hidden', 'true');
        el.parentNode.classList.remove('is-active');
        el.parentNode.parentNode.classList.remove('is-active');
      }
      toggleFocusableListItems();
    });
  });

  document.querySelectorAll('.js-back').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = el.parentNode.parentNode;
      target.setAttribute('aria-hidden', 'true');
      el.closest('.is-active').classList.remove('is-active');
      el.closest('.is-active').classList.remove('is-active');
      toggleFocusableListItems();
    });
  });

  if (hasSearch) {
    const toggleSearch = (e) => {
      e.preventDefault();

      if (navigation.classList.contains('has-search-open')) {
        closeAll();
      } else {
        closeAll();
        openSearch(e);
      }
    };

    searchButtons.forEach((searchButton) => {
      searchButton.addEventListener('click', toggleSearch);
    });

    const overlay = document.querySelector('.p-navigation__search-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeAll);
    }

    const openSearch = (e) => {
      e.preventDefault();

      var searchInput = navigation.querySelector('.p-search-box__input');
      var buttons = document.querySelectorAll('.js-search-button');

      buttons.forEach((searchButton) => {
        searchButton.setAttribute('aria-pressed', true);
      });

      navigation.classList.add('has-search-open');
      searchInput.focus();
      document.addEventListener('keyup', keyPressHandler);
    };
  }
};

initNavigationSliding();
