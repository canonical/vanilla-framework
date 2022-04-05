/**
  Toggles the expanded/collapsed classed on side navigation element.

  @param {HTMLElement} sideNavigation The side navigation element.
  @param {Boolean} show Whether to show or hide the drawer.
*/
function toggleDrawer(sideNavigation, show) {
  if (sideNavigation) {
    const outsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle');
    const insideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle--in-drawer');
    if (show) {
      sideNavigation.classList.remove('is-collapsed');
      sideNavigation.classList.add('is-expanded');
      insideDrawer.focus();
      toggleTabindex(sideNavigation, false);
    } else {
      sideNavigation.classList.remove('is-expanded');
      sideNavigation.classList.add('is-collapsed');
      outsideDrawer.focus();
      toggleTabindex(sideNavigation, true);
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
