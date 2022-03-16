/**
  Toggles the necessary aria- attributes' values on the menus
  and handles to show or hide them.
  @param {HTMLElement} element The menu link or button.
  @param {Boolean} show Whether to show or hide the menu.
  @param {Number} top Top offset in pixels where to show the menu.
*/
function toggleMenu(element, show, top) {
  var target = document.getElementById(element.getAttribute('aria-controls'));

  if (target) {
    element.setAttribute('aria-expanded', show);
    target.setAttribute('aria-hidden', !show);

    if (typeof top !== 'undefined') {
      target.style.top = top + 'px';
    }

    if (show) {
      target.focus();
    }
  }
}

/**
  Attaches event listeners for the menu toggle open and close click events.
  @param {HTMLElement} menu The menu container element.
*/

function setupContextualMenu(menu) {
  const toggle = menu.querySelector('.p-contextual-menu__toggle');
  const dropdown = menu.querySelector('.p-contextual-menu__dropdown');

  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    var menuAlreadyOpen = toggle.getAttribute('aria-expanded') === 'true';

    var top = toggle.offsetHeight;
    // for inline elements leave some space between text and menu
    if (window.getComputedStyle(toggle).display === 'inline') {
      top += 5;
    }

    toggleMenu(toggle, !menuAlreadyOpen, top);
  });

  // Add handler for clicking outside the menu.
  document.addEventListener('click', function (event) {
    var contextualMenu = document.getElementById(toggle.getAttribute('aria-controls'));
    var clickOutside = !(toggle.contains(event.target) || contextualMenu.contains(event.target));

    if (clickOutside) {
      toggleMenu(toggle, false);
    }
  });

  //Add event listener to close menu when tab focus leaves
  dropdown.addEventListener('focusout', function (e) {
    // Check if where you have tabbed to is in the dropdown
    if (dropdown.contains(e.relatedTarget)) return;

    toggleMenu(toggle, false);
  });

  // Add handler for closing menus using ESC key.
  document.addEventListener('keydown', function (e) {
    e = e || window.event;

    if (e.keyCode === 27) {
      toggleMenu(toggle, false);
    }
  });
}

/**
  @param {String} contextualMenuSelector The CSS selector matching menu toggle elements.
*/
function setupAllContextualMenus(contextualMenuSelector) {
  // Setup all contextual menus on the page.
  var menus = document.querySelectorAll(contextualMenuSelector);

  for (var i = 0, l = menus.length; i < l; i++) {
    setupContextualMenu(menus[i]);
  }
}

setupAllContextualMenus('.p-contextual-menu, [class*="p-contextual-menu--"]');
