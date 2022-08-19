// Setup expand toggles for all side navigations on the page.

var expandToggles = document.querySelectorAll('.p-side-navigation__expand');
var navigationLinks = document.querySelectorAll('.p-side-navigation__link');

const setup = (toggle) => {
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
};

const handleToggle = (e) => {
  const item = e.currentTarget.closest('.p-side-navigation__item');
  const button = item.querySelector('.p-side-navigation__expand');
  const link = item.querySelector('.p-side-navigation__link');
  const nestedList = item.querySelector('.p-side-navigation__list');
  [button, link, nestedList].forEach((el) => el.setAttribute('aria-expanded', el.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'));
};

expandToggles.forEach((toggle) => {
  setup(toggle);
  toggle.addEventListener('click', (e) => {
    handleToggle(e);
  });
});
