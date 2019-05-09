// Toggle mobile sidebar nav
var sidebarToggle = document.querySelector('.p-sidebar__toggle');
var sidebarContent = document.querySelector('.p-sidebar__content');
var openMainNav = document.querySelector('.p-navigation__toggle--open');

sidebarToggle.addEventListener('click', function(e) {
  sidebarToggle.classList.toggle('is-active');
  sidebarContent.classList.toggle('is-active');
});

openMainNav.addEventListener('click', function(e) {
  sidebarToggle.classList.remove('is-active');
  sidebarContent.classList.remove('is-active');
});

// Add classes to links
var links = document.querySelectorAll('a');
links.forEach(function(link) {
  var parentClass = link.parentNode.classList;
  var ignoreNav = !(parentClass.contains('p-navigation__logo') || parentClass.contains('p-navigation__link'));
  if (link.hostname && link.hostname != location.hostname && ignoreNav) {
    link.className += ' p-link--external';
  }
});

// Docs search functions
function resetFilter() {
  document.getElementById('docs-list-sorted').classList.add('u-hide');
  document.getElementById('docs-list-unsorted').classList.remove('u-hide');
}

function filterDocs() {
  var input = document.getElementById('search-docs');
  var filter = input.value.toLowerCase();

  if (filter) {
    document.getElementById('docs-list-unsorted').classList.add('u-hide');
    document.getElementById('docs-list-sorted').classList.remove('u-hide');

    var docsListItems = document.querySelectorAll('#docs-list-sorted .p-sidebar-nav__item');
    docsListItems.forEach(function(item) {
      var text = item.firstElementChild.innerText.toLowerCase();
      if (text.indexOf(filter) === 0) {
        item.classList.remove('u-hide');
      } else {
        item.classList.add('u-hide');
      }
    });
  } else {
    resetFilter();
  }
}
