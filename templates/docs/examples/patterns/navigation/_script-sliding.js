function toggleDropdown(toggle, open) {
  let parentElement;

  if (toggle.parentNode.classList.contains('p-navigation__item--dropdown-close')) {
    parentElement = toggle.parentNode.parentNode.parentNode;
  } else {
    parentElement = toggle.parentNode;
  }

  const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));

  dropdown.setAttribute('aria-hidden', !open);

  if (open) {
    parentElement.classList.add('is-active');

    const parentSlide = parentElement.closest('.p-navigation__dropdown, .p-navigation__nav');

    // scroll to top of dropdown when opening it to make sure animation is visible
    if (parentSlide) {
      parentSlide.scrollTop = 0;
    }

    dropdown.classList.remove('is-dropdown-collapsed');
    dropdown.classList.add('is-dropdown-expanded');
  } else {
    parentElement.classList.remove('is-active');

    dropdown.classList.remove('is-dropdown-expanded');
    dropdown.classList.add('is-dropdown-collapsed');
  }
}

function closeAllDropdowns(toggles, exceptions) {
  toggles.forEach(function (toggle) {
    if (exceptions) {
      // if the dropdown is in one of the exceptions, skip it
      if (!exceptions[toggle.parentNode.id] && !toggle.parentNode.classList.contains('p-navigation__item--dropdown-close')) {
        toggleDropdown(toggle, false);
      }
    } else {
      toggleDropdown(toggle, false);
    }
  });
}

function handleClickOutside(toggles, toggleClasses) {
  document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.closest) {
      if (!target.closest(toggleClasses)) {
        closeAllDropdowns(toggles);
      }
    }
  });
}

function handleClickToggle(toggle, toggles, toggleClasses) {
  let shouldOpen;

  if (!toggle.parentNode.classList.contains('p-navigation__item--dropdown-close')) {
    const parents = {};
    let element = toggle.parentNode;

    const classNames = ['p-navigation__item--dropdown-toggle', 'is-active'];

    // get all parents that are active, and exclude them from being closed when a new dropdown is opened
    while (element.parentNode && element.parentNode.nodeName.toLowerCase() != 'body') {
      element = element.parentNode;

      if (classNames.every((className) => element.classList.contains(className))) {
        parents[element.id] = element;
      }
    }

    shouldOpen = !toggle.parentNode.classList.contains('is-active');

    // close all dropdowns except the ones that are parents of the clicked toggle
    closeAllDropdowns(toggles, parents);
  } else {
    shouldOpen = false; // close the dropdown when clicking on the back button
  }

  const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));

  // show dropdown when opening it (places it in the tab order)
  if (shouldOpen) {
    dropdown.classList.remove('is-dropdown-hidden');
  }

  toggleDropdown(toggle, shouldOpen);
}

function toggleMenu(menuButton, navigation, toggles) {
  if (navigation.classList.contains('has-menu-open')) {
    menuButton.textContent = 'Menu';
    navigation.classList.remove('has-menu-open');
    closeAllDropdowns(toggles);
  } else {
    menuButton.textContent = 'Close menu';
    navigation.classList.add('has-menu-open');
    closeAllDropdowns(toggles);
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

function initNavDropdowns() {
  const toggleClasses = ['.p-navigation__item--dropdown-toggle', '.p-navigation__item--dropdown-close'];

  const navigation = document.querySelector('.p-navigation');
  const dropdowns = [].slice.call(navigation.querySelectorAll('.p-navigation__dropdown, .p-navigation__dropdown--right'));
  const toggles = [].slice.call(navigation.querySelectorAll(toggleClasses.map((className) => className + ' [aria-controls]').join(', ')));

  const menuButton = navigation.querySelector('.js-menu-button');

  if (menuButton) {
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();

      toggleMenu(menuButton, navigation, toggles);
    });
  }

  handleClickOutside(toggles, toggleClasses);

  dropdowns.forEach(function (dropdown) {
    // hide inactive dropdowns (takes them out of the tab order)
    if (!dropdown.parentNode.classList.contains('is-active')) {
      dropdown.classList.add('is-dropdown-hidden');
    }

    dropdown.addEventListener(
      'animationend',
      function (e) {
        e.stopPropagation();

        // hide inactive dropdown when animation has finished (takes them out of the tab order)
        if (!dropdown.parentNode.classList.contains('is-active')) {
          dropdown.classList.add('is-dropdown-hidden');

          // focus toggle button
          const toggleButton = dropdown.parentNode.querySelector('.p-navigation__link');

          // focus on parent toggle button after closing a dropdown
          // also helps scroll to the right position when the dropdown is longer than the viewport
          if (toggleButton) {
            toggleButton.focus();
          }
        } else {
          // focus on back button after opening a dropdown
          // also helps scroll to the right position when the dropdown is longer than the viewport
          const backButton = dropdown.querySelector('.p-navigation__item--dropdown-close > .p-navigation__link');

          if (backButton) {
            backButton.focus();
          }
        }
      },
      false
    );
  });

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', async function (e) {
      e.preventDefault();

      handleClickToggle(toggle, toggles, toggleClasses);
    });
  });

  // remove expanded/collapsed class names to avoid unexpected animations
  window.addEventListener(
    'resize',
    throttle(function () {
      dropdowns.forEach((dropdown) => {
        dropdown.setAttribute('aria-expanded', false);

        dropdown.classList.remove('is-dropdown-expanded');
        dropdown.classList.remove('is-dropdown-collapsed');
        dropdown.classList.add('is-dropdown-hidden');

        dropdown.parentNode.classList.remove('is-active');
      });
    }, 10)
  );
}
