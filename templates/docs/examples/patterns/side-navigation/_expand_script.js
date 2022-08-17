// Setup expand toggles for all side navigations on the page.
var expandToggles = document.querySelectorAll('.p-side-navigation__expand');
var navigationLinks = document.querySelectorAll('.p-side-navigation__link');

const toggleItem = (item) => {
  if (item.getAttribute('aria-expanded') === 'true') {
    if (item.querySelector('.p-side-navigation__list').className.includes('fade-in--after')) {
      item.querySelector('.p-side-navigation__list').classList.remove('fade-in--after');
      item.setAttribute('aria-expanded', false);
    }
  } else {
    item.setAttribute('aria-expanded', true);
    if (item.querySelector('.p-side-navigation__list').className.includes('fade-in')) {
      item.querySelector('.p-side-navigation__list').classList.add('fade-in--after');
    }
  }
};

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const item = e.currentTarget.closest('.p-side-navigation__item');
    const isExpandable = item.hasAttribute('aria-expanded');
    if (isExpandable) {
      toggleItem(item);
    }
  });
});

expandToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.p-side-navigation__item');
    toggleItem(item);
  });
});
