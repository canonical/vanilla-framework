const initNavigationSliding = () => {
  document.querySelector('.js-menu-button').addEventListener('click', function (e) {
    if (window.location.hash === '#navigation') {
      window.location.hash = '';
      e.target.innerHTML = 'Menu';
    } else {
      window.location.hash = 'navigation';
      e.target.innerHTML = 'Close menu';
    }
  });

  const toggles = document.querySelectorAll('.p-navigation__link[aria-controls]:not(.js-back)');

  const toggleFocusableListItems = () => {
    const hiddenListItems = document.querySelectorAll('.p-navigation__dropdown[aria-hidden="true"] li');
    const shownListItems = document.querySelectorAll('.p-navigation__dropdown[aria-hidden="false"] li');

    hiddenListItems.forEach(function (el) {
      el.children[0].setAttribute('tabindex', '-1');
    });

    shownListItems.forEach(function (el) {
      el.children[0].setAttribute('tabindex', '0');
    });
  };

  toggleFocusableListItems();

  const resetToggles = (exception) => {
    toggles.forEach(function (el) {
      const target = document.getElementById(el.getAttribute('aria-controls'));
      if (target === exception) {
        return;
      }
      target.setAttribute('aria-hidden', 'true');
      el.parentNode.classList.remove('is-active');
      el.parentNode.parentNode.classList.remove('is-active');
      toggleFocusableListItems();
    });
  };

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest) {
      if (!target.closest('.p-navigation--sliding')) {
        resetToggles();
      }
    }
  });

  toggles.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(el.getAttribute('aria-controls'));
      const isNested = target.parentNode.parentNode.classList.contains('p-navigation__dropdown');

      if (!isNested) {
        resetToggles(target);
      }
      if (target.getAttribute('aria-hidden') === 'true') {
        target.setAttribute('aria-hidden', 'false');
        el.parentNode.classList.add('is-active');
        el.parentNode.parentNode.classList.add('is-active');
      } else {
        target.setAttribute('aria-hidden', 'true');
        el.parentNode.classList.remove('is-active');
        el.parentNode.parentNode.classList.remove('is-active');
      }
      toggleFocusableListItems();
    });
  });

  document.querySelectorAll('.js-back').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = el.parentNode.parentNode;
      target.setAttribute('aria-hidden', 'true');
      el.closest('.is-active').classList.remove('is-active');
      el.closest('.is-active').classList.remove('is-active');
      toggleFocusableListItems();
    });
  });
};

initNavigationSliding();
