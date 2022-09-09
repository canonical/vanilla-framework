// Setup expand toggles for all side navigations on the page.

function setupSideNavigationExpandToggle(toggle) {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  if (!isExpanded) {
    toggle.setAttribute('aria-expanded', isExpanded);
  }
  const item = toggle.closest('.p-side-navigation__item');
  const link = item.querySelector('.p-side-navigation__link');
  const nestedList = item.querySelector('.p-side-navigation__list');
  if (!link?.hasAttribute('aria-expanded')) {
    link.setAttribute('aria-expanded', isExpanded);
  }
  if (!nestedList?.hasAttribute('aria-expanded')) {
    nestedList.setAttribute('aria-expanded', isExpanded);
  }
}

function handleExpandToggle(event) {
  const item = event.currentTarget.closest('.p-side-navigation__item');
  const button = item.querySelector('.p-side-navigation__expand, .p-side-navigation__accordion-button');
  const link = item.querySelector('.p-side-navigation__link');
  const nestedList = item.querySelector('.p-side-navigation__list');

  [button, link, nestedList].forEach((el) => {
    el.setAttribute('aria-expanded', el.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });
}

function setupSideNavigationExpands() {
  var expandToggles = document.querySelectorAll('.p-side-navigation__expand, .p-side-navigation__accordion-button');
  expandToggles.forEach((toggle) => {
    setupSideNavigationExpandToggle(toggle);
    toggle.addEventListener('click', (e) => {
      handleExpandToggle(e);
    });
  });
}

setupSideNavigationExpands();
