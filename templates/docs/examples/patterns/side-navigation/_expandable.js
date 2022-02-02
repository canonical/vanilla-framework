function expandCollapseSideNav() {
  // Grab the navigation
  const sideNavWrapper = document.querySelector('.p-side-navigation__drawer');
  const sideNavDirectChildren = Array.from(sideNavWrapper.children);

  // Find the top level ul wrappers which don't need chevrons
  const topLevelLists = sideNavDirectChildren.filter((child) => child.classList.contains('p-side-navigation__list'));

  // Function to pass first and second level nav elements to adding onclick functionality and chevron classes
  function findNavItemsToExpandCollapse(navListItem) {
    navListItem.forEach((child) => {
      const nestedList = child.childNodes.item(3);
      if (nestedList && nestedList.classList.contains('p-side-navigation__list')) {
        child.classList.add('has-chevron');
        nestedList.classList.add('u-hide');
        child.addEventListener('click', (e) => {
          if (e.target.parentElement === child) {
            nestedList.classList.toggle('u-hide');
          }
        });
      }
    });
  }

  topLevelLists.forEach((topLevelList) => {
    const firstLevelNavItems = Array.from(topLevelList.children);

    // Add chevrons and on click functionality to first level lists
    findNavItemsToExpandCollapse(firstLevelNavItems);

    const firstLevelListTitles = firstLevelNavItems.filter((child) => child.classList.contains('has-chevron'));

    firstLevelListTitles.forEach((firstLevelListTitle) => {
      const secondLevelNav = Array.from(firstLevelListTitle.children);
      const secondLevelNavItems = Array.from(secondLevelNav[1].childNodes);

      // Add chevrons and on click functionality to second level lists
      findNavItemsToExpandCollapse(secondLevelNavItems);
    });
  });
}

expandCollapseSideNav();
