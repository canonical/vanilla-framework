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
  @param {HTMLElement} menuToggle The menu container element.
*/
function setupContextualMenu(menuToggle) {
  menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    var menuAlreadyOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    var top = menuToggle.offsetHeight;
    // for inline elements leave some space between text and menu
    if (window.getComputedStyle(menuToggle).display === 'inline') {
      top += 5;
    }

    toggleMenu(menuToggle, !menuAlreadyOpen, top);
  });
}

/**
  Attaches event listeners for all the menu toggles in the document and
  listeners to handle close when clicking outside the menu or using ESC key.
  @param {String} contextualMenuToggleSelector The CSS selector matching menu toggle elements.
*/
function setupAllContextualMenus(contextualMenuToggleSelector) {
  // Setup all menu toggles on the page.
  var toggles = document.querySelectorAll(contextualMenuToggleSelector);

  for (var i = 0, l = toggles.length; i < l; i++) {
    setupContextualMenu(toggles[i]);
  }

  // Add handler for clicking outside the menu.
  document.addEventListener('click', function (event) {
    for (var i = 0, l = toggles.length; i < l; i++) {
      var toggle = toggles[i];
      var contextualMenu = document.getElementById(toggle.getAttribute('aria-controls'));
      var clickOutside = !(toggle.contains(event.target) || contextualMenu.contains(event.target));

      if (clickOutside) {
        toggleMenu(toggle, false);
      }
    }
  });

  // Add handler for closing menus using ESC key.
  document.addEventListener('keydown', function (e) {
    e = e || window.event;

    if (e.keyCode === 27) {
      for (var i = 0, l = toggles.length; i < l; i++) {
        toggleMenu(toggles[i], false);
      }
    }
  });
}

setupAllContextualMenus('.p-contextual-menu__toggle');
