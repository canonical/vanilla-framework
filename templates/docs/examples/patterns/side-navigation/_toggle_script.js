/**
  Toggles the expanded class on drawer and overlay elements.

  @param {HTMLElement} drawer The side navigation drawer element.
  @param {Boolean} show Whether to show or hide the drawer.
*/
function toggleDrawer(drawer, show) {
  var overlay = drawer.parentNode.querySelector('.p-side-navigation__overlay');

  if (show) {
    if (drawer) {
      drawer.classList.remove('is-collapsed');
      drawer.classList.add('is-expanded');
    }
    if (overlay) {
      overlay.classList.add('is-expanded');
    }
  } else {
    if (drawer) {
      drawer.classList.remove('is-expanded');
      drawer.classList.add('is-collapsed');
    }
    if (overlay) {
      overlay.classList.remove('is-expanded');
    }
  }
}

/**
  Attaches event listeners for the side navigation toggles
  @param {HTMLElement} sideNavigation The side navigation element.
*/
function setupSideNavigation(sideNavigation) {
  var toggles = [].slice.call(sideNavigation.querySelectorAll('.js-drawer-toggle'));

  toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
      var drawer = document.getElementById(toggle.getAttribute('aria-controls'));

      if (drawer) {
        toggleDrawer(drawer, !drawer.classList.contains('is-expanded'));
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

  // on resize event remove `is-collapsed` class from drawers to prevent them from animating back in
  // TODO: this should probably be throttled
  window.addEventListener('resize', function() {
    var drawers = [].slice.call(document.querySelectorAll('.p-side-navigation__drawer'));

    drawers.forEach(function(drawer) {
      drawer.classList.remove('is-collapsed');
    });
  });
}

setupSideNavigations('.p-side-navigation');
setupSideNavigations('.p-side-navigation--icons');
