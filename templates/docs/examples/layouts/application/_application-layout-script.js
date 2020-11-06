document.querySelector('.js-menu-toggle').addEventListener('click', function () {
  document.querySelector('.l-navigation').classList.toggle('is-collapsed');
});
document.querySelector('.js-menu-close').addEventListener('click', function () {
  document.querySelector('.l-navigation').classList.add('is-collapsed');
});

document.querySelector('.js-aside-toggle').addEventListener('click', function () {
  document.querySelector('.l-aside').classList.remove('is-pinned');
  document.querySelector('.l-aside').classList.toggle('u-hide');
});
document.querySelector('.js-aside-close').addEventListener('click', function () {
  document.querySelector('.l-aside').classList.add('u-hide');
});

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

document.querySelector('.js-menu-pin').addEventListener('click', function () {
  document.querySelector('.l-navigation').classList.toggle('is-pinned');
  if (document.querySelector('.l-navigation').classList.contains('is-pinned')) {
    document.querySelector('.js-menu-pin').querySelector('i').classList.remove('p-icon--pin');
  } else {
    document.querySelector('.js-menu-pin').querySelector('i').classList.add('p-icon--pin');
  }
});

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
