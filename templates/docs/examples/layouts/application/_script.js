/*
  Set up event handlers for application layout examples.
  This is for demo purposes only. Real applications should implement it within their application code.
*/
function setupAppLayoutExamples() {
  var aside = document.querySelector('.l-aside');
  var navigation = document.querySelector('.l-navigation');

  var menuToggle = document.querySelector('.js-menu-toggle');
  var menuClose = document.querySelector('.js-menu-close');
  var menuPin = document.querySelector('.js-menu-pin');
  var asideOpen = document.querySelector('.js-aside-open');
  var asideClose = document.querySelector('.js-aside-close');
  var asideResize = document.querySelectorAll('.js-aside-resize');
  var asidePin = document.querySelector('.js-aside-pin');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navigation.classList.toggle('is-collapsed');
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function (e) {
      navigation.classList.add('is-collapsed');
      document.activeElement.blur();
    });
  }

  if (asideOpen) {
    asideOpen.addEventListener('click', function () {
      aside.classList.remove('is-collapsed');
    });
  }

  if (asideClose) {
    asideClose.addEventListener('click', function () {
      aside.classList.add('is-collapsed');
    });
  }

  [].slice.call(asideResize).forEach(function (button) {
    button.addEventListener('click', function () {
      button.dataset.resizeClass;
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      if (panel) {
        panel.classList.remove('is-narrow');
        panel.classList.remove('is-medium');
        panel.classList.remove('is-wide');
        if (button.dataset.resizeClass) {
          panel.classList.add(button.dataset.resizeClass);
        }
      }
    });
  });

  if (menuPin) {
    menuPin.addEventListener('click', function () {
      navigation.classList.toggle('is-pinned');
      if (navigation.classList.contains('is-pinned')) {
        menuPin.querySelector('i').classList.add('p-icon--close');
        menuPin.querySelector('i').classList.remove('p-icon--pin');
      } else {
        menuPin.querySelector('i').classList.add('p-icon--pin');
        menuPin.querySelector('i').classList.remove('p-icon--close');
      }
      document.activeElement.blur();
    });
  }

  if (asidePin) {
    asidePin.addEventListener('click', function () {
      aside.classList.toggle('is-pinned');
      if (aside.classList.contains('is-pinned')) {
        asidePin.innerText = 'Unpin';
      } else {
        asidePin.innerText = 'Pin';
      }
    });
  }
}

setupAppLayoutExamples();
