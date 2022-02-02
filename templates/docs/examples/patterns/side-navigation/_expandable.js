function expandCollapseSideNav() {
  // Grab the navigation
  const sideNavWrapper = document.querySelector('.p-side-navigation__drawer');
  const sideNavDirectChildren = sideNavWrapper.children;
  const arrayOfChildren = Array.from(sideNavDirectChildren);

  // Find the top level ul elements which contain the nav. No need to add chevrons to these
  const topLevelLists = arrayOfChildren.filter((child) => child.classList.contains('p-side-navigation__list'));

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
