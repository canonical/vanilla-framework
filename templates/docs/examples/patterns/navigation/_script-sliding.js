const initNavigationSliding = () => {
  const navigation = document.querySelector('.p-navigation--sliding');
  const toggles = document.querySelectorAll('.p-navigation__link[aria-controls]:not(.js-back)');
  const searchButtons = document.querySelectorAll('.js-search-button');
  const menuButton = document.querySelector('.js-menu-button');
  const dropdowns = document.querySelectorAll('ul.p-navigation__dropdown');
  const mainList = dropdowns[0].parentNode.parentNode;
  const lists = [...dropdowns, mainList];

  const hasSearch = searchButtons.length > 0;

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

  menuButton.addEventListener('click', function (e) {
    closeSearch();
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      navigation.classList.add('has-menu-open');
      e.target.innerHTML = 'Close menu';
      setFocusable(mainList);
    }
  });

  const resetToggles = (exception) => {
    toggles.forEach(function (toggle) {
      const target = document.getElementById(toggle.getAttribute('aria-controls'));
      if (target === exception) {
        return;
      }
      target.setAttribute('aria-hidden', 'true');
      toggle.parentNode.classList.remove('is-active');
      toggle.parentNode.parentNode.classList.remove('is-active');
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

  const setFocusable = (target) => {
    lists.forEach(function (list) {
      const elements = list.querySelectorAll('ul > li > a, ul > li > button');
      elements.forEach(function (element) {
        element.setAttribute('tabindex', '-1');
      });
    });
    target.querySelectorAll('li').forEach(function (element) {
      if (element.parentNode === target) {
        element.children[0].setAttribute('tabindex', '0');
      }
    });
  };

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(toggle.getAttribute('aria-controls'));
      const isNested = target.parentNode.parentNode.classList.contains('p-navigation__dropdown');

      if (!isNested) {
        resetToggles(target);
      }
      if (target.getAttribute('aria-hidden') === 'true') {
        toggle.parentNode.classList.add('is-active');
        toggle.parentNode.parentNode.classList.add('is-active');
        target.setAttribute('aria-hidden', 'false');
        setFocusable(target);
      } else {
        target.setAttribute('aria-hidden', 'true');
        toggle.parentNode.classList.remove('is-active');
        toggle.parentNode.parentNode.classList.remove('is-active');
      }
    });
  });

  const goBackOneLevel = (e, backButton) => {
    e.preventDefault();
    const target = backButton.parentNode.parentNode;
    target.setAttribute('aria-hidden', 'true');
    backButton.closest('.is-active').classList.remove('is-active');
    backButton.closest('.is-active').classList.remove('is-active');
    setFocusable(target.parentNode.parentNode);
  };

  dropdowns.forEach(function (dropdown) {
    console.log(window.getComputedStyle(dropdown.children[0], null).display);
    dropdown.children[1].addEventListener('keydown', function (e) {
      if (e.shiftKey && e.key === 'Tab' && window.getComputedStyle(dropdown.children[0], null).display === 'none') {
        goBackOneLevel(e, dropdown.children[1].children[0]);
        dropdown.parentNode.children[0].focus({preventScroll: true});
      }
    });
  });

  document.querySelectorAll('.js-back').forEach(function (backButton) {
    backButton.addEventListener('click', function (e) {
      goBackOneLevel(e, backButton);
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
