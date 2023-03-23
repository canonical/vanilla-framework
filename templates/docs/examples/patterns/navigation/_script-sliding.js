function toggleDropdown(toggle, open) {
  const parentElement = toggle.parentNode;
  // const parentSlide = document.getElementById(parentElement.getAttribute('data-parent'));
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
      if (!exceptions[toggle.parentNode.id]) {
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

function initNavDropdowns(containerClass) {
  const toggles = [].slice.call(document.querySelectorAll(containerClass + ' [aria-controls]'));

  handleClickOutside(toggles, containerClass);

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', async function (e) {
      e.preventDefault();

      // get all active toggle parents of the clicked toggle
      let element;

      if (toggle.parentNode.classList.contains('is-back')) {
        element = document.getElementById(toggle.getAttribute('aria-controls')).parentNode; // if the clicked toggle is a back button, get the parent of the dropdown
      } else {
        element = toggle.parentNode;
      }
      const classNames = [containerClass.split('.')[1], 'is-active'];
      const parents = {};

      while (element.parentNode && element.parentNode.nodeName.toLowerCase() != 'body') {
        element = element.parentNode;

        if (classNames.every((className) => element.classList.contains(className))) {
          parents[element.id] = element;
        }
      }

      const shouldOpen = !toggle.parentNode.classList.contains('is-active');
      closeAllDropdowns(toggles, parents);
      toggleDropdown(toggle, shouldOpen);
    });
  });
}
