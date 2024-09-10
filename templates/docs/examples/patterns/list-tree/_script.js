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
function setupListTreeLink(listTreeLink) {
  // Set up a click event on the link inside the node grouping if
  const isGroup = listTreeLink.classList.contains('p-list-tree__item--group');
  const childLink = listTreeLink.querySelector('.p-list-tree__link');
  const clickTarget = isGroup || !childLink ? listTreeLink : childLink;
  clickTarget.addEventListener('click', function (event) {
    event.preventDefault();
    // Prevent node clicks from bubbling up to their ancestor nodes
    event.stopPropagation();

    // Set active state on the child toggle button if a grouping was clicked. Otherwise, set active state on the node itself.
    const childToggleButton = clickTarget.querySelector('.p-list-tree__toggle');

    // Determine which element to place `.is-active` on
    let activeTarget = clickTarget;
    if (isGroup && childToggleButton) {
      activeTarget = childToggleButton;
    } else if (childLink) {
      activeTarget = childLink;
    }

    // The highest level tree that contains this node
    const parentTree = clickTarget.closest('.p-list-tree[role="tree"]');

    // Remove active state from any other active nodes in this tree
    const linksToDeactivate = parentTree.querySelectorAll('.is-active');
    linksToDeactivate.forEach((linkToDeactivate) => {
      linkToDeactivate.classList.remove('is-active');
    });

    activeTarget.classList.add('is-active');
  });
}

// Set up all list trees on the page.
var listTreeToggles = document.querySelectorAll('.p-list-tree__toggle');
for (var i = 0, l = listTreeToggles.length; i < l; i++) {
  setupListTreeToggle(listTreeToggles[i]);
}

// Set up all the links on the page.
var listTreeItems = document.querySelectorAll('li.p-list-tree__item:not(.p-list-tree__item--group)');
var listTreeLinks = [...listTreeItems, ...listTreeToggles];
for (var i = 0; i < listTreeLinks.length; i++) {
  setupListTreeLink(listTreeLinks[i]);
}
