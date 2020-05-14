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
    } else {
      sideNavigation.classList.remove('is-expanded');
      sideNavigation.classList.add('is-collapsed');
    }
  }
}

/**
  Attaches event listeners for the side navigation toggles
  @param {HTMLElement} sideNavigation The side navigation element.
*/
function setupSideNavigation(sideNavigation) {
  var toggles = [].slice.call(sideNavigation.querySelectorAll('.js-drawer-toggle'));

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var sideNav = document.getElementById(toggle.getAttribute('aria-controls'));

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
