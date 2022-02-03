function expandCollapseSideNav() {
  // Grab the navigation
  const sideNavWrapper = document.querySelector('.p-side-navigation__drawer');
  const sideNavDirectChildren = Array.from(sideNavWrapper.children);

  // Find the top level ul wrappers which don't need chevrons
  const topLevelLists = sideNavDirectChildren.filter((child) => child.classList.contains('p-side-navigation__list'));

  // Function to pass first and second level nav elements to adding onclick functionality and chevron classes
  function findNavItemsToExpandCollapse(navItems) {
    navItems.forEach((navItem) => {
      const nestedList = navItem.childNodes.item(3);
      if (nestedList && nestedList.classList.contains('p-side-navigation__list')) {
        const expandableLink = navItem.childNodes[1];
        expandableLink.classList.add('not-expanded');
        nestedList.classList.add('u-hide');
        expandableLink.addEventListener('click', (e) => {
          if (e.target.parentElement === navItem) {
            nestedList.classList.toggle('u-hide');

            if (!nestedList.classList.contains('u-hide')) {
              expandableLink.classList.remove('not-expanded');
              expandableLink.classList.add('is-expanded');
            } else {
              expandableLink.classList.add('not-expanded');
              expandableLink.classList.remove('is-expanded');
            }
          }
        });
      }
    });
  }

  topLevelLists.forEach((topLevelList) => {
    const firstLevelNavItems = Array.from(topLevelList.children);

    // Add chevrons and on click functionality to first level lists
    findNavItemsToExpandCollapse(firstLevelNavItems);

    console.log(firstLevelNavItems);

    const firstLevelListTitles = firstLevelNavItems.filter((firstLevelNavItem) => firstLevelNavItem.childNodes[1].classList.contains('not-expanded'));

    firstLevelListTitles.forEach((firstLevelListTitle) => {
      const secondLevelNav = Array.from(firstLevelListTitle.children);
      const secondLevelNavItems = Array.from(secondLevelNav[1].childNodes);

      // Add chevrons and on click functionality to second level lists
      findNavItemsToExpandCollapse(secondLevelNavItems);
    });
  });
}

expandCollapseSideNav();
