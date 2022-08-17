// Setup expand toggles for all side navigations on the page.
var expandToggles = document.querySelectorAll('.p-side-navigation__expand');
var navigationLinks = document.querySelectorAll('.p-side-navigation__link');

const toggleItem = (item) => {
  if (item.getAttribute('aria-expanded') === 'true') {
    item.setAttribute('aria-expanded', false);
  } else {
    item.setAttribute('aria-expanded', true);
  }
};

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const item = e.currentTarget.closest('.p-side-navigation__item');
    const button = item.querySelector('.p-side-navigation__expand');
    const isExpandable = button.hasAttribute('aria-expanded');
    if (isExpandable) {
      toggleItem(button);
    }
  });
});

expandToggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    toggleItem(e.currentTarget);
  });
});
