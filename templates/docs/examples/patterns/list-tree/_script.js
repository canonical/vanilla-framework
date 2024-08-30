/**
 Toggles the necessary aria-attributes' values on the elements
 to handle showing and hiding them.
 @param {HTMLElement} element The toggle element controlling the visibility.
 @param {Boolean} show Whether to show or hide the target.
 */
function toggleElement(element, show) {
  var target = document.getElementById(element.getAttribute('aria-controls'));

  if (target) {
    element.setAttribute('aria-expanded', show);
    target.setAttribute('aria-hidden', !show);
  }
}

/**
 Attaches event listeners for the list tree toggle.
 @param {HTMLElement} listTreeToggle The list tree toggle element.
 */
function setupListTreeToggle(listTreeToggle) {
  listTreeToggle.addEventListener('click', function (event) {
    event.preventDefault();
    var expand = this.getAttribute('aria-expanded') === 'true' ? false : true;

    toggleElement(listTreeToggle, expand);
  });
}

/**
 * Attaches event listeners for the list tree link.
 * @param {HTMLElement} listTreeLink - `.p-list-tree__toggle` or `.p-list-tree__item` element to set up.
 * @param {HTMLElement[]} otherTreeLinks - Other `.p-list-tree__toggle` or `.p-list-tree__item` elements on the page.
 */
function setupListTreeLink(listTreeLink, otherTreeLinks) {
  listTreeLink.addEventListener('click', function (event) {
    event.preventDefault();

    listTreeLink.classList.add('is-active');

    otherTreeLinks.forEach((otherTreeLink) => {
      otherTreeLink.classList.remove('is-active');
    });
  });
}

// Set up all list trees on the page.
var listTreeToggles = document.querySelectorAll('.p-list-tree__toggle');
for (var i = 0, l = listTreeToggles.length; i < l; i++) {
  setupListTreeToggle(listTreeToggles[i]);
}

// Set up all the links on the page.
var listTreeItems = document.querySelectorAll('.p-list-tree__item:not(.p-list-tree__item--group)');
var listTreeLinkItems = [...listTreeToggles, ...listTreeItems];
for (var i = 0; i < listTreeLinkItems.length; i++) {
  setupListTreeLink(
    listTreeLinkItems[i],
    // all items besides this one
    listTreeLinkItems.filter((_, j) => i !== j),
  );
}
