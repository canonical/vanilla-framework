// small script to make the example interactive
// not intended to be used in projects
var links = [].slice.call(document.querySelectorAll('.p-side-navigation__link, .p-side-navigation--raw-html li > a'));

links.forEach(function (link) {
  link.addEventListener('click', function () {
    var active = [].slice.call(document.querySelectorAll('.is-active, [aria-current]'));
    active.forEach(function (link) {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    });
    this.setAttribute('aria-current', 'page');
    this.blur();
  });
});
