// Sidebar menu overlay toggle
var toggleElements = document.querySelectorAll('.js-sidebar-toggle');
toggleElements.forEach(function(el) {
  if (el.tagName === 'I') {
    el.addEventListener(
      "click",
      function(e) {
        e.stopPropagation();
        toggleElements.forEach(function(el) {
          el.classList.toggle("u-hide");
          el.setAttribute('aria-hidden', el.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
        });
      },
      false
    );
  }
});

// Sidebar accordion sections
var navSidebarLinks = document.querySelectorAll('.js-sidebar-toggle a');
navSidebarLinks.forEach(function(el) {
  el.addEventListener(
    "click",
    function(e) {
      e.stopPropagation();
      var item = this;
      if (item.nextSibling) {
        item.classList.toggle("is-selected");
      }
    },
    false
  );
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
  document.getElementById('docs-list-sorted').style.display = 'none';
  document.getElementById('docs-list-unsorted').style.display = 'block';
}

function filterDocs() {
  var input = document.getElementById('search-docs');
  var filter = input.value.toLowerCase();

  if (filter) {
    document.getElementById('docs-list-unsorted').style.display = 'none';
    document.getElementById('docs-list-sorted').style.display = 'block';

    var docsListItems = document.querySelectorAll('.js-list-items');
    docsListItems.forEach(function(item) {
      var text = item.firstElementChild.innerText.toLowerCase();
      item.style.display = text.indexOf(filter) === 0 ? 'block' : 'none';
    });
  } else {
    resetFilter();
  }
}
