// small script to make the example interactive
// not intended to be used in projects
var links = [].slice.call(document.querySelectorAll('.p-side-navigation__link, .p-side-navigation--raw-html li > a'));

links.forEach(function (link) {
  link.addEventListener('click', function () {
    var active = [].slice.call(document.querySelectorAll('.is-active'));
    active.forEach(function (link) {
      link.classList.remove('is-active');
    });
    this.classList.add('is-active');
    this.blur();
  });
});
