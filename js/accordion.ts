import {Component} from './component';

const ACCORDION = 'p-accordion';
const ACCORDION_TAB = `${ACCORDION}__tab`;

export class Accordion extends Component {
  setup() {
    super.setup();
    this.closeAllPanels();
  }

  /**
   * @override
   */
  onClick(event: MouseEvent) {
    super.onClick(event);
    const multipleAccordionsOpen = this.element.getAttribute('data-multiple-expanded');
    const tab: HTMLElement = this.element.closest(`[class*="${ACCORDION_TAB}"]`);
    if (!tab) return;

    const isTabOpen = tab.getAttribute('aria-expanded') === 'true';
    if (!multipleAccordionsOpen) this.closeAllPanels();

    this.toggleExpanded(tab, !isTabOpen);
  }

  /**
   * Finds any open panels within the container and closes them
   */
  closeAllPanels() {
    const openPanels: HTMLElement[] = Array.from(this.element.querySelectorAll('[aria-expanded=true]'));
    openPanels.forEach((panel) => this.toggleExpanded(panel, false));
  }

  /**
  Toggles the necessary aria- attributes' values on the accordion panels
  and handles to show or hide them.
  @param tab The tab that acts as the handles.
  @param show Whether to show or hide the accordion panel.
  */
  toggleExpanded(tab: HTMLElement, show: boolean) {
    const target = document.getElementById(tab.getAttribute('aria-controls'));

    if (target) {
      tab.setAttribute('aria-expanded', String(show));
      target.setAttribute('aria-hidden', String(!show));
    }
  }

  /**
   * @override
   */
  static setupAll() {
    return Array.from(document.querySelectorAll<HTMLElement>(`.${ACCORDION}`)).map((el) => new Accordion(el));
  }
}
