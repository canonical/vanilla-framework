// This is not a production ready code, just serves as an example
// of how the focus should be controlled within the sidenav drawer.
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

// throttle util (for window resize event)
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
