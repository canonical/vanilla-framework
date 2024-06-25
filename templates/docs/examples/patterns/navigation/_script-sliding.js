const initNavigationSliding = () => {
  const navigation = document.querySelector('.p-navigation--sliding, .p-navigation--reduced');
  const secondaryNavigation = document.querySelector('.p-navigation--reduced + .p-navigation');
  const toggles = document.querySelectorAll('.p-navigation__nav .p-navigation__link[aria-controls]:not(.js-back)');
  const searchButtons = document.querySelectorAll('.js-search-button');
  const menuButton = document.querySelector('.js-menu-button');
  const dropdowns = document.querySelectorAll('ul.p-navigation__dropdown');
  const lists = [...dropdowns];
  const mainList = dropdowns[0]?.parentNode?.parentNode;
  if (mainList) {
    lists.push(mainList);
  }

  const hasSearch = searchButtons.length > 0;

  const closeAll = () => {
    if (hasSearch) {
      closeSearch();
    }
    resetToggles();
    navigation.classList.remove('has-menu-open');
    if (secondaryNavigation) {
      secondaryNavigation.classList.remove('has-menu-open');
      let icon = secondaryNavigation.querySelector('.p-icon--chevron-up');
      if (icon) {
        icon.classList.remove('p-icon--chevron-up');
        icon.classList.add('p-icon--chevron-down');
      }
    }
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
    if (secondaryNavigation) {
      secondaryNavigation.classList.remove('has-search-open');
    }
    document.removeEventListener('keyup', keyPressHandler);
  };

  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    closeSearch();
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      navigation.classList.add('has-menu-open');
      e.target.innerHTML = 'Close menu';
      setFocusable(mainList);
    }
  });

  const secondaryNavToggle = document.querySelector('.js-secondary-menu-toggle-button');
  secondaryNavToggle.addEventListener('click', (event) => {
    event.preventDefault();
    closeSearch();
    if (secondaryNavigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      secondaryNavigation.classList.add('has-menu-open');
      let icon = secondaryNavToggle.querySelector('.p-icon--chevron-down');
      icon.classList.remove('p-icon--chevron-down');
      icon.classList.add('p-icon--chevron-up');
    }
  });

  const resetToggles = (exception) => {
    toggles.forEach(function (toggle) {
      const target = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!target || target === exception) {
        return;
      }
      target.setAttribute('aria-hidden', 'true');
      toggle.parentNode.classList.remove('is-active');
      toggle.parentNode.parentNode.classList.remove('is-active');
    });
  };

  // when clicking outside navigation, close all dropdowns
  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest) {
      if (!target.closest('.p-navigation--sliding, .p-navigation--reduced')) {
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
    if (target) {
      target.querySelectorAll('li').forEach(function (element) {
        if (element.parentNode === target) {
          element.children[0].setAttribute('tabindex', '0');
        }
      });
    }
  };

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(toggle.getAttribute('aria-controls'));
      if (target) {
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
      if (!searchInput) {
        searchInput = secondaryNavigation.querySelector('.p-search-box__input');
      }
      var buttons = document.querySelectorAll('.js-search-button');

      buttons.forEach((searchButton) => {
        searchButton.setAttribute('aria-pressed', true);
      });

      navigation.classList.add('has-search-open');
      if (secondaryNavigation) {
        secondaryNavigation.classList.add('has-search-open');
      }
      searchInput.focus();
      document.addEventListener('keyup', keyPressHandler);
    };
  }
};

initNavigationSliding();
