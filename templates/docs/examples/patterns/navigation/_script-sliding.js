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
    dropdown.removeAttribute('inert');
  } else {
    parentElement.classList.remove('is-active');
    dropdown.setAttribute('inert', true);
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

function initNavDropdowns(containerClass) {
  const toggles = [].slice.call(document.querySelectorAll(containerClass + ' [aria-controls]'));

  handleClickOutside(toggles, containerClass);

  toggles.forEach(function (toggle) {
    // initialise all dropdowns to inert when the page loads
    if (toggle.parentNode.classList.contains('is-back')) {
      toggle.parentNode.parentNode.setAttribute('inert', true);
    }

    toggle.addEventListener('click', async function (e) {
      e.preventDefault();

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
    });
  });
}
