/**
  Attaches a number of events that each trigger
  the reveal of the chosen tab content
  @param {Array} tabs an array of tabs within a container
*/
function attachEvents(tabs) {
  tabs.forEach(function (tab) {
    tab.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        setActiveTab(tab, tabs);
      }
    });

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      setActiveTab(tab, tabs);
    });
  });
}

/**
  Cycles through an array of tab elements and ensures 
  only the target tab and its content are selected
  @param {HTMLElement} tab the tab whose content will be shown
  @param {Array} tabs an array of tabs within a container
*/
function setActiveTab(tab, tabs) {
  tabs.forEach(function (tabElement) {
    var tabContent = document.getElementById(tabElement.getAttribute('aria-controls'));

    if (tabElement === tab) {
      tabElement.setAttribute('aria-selected', true);
      tabContent.removeAttribute('hidden');
    } else {
      tabElement.setAttribute('aria-selected', false);
      tabContent.setAttribute('hidden', true);
    }
  });
}

/**
  Attaches events to tab links within a given parent element,
  and sets the active tab if the current hash matches the id
  of an element controlled by a tab link
  @param {String} selector class name of the element 
  containing the tabs we want to attach events to
*/
function initTabs(selector) {
  var tabContainers = [].slice.call(document.querySelectorAll(selector));

  tabContainers.forEach(function (tabContainer) {
    var tabs = [].slice.call(tabContainer.querySelectorAll('[aria-controls]'));
    attachEvents(tabs);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTabs('[role="tablist"]');
});
