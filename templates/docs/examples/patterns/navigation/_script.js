function applyBoundaryChecking(dropdown) {
  // Reset any previous boundary adjustment before measuring
  dropdown.classList.remove('is-right-overflow');

  var dropdownRect = dropdown.getBoundingClientRect();
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // If the dropdown's right edge exceeds the viewport, flip it to align to the right
  if (dropdownRect.right > viewportWidth) {
    dropdown.classList.add('is-right-overflow');
  }
}

function toggleDropdown(toggle, open) {
  var parentElement = toggle.parentNode;
  var dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
  dropdown.setAttribute('aria-hidden', !open);

  if (open) {
    parentElement.classList.add('is-active');
    // Run boundary check after the dropdown becomes visible so we can measure it
    applyBoundaryChecking(dropdown);
  } else {
    parentElement.classList.remove('is-active');
    dropdown.classList.remove('is-right-overflow');
  }
}

function closeAllDropdowns(toggles) {
  toggles.forEach(function (toggle) {
    toggleDropdown(toggle, false);
  });
}

function handleClickOutside(toggles, containerClass) {
  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest) {
      if (!target.closest(containerClass)) {
        closeAllDropdowns(toggles);
      }
    }
  });
}

function initNavDropdowns(containerClass) {
  var toggles = [].slice.call(document.querySelectorAll(containerClass + ' [aria-controls]'));

  handleClickOutside(toggles, containerClass);

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();

      const shouldOpen = !toggle.parentNode.classList.contains('is-active');
      closeAllDropdowns(toggles);
      toggleDropdown(toggle, shouldOpen);
    });
  });
}
