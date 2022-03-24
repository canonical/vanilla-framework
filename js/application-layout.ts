import {Component} from './component';

const NAVIGATION = 'l-navigation';

const MENU_TOGGLE = 'js-menu-toggle';
const MENU_CLOSE = 'js-menu-close';
const MENU_PIN = 'js-menu-pin';

const ASIDE = 'l-aside';
const ASIDE_OPEN = 'js-aside-open';
const ASIDE_CLOSE = 'js-aside-close';
const ASIDE_RESIZE = 'js-aside-resize';
const ASIDE_PIN = 'js-aside-pin';

export class ApplicationLayout {
  constructor() {
    const aside = document.querySelector<HTMLElement>(`.${ASIDE}`);
    const navigation = document.querySelector<HTMLElement>(`.${NAVIGATION}`);

    const menuToggle = document.querySelector<HTMLElement>(`.${MENU_TOGGLE}`);
    const menuClose = document.querySelector<HTMLElement>(`.${MENU_CLOSE}`);
    const menuPin = document.querySelector<HTMLElement>(`.${MENU_PIN}`);
    const asideOpen = document.querySelector<HTMLElement>(`.${ASIDE_OPEN}`);
    const asideClose = document.querySelector<HTMLElement>(`.${ASIDE_CLOSE}`);
    const asideResize = Array.from(document.querySelectorAll<HTMLElement>(`.${ASIDE_RESIZE}`));
    const asidePin = document.querySelector<HTMLElement>(`.${ASIDE_PIN}`);

    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('is-collapsed');
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', function (e) {
        navigation.classList.add('is-collapsed');
        const activeEl = document.activeElement as HTMLElement;
        activeEl.blur();
      });
    }

    if (asideOpen) {
      asideOpen.addEventListener('click', function () {
        aside.classList.remove('is-collapsed');
      });
    }

    if (asideClose) {
      asideClose.addEventListener('click', function () {
        aside.classList.add('is-collapsed');
      });
    }

    asideResize.forEach(function (button) {
      button.addEventListener('click', function () {
        button.dataset.resizeClass;
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        if (panel) {
          panel.classList.remove('is-narrow');
          panel.classList.remove('is-medium');
          panel.classList.remove('is-wide');
          if (button.dataset.resizeClass) {
            panel.classList.add(button.dataset.resizeClass);
          }
        }
      });
    });

    if (menuPin) {
      menuPin.addEventListener('click', function () {
        navigation.classList.toggle('is-pinned');
        if (navigation.classList.contains('is-pinned')) {
          menuPin.querySelector('i').classList.remove('p-icon--pin');
        } else {
          menuPin.querySelector('i').classList.add('p-icon--pin');
        }
        const activeEl = document.activeElement as HTMLElement;
        activeEl.blur();
      });
    }

    if (asidePin) {
      asidePin.addEventListener('click', function () {
        aside.classList.toggle('is-pinned');
        if (aside.classList.contains('is-pinned')) {
          asidePin.innerText = 'Unpin';
        } else {
          asidePin.innerText = 'Pin';
        }
      });
    }
  }
  /**
   * setup the application layout on the current page
   */
  public static setup() {
    return new ApplicationLayout();
  }
}
