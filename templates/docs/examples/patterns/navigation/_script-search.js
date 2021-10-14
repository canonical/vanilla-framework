/** @param {HTMLElement} element The tab that acts as the handles. */

function initNavigationSearch(element) {
  var searchButton = element.querySelector('.js-search-button');
  var searchReset = element.querySelector('.p-search-box__reset');

  const overlay = document.createElement('div');
  overlay.classList.add('p-navigation-overlay');
  overlay.classList.add('u-hide');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.addEventListener('click', closeSearch);
  element.appendChild(overlay);

  if (searchButton) {
    searchButton.addEventListener('click', openSearch);
  }

  if (searchReset) {
    searchReset.addEventListener('click', closeSearch);
  }

  function openSearch(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var curtain = document.querySelector('.p-navigation-overlay');
    var searchInput = navigation.querySelector('.p-search-box__input');
    curtain.classList.remove('u-hide');
    navigation.classList.add('has-search-open');
    searchInput.focus();
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeSearch() {
    var navigation = document.querySelector('.p-navigation.has-search-open');
    var curtain = document.querySelector('.p-navigation-overlay');
    var banner = document.querySelector('.p-navigation__banner');
    curtain.classList.add('u-hide');
    navigation.classList.remove('has-search-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function keyPressHandler(e) {
    if (e.key === 'Escape') {
      closeSearch();
    }
  }
}
var navigation = document.querySelector('#navigation');
initNavigationSearch(navigation);
