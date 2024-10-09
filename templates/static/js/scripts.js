// Setup toggling of side navigation drawer
(function () {
  // throttling function calls, by Remy Sharp
  // http://remysharp.com/2010/07/21/throttling-function-calls/
  const throttle = function (fn, delay) {
    let timer = null;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  var expandedSidenavContainer = null;
  var lastFocus = null;
  var ignoreFocusChanges = false;
  var focusAfterClose = null;

  // Traps the focus within the currently expanded sidenav drawer
  function trapFocus(event) {
    if (ignoreFocusChanges || !expandedSidenavContainer) return;
    // skip the focus trap if the sidenav is not in the expanded status (large screens)
    if (!expandedSidenavContainer.classList.contains('is-drawer-expanded')) return;
    var sidenavDrawer = expandedSidenavContainer.querySelector('.p-side-navigation__drawer');

    if (sidenavDrawer.contains(event.target)) {
      lastFocus = event.target;
    } else {
      focusFirstDescendant(sidenavDrawer);
      if (lastFocus == document.activeElement) {
        focusLastDescendant(sidenavDrawer);
      }
      lastFocus = document.activeElement;
    }
  }

  // Attempts to focus given element
  function attemptFocus(child) {
    if (child.focus) {
      ignoreFocusChanges = true;
      child.focus();
      ignoreFocusChanges = false;
      return document.activeElement === child;
    }

    return false;
  }

  // Focuses first child element
  function focusFirstDescendant(element) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }
    return false;
  }

  // Focuses last child element
  function focusLastDescendant(element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
      var child = element.childNodes[i];
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }
    return false;
  }

  /**
    Toggles the expanded/collapsed classes on side navigation element.

    @param {HTMLElement} sideNavigation The side navigation element.
    @param {Boolean} show Whether to show or hide the drawer.
  */
  function toggleDrawer(sideNavigation, show) {
    expandedSidenavContainer = show ? sideNavigation : null;
    const toggleButtonOutsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle, .js-drawer-toggle');
    const toggleButtonInsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle--in-drawer');

    if (sideNavigation) {
      if (show) {
        sideNavigation.classList.remove('is-drawer-collapsed');
        sideNavigation.classList.add('is-drawer-expanded');

        toggleButtonInsideDrawer.focus();
        toggleButtonOutsideDrawer.setAttribute('aria-expanded', true);
        toggleButtonInsideDrawer.setAttribute('aria-expanded', true);
        focusFirstDescendant(sideNavigation);
        focusAfterClose = toggleButtonOutsideDrawer;
        document.addEventListener('focus', trapFocus, true);
      } else {
        sideNavigation.classList.remove('is-drawer-expanded');
        sideNavigation.classList.add('is-drawer-collapsed');

        toggleButtonOutsideDrawer.focus();
        toggleButtonOutsideDrawer.setAttribute('aria-expanded', false);
        toggleButtonInsideDrawer.setAttribute('aria-expanded', false);
        if (focusAfterClose && focusAfterClose.focus) {
          focusAfterClose.focus();
        }
        document.removeEventListener('focus', trapFocus, true);
      }
    }
  }

  /**
    Attaches event listeners for the side navigation toggles
    @param {HTMLElement} sideNavigation The side navigation element.
  */
  function setupSideNavigation(sideNavigation) {
    var toggles = [].slice.call(sideNavigation.querySelectorAll('.js-drawer-toggle'));
    var drawerEl = sideNavigation.querySelector('.p-side-navigation__drawer');

    // hide navigation drawer on small screens
    sideNavigation.classList.add('is-drawer-hidden');

    // setup drawer element
    drawerEl.addEventListener('animationend', () => {
      if (!sideNavigation.classList.contains('is-drawer-expanded')) {
        sideNavigation.classList.add('is-drawer-hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(sideNavigation, false);
      }
    });

    // setup toggle buttons
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();

        if (sideNavigation) {
          sideNavigation.classList.remove('is-drawer-hidden');
          toggleDrawer(sideNavigation, !sideNavigation.classList.contains('is-drawer-expanded'));
        }
      });
    });

    // hide side navigation drawer when screen is resized
    window.addEventListener(
      'resize',
      throttle(function () {
        toggles.forEach((toggle) => {
          return toggle.setAttribute('aria-expanded', false);
        });
        // remove expanded/collapsed class names to avoid unexpected animations
        sideNavigation.classList.remove('is-drawer-expanded');
        sideNavigation.classList.remove('is-drawer-collapsed');
        sideNavigation.classList.add('is-drawer-hidden');
      }, 10),
    );
  }

  /**
    Attaches event listeners for all the side navigations in the document.
    @param {String} sideNavigationSelector The CSS selector matching side navigation elements.
  */
  function setupSideNavigations(sideNavigationSelector) {
    // Setup all side navigations on the page.
    var sideNavigations = [].slice.call(document.querySelectorAll(sideNavigationSelector));

    sideNavigations.forEach(setupSideNavigation);
  }

  setupSideNavigations('.p-side-navigation, [class*="p-side-navigation--"]');

  // Add table of contents to side navigation on documentation pages
  const sideNav = document.querySelector('.p-side-navigation, [class*="p-side-navigation--"]');

  // Generate id from H2s content when it does not exist
  document.querySelectorAll('main h2:not([id])').forEach(function (heading) {
    // Only get direct text from h2 node, excluding any child nodes
    var id = heading.childNodes[0].textContent
      .trim()
      .toLowerCase()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '');
    heading.setAttribute('id', id);
  });

  // get all headings from page and add it to table of contents
  var list = document.createElement('ul');
  list.classList.add('p-table-of-contents__list');

  var item = document.createElement('li');
  item.classList.add('p-table-of-contents__item');

  var anchor = document.createElement('a');
  anchor.classList.add('p-table-of-contents__link');

  // Add all H2s with IDs to the table of contents list
  [].slice.call(document.querySelectorAll('main h2[id]')).forEach(function (heading) {
    var thisItem = item.cloneNode();
    var thisAnchor = anchor.cloneNode();
    thisAnchor.setAttribute('href', '#' + heading.id);
    // Only get direct text from h2 node, excluding any child nodes
    thisAnchor.textContent = heading.childNodes[0].textContent.trim();
    thisItem.appendChild(thisAnchor);
    list.appendChild(thisItem);
  });

  // Add table of contents as nested list to side navigation
  if (list.querySelectorAll('li').length > 0) {
    var toc = document.querySelector('#toc');
    if (toc) {
      toc.appendChild(list);
      toc.closest('.u-hide').classList.remove('u-hide');
    }
  }

  // accordion side navigation
  var currentPage = document.querySelector('.p-side-navigation__link[aria-current="page"]');
  if (currentPage) {
    var parentList = currentPage.parentNode.parentNode;
    parentList.setAttribute('aria-expanded', true);
    parentList.previousElementSibling.setAttribute('aria-expanded', true);
  }

  function setupSideNavigationExpandToggle(toggle) {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
      toggle.setAttribute('aria-expanded', isExpanded);
    }
    const item = toggle.closest('.p-side-navigation__item');
    const link = item.querySelector('.p-side-navigation__link');
    const nestedList = item.querySelector('.p-side-navigation__list');
    if (!link?.hasAttribute('aria-expanded')) {
      link.setAttribute('aria-expanded', isExpanded);
    }
    if (!nestedList?.hasAttribute('aria-expanded')) {
      nestedList.setAttribute('aria-expanded', isExpanded);
    }
  }

  function handleExpandToggle(event) {
    const item = event.currentTarget.closest('.p-side-navigation__item');
    const button = item.querySelector('.p-side-navigation__expand, .p-side-navigation__accordion-button');
    const link = item.querySelector('.p-side-navigation__link');
    const nestedList = item.querySelector('.p-side-navigation__list');

    [button, link, nestedList].forEach((el) => {
      el.setAttribute('aria-expanded', el.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
  }

  function setupSideNavigationExpands() {
    var expandToggles = document.querySelectorAll('.p-side-navigation__expand, .p-side-navigation__accordion-button');
    expandToggles.forEach((toggle) => {
      setupSideNavigationExpandToggle(toggle);
      toggle.addEventListener('click', (e) => {
        handleExpandToggle(e);
      });
    });
  }

  setupSideNavigationExpands();
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
