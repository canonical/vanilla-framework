// Setup toggling of side navigation drawer
(function () {
  // throttling function calls, by Remy Sharp
  // http://remysharp.com/2010/07/21/throttling-function-calls/
  var throttle = function (fn, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  /**
    Toggles the expanded/collapsed classed on side navigation element.

    @param {HTMLElement} sideNavigation The side navigation element.
    @param {Boolean} show Whether to show or hide the drawer.
  */
  function toggleDrawer(sideNavigation, show) {
    if (sideNavigation) {
      if (show) {
        sideNavigation.classList.remove('is-collapsed');
        sideNavigation.classList.add('is-expanded');
        toggleTabindex(sideNav, false);
      } else {
        sideNavigation.classList.remove('is-expanded');
        sideNavigation.classList.add('is-collapsed');
        toggleTabindex(sideNav, true);
      }
    }
  }

  /**
    Ensures links are only focusable when side nav is in view
    @param {HTMLElement} sideNavigation The side navigation element.
    @param {Boolean} sideNavCollapsed Whether the side nav is expanded or collapsed.
  */
  function toggleTabindex(sideNavigation, sideNavCollapsed) {
    const links = sideNavigation.querySelectorAll('.p-side-navigation__link');
    links.forEach((link) => (sideNavCollapsed ? (link.tabIndex = -1) : (link.tabIndex = 0)));
  }

  /**
    Attaches event listeners for the side navigation toggles
    @param {HTMLElement} sideNavigation The side navigation element.
  */
  function setupSideNavigation(sideNavigation) {
    var toggles = [].slice.call(sideNavigation.querySelectorAll('.js-drawer-toggle'));

    toggles.forEach(function (toggle) {
      var sideNav = document.getElementById(toggle.getAttribute('aria-controls'));
      var drawerEl = document.querySelector('.p-side-navigation__drawer');
      var drawerPosition = window.getComputedStyle(drawerEl).position;
      if (drawerPosition == 'fixed') {
        toggleTabindex(sideNav, true);
      }

      toggle.addEventListener('click', function (event) {
        event.preventDefault();

        if (sideNav) {
          toggleDrawer(sideNav, !sideNav.classList.contains('is-expanded'));
        }
      });
    });

    // close side navigation drawer when any link (anchor) inside it is clicked
    sideNavigation.addEventListener('click', function (event) {
      var target = event.target;
      if (
        sideNavigation.classList.contains('is-expanded') &&
        (target.classList.contains('p-side-navigation__link') || (target.closest && target.closest('.p-side-navigation__link')))
      ) {
        toggleDrawer(sideNavigation, false);
      }
    });

    // improvements for side nav when resizing the window
    var sideNav = document.querySelector('.p-side-navigation');
    var drawerEl = document.querySelector('.p-side-navigation__drawer');

    window.addEventListener(
      'resize',
      throttle(function () {
        var drawerPosition = window.getComputedStyle(drawerEl).position;

        // when screen size changes from mobile (fixed drawer) to large screen
        // reset any styles added by opening the drawer
        if (drawerPosition !== 'fixed') {
          sideNav.classList.remove('is-expanded');
          sideNav.classList.remove('is-collapsed');
          toggleTabindex(sideNav, false);
        } else {
          toggleTabindex(sideNav, true);
        }
      }, 200)
    );
  }
  const sideNav = document.querySelector('.p-side-navigation');
  if (sideNav) {
    setupSideNavigation(document.querySelector('.p-side-navigation'));
  }
})();

// Add table of contents to side navigation on documentation pages
(function () {
  // Generate id from H2s content when it does not exist
  document.querySelectorAll('main h2:not([id])').forEach(function (heading) {
    var id = heading.textContent
      .toLowerCase()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '');
    heading.setAttribute('id', id);
  });

  // get all headings from page and add it to current highligted item in side navigation
  var list = document.createElement('ul');
  list.classList.add('p-side-navigation__list');

  var item = document.createElement('li');
  item.classList.add('p-side-navigation__item');

  var anchor = document.createElement('a');
  anchor.classList.add('p-side-navigation__link');

  // Add all H2s with IDs to the table of contents list
  [].slice.call(document.querySelectorAll('main h2[id]')).forEach(function (heading) {
    var thisItem = item.cloneNode();
    var thisAnchor = anchor.cloneNode();
    thisAnchor.setAttribute('href', '#' + heading.id);
    thisAnchor.textContent = heading.textContent;
    thisItem.appendChild(thisAnchor);
    list.appendChild(thisItem);
  });

  // Add table of contents as nested list to side navigation
  if (list.querySelectorAll('li').length > 0) {
    var currentPage = document.querySelector('.p-side-navigation__link[aria-current="page"]');
    if (currentPage) {
      var parent = currentPage.parentNode;
      parent.appendChild(list);
    }
  }
})();

// scroll active side navigation item into view (without scrolling whole page)
(function () {
  var sideNav = document.querySelector('.p-side-navigation');
  var currentItem = document.querySelector('.p-side-navigation__link[aria-current="page"]');

  if (sideNav && currentItem) {
    // calculate scroll by comparing top of side nav and top of active item
    var currentItemOffset = currentItem.getBoundingClientRect().top;
    var offset = currentItemOffset - sideNav.getBoundingClientRect().top;

    // only scroll if active link is off screen or close to bottom of the window
    if (currentItemOffset > window.innerHeight * 0.7) {
      setTimeout(function () {
        sideNav.scrollTop = offset;
      }, 0);
    }
  }
})();

// Docs search functions
(function () {
  var searchDocsReset = document.getElementById('search-docs-reset');
  var searchBox = document.getElementById('search-docs');

  if (searchDocsReset) {
    searchDocsReset.addEventListener('click', function (e) {
      searchBox.value = '';
      searchBox.focus();
      e.preventDefault();
    });
  }
})();

(function () {
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
})();
