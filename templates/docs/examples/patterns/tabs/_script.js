(function () {
  var keys = {
    left: 37,
    right: 39,
  };

  var direction = {
    37: -1,
    39: 1,
  };

  /**
    Attaches a number of events that each trigger
    the reveal of the chosen tab content
    @param {Array} tabs an array of tabs within a container
  */
  function attachEvents(tabs) {
    tabs.forEach(function (tab, index) {
      tab.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key === keys.left || key === keys.right) {
          switchTabOnArrowPress(e, tabs);
        }
      });

      tab.addEventListener('click', function (e) {
        e.preventDefault();
        setActiveTab(tab, tabs);
      });

      tab.addEventListener('focus', function () {
        setActiveTab(tab, tabs);
      });

      tab.index = index;
    });
  }

  /**
    Determine which tab to show when an arrow key is pressed
    @param {KeyboardEvent} event
    @param {Array} tabs an array of tabs within a container
  */
  function switchTabOnArrowPress(event, tabs) {
    var pressed = event.keyCode;

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left) {
          tabs[tabs.length - 1].focus();
        } else if (pressed === keys.right) {
          tabs[0].focus();
        }
      }
    }
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
})();
