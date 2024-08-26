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
 * Adds or removes a class from an element.
 * @param {HTMLElement} element - The element to add or remove the class from.
 * @param {String} className - The class to add or remove.
 * @param {Boolean} add - Whether to add or remove the class.
 */
function setClass(element, className, add) {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

/**
 * Attaches event listeners for the list tree link.
 * @param {HTMLElement} listTreeLink - `.p-list-tree__toggle` or `.p-list-tree__item` element to set up.
 * @param {HTMLElement[]} otherTreeLinks - Other `.p-list-tree__toggle` or `.p-list-tree__item` elements on the page.
 */
function setupListTreeLink(listTreeLink, otherTreeLinks) {
  listTreeLink.addEventListener('click', function (event) {
    event.preventDefault();

    setClass(listTreeLink, 'is-active', true);

    otherTreeLinks.forEach((otherTreeLink) => {
      setClass(otherTreeLink, 'is-active', false);
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
