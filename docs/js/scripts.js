// Toggle mobile sidebar nav
var toggle = document.querySelector('.p-sidebar__toggle');
var sidebarContent = document.querySelector('.p-sidebar__content');

toggle.addEventListener('click', function(e) {
  toggle.classList.toggle('p-icon--menu');
  toggle.classList.toggle('p-icon--close');
  sidebarContent.classList.toggle('u-hide--small');
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
