// Setup expand toggles for all side navigations on the page.

var expandToggles = document.querySelectorAll('.p-side-navigation__expand');
var navigationLinks = document.querySelectorAll('.p-side-navigation__link');

const setup = (toggle) => {
  if (!toggle.hasAttribute('aria-expanded')) {
    toggle.setAttribute('aria-expanded', false);
  }
  const item = toggle.closest('.p-side-navigation__item');
  const link = item.querySelector('.p-side-navigation__link');
  const nestedList = item.querySelector('.p-side-navigation__list');
  if (!link?.hasAttribute('aria-expanded')) {
    link.setAttribute('aria-expanded', false);
  }
  if (!nestedList?.hasAttribute('aria-expanded')) {
    nestedList.setAttribute('aria-expanded', false);
  }
};

const handleToggle = (e) => {
  const item = e.currentTarget.closest('.p-side-navigation__item');
  const button = item.querySelector('.p-side-navigation__expand');
  const link = item.querySelector('.p-side-navigation__link');
  const nestedList = item.querySelector('.p-side-navigation__list');
  [button, link, nestedList].forEach((el) => el.setAttribute('aria-expanded', el.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'));
};

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const isExpandable = e.currentTarget.getAttribute('aria-expanded') === 'false';
    if (isExpandable) {
      handleToggle(e);
    }
  });
});

expandToggles.forEach((toggle) => {
  setup(toggle);
  toggle.addEventListener('click', (e) => {
    handleToggle(e);
  });
});
