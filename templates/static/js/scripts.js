// Add table of contents to side navigation on documentation pages

// get all headings from page and add it to current highligted item in side navigation
(function() {
  let list = document.createElement('ul');
  list.classList.add('p-side-navigation__list');

  let item = document.createElement('li');
  item.classList.add('p-side-navigation__item');

  let anchor = document.createElement('a');
  anchor.classList.add('p-side-navigation__link');

  // Add all H3s with IDs to the table of contents list
  [].slice.call(document.querySelectorAll('main h3[id]')).forEach(function(heading) {
    let thisItem = item.cloneNode();
    let thisAnchor = anchor.cloneNode();
    thisAnchor.setAttribute('href', '#' + heading.id);
    thisAnchor.textContent = heading.textContent;
    thisItem.appendChild(thisAnchor);
    list.appendChild(thisItem);
  });

  // Add table of contents as nested list to side navigation
  if (list.querySelectorAll('li').length > 0) {
    let parent = document.querySelector('.p-side-navigation__link.is-active').parentNode;

    parent.appendChild(list);
  }
})();

// scroll active side navigation item into view (without scrolling whole page)
(function() {
  let sideNav = document.querySelector('.p-side-navigation');
  let currentItem = document.querySelector('.p-side-navigation__link.is-active');

  // calculate scroll by comparing top of side nav and top of active item
  let currentItemOffset = currentItem.getBoundingClientRect().top;
  let offset = currentItemOffset - sideNav.getBoundingClientRect().top;

  // only scroll if active link is off screen or close to bottom of the window
  if (currentItemOffset > window.innerHeight * 0.7) {
    setTimeout(function() {
      sideNav.scrollTop = offset;
    }, 0);
  }
})();

// Add class to exteral links
(function() {
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    var parentClass = link.parentNode.classList;
    var ignoreNav = !(parentClass.contains('p-navigation__logo') || parentClass.contains('p-navigation__link'));

    var isInternal = link.href.indexOf('https://vanillaframework.io') === 0;

    if (!isInternal && link.hostname && link.hostname != location.hostname && ignoreNav) {
      link.className += ' p-link--external';
    }
  });
})();

// Docs search functions
(function() {
  var searchDocsReset = document.getElementById('search-docs-reset');
  var searchBox = document.getElementById('search-docs');

  if (searchDocsReset) {
    searchDocsReset.addEventListener('click', function(e) {
      searchBox.value = '';
      searchBox.focus();
      e.preventDefault();
    });
  }
})();
