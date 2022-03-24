/**
 * the base component
 */
export class Component<T extends Element = HTMLElement> {
  element: T;
  constructor(element: T) {
    this.element = element;
    this.setup();
  }

  protected setup() {
    if (!this.element) return;
    this.element.addEventListener('click', this.onClick.bind(this));
    this.element.addEventListener('change', this.onChange.bind(this));
  }

  /**
   * this is called when the `this.element` "click" event is triggered
   */
  protected onClick(_event: MouseEvent) {}

  /**
   * this is called when the `this.element` "change" event is triggered
   */
  protected onChange(_event: Event) {}

  /**
   * Look for all the component elements in the page and setup the JS for
   */
  public static setupAll() {}
}
