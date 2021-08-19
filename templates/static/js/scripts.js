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
        }
      }, 200)
    );
  }

  setupSideNavigation(document.querySelector('.p-side-navigation'));
})();

// Add table of contents to side navigation on documentation pages
(function () {
  // get all headings from page and add it to current highligted item in side navigation
  var list = document.createElement('ul');
  list.classList.add('p-side-navigation__list');

  var item = document.createElement('li');
  item.classList.add('p-side-navigation__item');

  var anchor = document.createElement('a');
  anchor.classList.add('p-side-navigation__link');

  // Add all H3s with IDs to the table of contents list
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
    var parent = document.querySelector('.p-side-navigation__link[aria-current="page"]').parentNode;

    parent.appendChild(list);
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

// Add class to exteral links
(function () {
  var links = [].slice.call(document.querySelectorAll('a'));
  links.forEach(function (link) {
    var parentClass = link.parentNode.classList;
    var ignoreNav = !(parentClass.contains('p-navigation__logo') || parentClass.contains('p-navigation__link'));

    var isInternal = link.href.indexOf('https://vanillaframework.io') === 0;

    if (!isInternal && link.hostname && link.hostname != location.hostname && ignoreNav) {
      link.className += ' p-link--external';
    }
  });
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
