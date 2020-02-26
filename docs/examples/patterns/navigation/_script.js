/**
  Opens a given subnav by applying is-active class to it
  and setting aria-hidden attribute on dropdown contents.
  @param {HTMLElement} subnav Root element of subnavigation to open.
*/
function openSubnav(subnav) {
  subnav.classList.add('is-active');
  var toggle = subnav.querySelector('.p-subnav__toggle');
  var dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
  dropdown.setAttribute('aria-hidden', 'true');
}

/**
  Closes a given subnav by removing is-active class to it
  and setting aria-hidden attribute on dropdown contents.
  @param {HTMLElement} subnav Root element of subnavigation to open.
*/
function closeSubnav(subnav) {
  subnav.classList.remove('is-active');
  var toggle = subnav.querySelector('.p-subnav__toggle');
  var dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
  dropdown.setAttribute('aria-hidden', 'false');
}

/**
  Closes all subnavs on the page.
*/
function closeAllSubnavs() {
  var subnavs = document.querySelectorAll('.p-subnav');
  for (var i = 0, l = subnavs.length; i < l; i++) {
    closeSubnav(subnavs[i]);
  }
}

/**
  Attaches click event listener to subnav toggle.
  @param {HTMLElement} subnavToggle Toggle element of subnavigation.
*/
function setupSubnavToggle(subnavToggle) {
  subnavToggle.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var subnav = subnavToggle.parentElement;
    var isActive = subnav.classList.contains('is-active');

    closeAllSubnavs();
    if (!isActive) {
      openSubnav(subnav);
    }
  });
}

// Setup all subnav toggles on the page
var subnavToggles = document.querySelectorAll('.p-subnav__toggle');

for (var i = 0, l = subnavToggles.length; i < l; i++) {
  setupSubnavToggle(subnavToggles[i]);
}

// Close all menus if anything else on the page is clicked
document.addEventListener('click', function(event) {
  var target = event.target;

  if (target.closest) {
    if (!target.closest('.p-subnav__toggle') && !target.closest('.p-subnav__item')) {
      closeAllSubnavs();
    }
  } else if (target.msMatchesSelector) {
    // IE friendly `Element.closest` equivalent
    // as in https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    do {
      if (target.msMatchesSelector('.p-subnav__toggle') || target.msMatchesSelector('.p-subnav__item')) {
        return;
      }
      target = target.parentElement || target.parentNode;
    } while (target !== null && target.nodeType === 1);

    closeAllSubnavs();
  }
});
