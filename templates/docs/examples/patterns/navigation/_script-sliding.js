// Controls focus within the navigation when it is open.
let lastFocusIndex = 0;
let allFocusableElements = [];

function getFirstFocusableElement(dropdown) {
  const focusableElements = [].slice.call(dropdown.querySelectorAll('.p-navigation__link, .p-navigation__dropdown-item'));

  return focusableElements[0];
}

function getLastFocusableElement(dropdown) {
  const focusableElements = [].slice.call(dropdown.querySelectorAll('.p-navigation__link, .p-navigation__dropdown-item'));

  return focusableElements[focusableElements.length - 1];
}

function handleDropdownFocus(elementFocused, dropdown, allFocusableElements) {
  // check if focus is inside a closed dropdown
  if (elementFocused === document.activeElement && dropdown.getAttribute('aria-hidden') == 'true') {
    const itemFocusIndex = allFocusableElements.indexOf(elementFocused);

    // check the directiong of the focus
    if (lastFocusIndex > itemFocusIndex) {
      const firstFocusableDescendant = getFirstFocusableElement(dropdown);
      const firstFocusableDescendantIndex = allFocusableElements.indexOf(firstFocusableDescendant);

      const nextFocusableElement = allFocusableElements[firstFocusableDescendantIndex - 1];

      if (nextFocusableElement) {
        nextFocusableElement.focus();

        lastFocusIndex = firstFocusableDescendantIndex - 1;
      }
    } else {
      const lastFocusableDescendant = getLastFocusableElement(dropdown);
      const lastFocusableDescendantIndex = allFocusableElements.indexOf(lastFocusableDescendant);

      let nextFocusableElement = allFocusableElements[lastFocusableDescendantIndex + 1];

      if (nextFocusableElement) {
        nextFocusableElement.focus();

        lastFocusIndex = lastFocusableDescendantIndex + 1;
      } else {
        const firstFocusableElement = allFocusableElements[0];

        firstFocusableElement.focus();

        lastFocusIndex = 0;
      }
    }
  }
}

function toggleDropdown(toggle, open) {
  let parentElement;
  if (toggle.parentNode.classList.contains('is-back')) {
    parentElement = toggle.parentNode.parentNode.parentNode;
  } else {
    parentElement = toggle.parentNode;
  }

  const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));

  dropdown.setAttribute('aria-hidden', !open);

  if (open) {
    parentElement.classList.add('is-active');
  } else {
    parentElement.classList.remove('is-active');
  }
}

function closeAllDropdowns(toggles, exceptions) {
  toggles.forEach(function (toggle) {
    if (exceptions) {
      // if the dropdown is in one of the exceptions, skip it
      if (!exceptions[toggle.parentNode.id] && !toggle.parentNode.classList.contains('is-back')) {
        toggleDropdown(toggle, false);
      }
    } else {
      toggleDropdown(toggle, false);
    }
  });
}

function handleClickOutside(toggles, containerClass) {
  document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.closest) {
      if (!target.closest(containerClass)) {
        closeAllDropdowns(toggles);
      }
    }
  });
}

function handleClickToggle(toggle, toggles, containerClass) {
  let shouldOpen;

  if (!toggle.parentNode.classList.contains('is-back')) {
    const parents = {};
    let element = toggle.parentNode;

    const classNames = [containerClass.split('.')[1], 'is-active'];

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

  toggleDropdown(toggle, shouldOpen);
}

function initNavDropdowns(containerClass) {
  const navigation = document.querySelector('.p-navigation');

  const toggles = [].slice.call(navigation.querySelectorAll(containerClass + ' [aria-controls]'));
  const dropdowns = [].slice.call(navigation.querySelectorAll(`${containerClass} .p-navigation__dropdown`));
  allFocusableElements = [].slice.call(navigation.querySelectorAll('a, button, input, select, textarea, [tabindex="0"]'));

  handleClickOutside(toggles, containerClass);

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', async function (e) {
      e.preventDefault();

      handleClickToggle(toggle, toggles, containerClass);
    });

    // handle focus on back button (first item in the dropdown)
    if (toggle.parentNode.classList.contains('is-back')) {
      toggle.addEventListener('focus', function (e) {
        e.preventDefault();

        const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));

        handleDropdownFocus(toggle, dropdown, allFocusableElements);
      });
    }
  });

  // handle focus on last item in the dropdown
  dropdowns.forEach(function (dropdown) {
    const lastItem = getLastFocusableElement(dropdown);

    lastItem.addEventListener('focus', function (e) {
      e.preventDefault();

      handleDropdownFocus(lastItem, dropdown, allFocusableElements);
    });
  });
}
