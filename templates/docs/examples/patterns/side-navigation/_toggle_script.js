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
      controlInitialFocus(sideNavigation, false);
    } else {
      sideNavigation.classList.remove('is-expanded');
      sideNavigation.classList.add('is-collapsed');
      controlInitialFocus(sideNavigation, true);
    }
  }
}

/**
  Ensures links are only focusable when side nav is in view
  @param {HTMLElement} sideNavigation The side navigation element.
  @param {Boolean} sideNavCollapsed Whether the side nav is expanded or collapsed.
*/
function controlInitialFocus(sideNavigation, sideNavCollapsed) {
  const toggleButtonOutsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle');
  const toggleButtonInsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle--in-drawer');

  if (sideNavCollapsed) {
    toggleButtonOutsideDrawer.focus();
    toggleButtonOutsideDrawer.setAttribute('aria-expanded', false);
    toggleButtonInsideDrawer.setAttribute('aria-expanded', false);
    toggleButtonInsideDrawer.tabIndex = -1;
  } else {
    toggleButtonInsideDrawer.focus();
    toggleButtonOutsideDrawer.setAttribute('aria-expanded', true);
    toggleButtonInsideDrawer.setAttribute('aria-expanded', true);
    toggleButtonInsideDrawer.tabIndex = 0;
  }
}

/**
  Attaches event listeners for the side navigation toggles
  @param {HTMLElement} sideNavigation The side navigation element.
*/
function setupSideNavigation(sideNavigation) {
  var toggles = [].slice.call(sideNavigation.querySelectorAll('.js-drawer-toggle'));

  toggles.forEach(function (toggle) {
    var sideNav = document.getElementById(toggle.getAttribute('aria-controls'));
    var drawerEl = sideNav.querySelector('.p-side-navigation__drawer');

    if (drawerEl.getBoundingClientRect().top === 0) {
      sideNav.classList.add('is-hidden');
      sideNav.classList.add('is-collapsed');
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();

      if (sideNav) {
        //drawerEl.style.display = 'block';
        sideNav.classList.remove('is-hidden');
        toggleDrawer(sideNav, !sideNav.classList.contains('is-expanded'));
      }
    });

    drawerEl.addEventListener('animationend', () => {
      if (!sideNav.classList.contains('is-expanded')) {
        sideNav.classList.add('is-hidden');
      }
    });

    drawerEl.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(sideNav, false);
      }
    });
  });

  // improvements for side nav when resizing the window
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

  var sideNavs = document.querySelectorAll('.p-side-navigation, [class*="p-side-navigation--"]');

  sideNavs.forEach((sideNav) => {
    var drawerEl = sideNav.querySelector('.p-side-navigation__drawer');
    window.addEventListener(
      'resize',
      throttle(function () {
        // var drawerPosition = window.getComputedStyle(drawerEl).position;

        // // when screen size changes from mobile (fixed drawer) to large screen
        // // reset any styles added by opening the drawer
        // if (drawerPosition !== 'fixed') {
        //   sideNav.classList.remove('is-expanded');
        //   sideNav.classList.remove('is-collapsed');
        //   sideNav.classList.remove('is-hidden');
        //   //drawerEl.style.display = 'block';
        // } else {
        //   sideNav.classList.add('is-collapsed');
        //   sideNav.classList.add('is-hidden');
        //   //drawerEl.style.display = 'none';
        // }
        sideNav.classList.remove('is-expanded');
        sideNav.classList.remove('is-collapsed');
        sideNav.classList.add('is-hidden');
      }, 10)
    );
  });
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
