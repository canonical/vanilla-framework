if (document.querySelector('.js-menu-toggle')) {
  document.querySelector('.js-menu-toggle').addEventListener('click', function () {
    document.querySelector('.l-navigation').classList.toggle('is-collapsed');
  });
}

if (document.querySelector('.js-menu-close')) {
  document.querySelector('.js-menu-close').addEventListener('click', function (e) {
    document.querySelector('.l-navigation').classList.add('is-collapsed');
    document.activeElement.blur();
  });
}

if (document.querySelector('.js-aside-open')) {
  document.querySelector('.js-aside-open').addEventListener('click', function () {
    document.querySelector('.l-aside').classList.remove('is-collapsed');
  });
}

if (document.querySelector('.js-aside-close')) {
  document.querySelector('.js-aside-close').addEventListener('click', function () {
    document.querySelector('.l-aside').classList.add('is-collapsed');
  });
}

[].slice.call(document.querySelectorAll('.js-aside-resize')).forEach(function (button) {
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

if (document.querySelector('.js-menu-pin')) {
  document.querySelector('.js-menu-pin').addEventListener('click', function () {
    document.querySelector('.l-navigation').classList.toggle('is-pinned');
    if (document.querySelector('.l-navigation').classList.contains('is-pinned')) {
      document.querySelector('.js-menu-pin').querySelector('i').classList.remove('p-icon--pin');
    } else {
      document.querySelector('.js-menu-pin').querySelector('i').classList.add('p-icon--pin');
    }
    document.activeElement.blur();
  });
}

if (document.querySelector('.js-aside-pin')) {
  document.querySelector('.js-aside-pin').addEventListener('click', function () {
    document.querySelector('.l-aside').classList.toggle('is-pinned');
    if (document.querySelector('.l-aside').classList.contains('is-pinned')) {
      document.querySelector('.js-aside-pin').innerText = 'Unpin';
    } else {
      document.querySelector('.js-aside-pin').innerText = 'Pin';
    }
  });
}
