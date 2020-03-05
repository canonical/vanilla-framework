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

  var isInternal = link.href.indexOf('https://vanillaframework.io') === 0;

  if (!isInternal && link.hostname && link.hostname != location.hostname && ignoreNav) {
    link.className += ' p-link--external';
  }
});

// Docs search functions
var searchDocsReset = document.getElementById('search-docs-reset');
var searchBox = document.getElementById('search-docs');

searchDocsReset.addEventListener('click', function(e) {
  searchBox.value = '';
  searchBox.focus();
  e.preventDefault();
});
