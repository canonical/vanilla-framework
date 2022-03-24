import {Component} from './component';

const DROPDOWN_SELECTOR = '.p-code-snippet__dropdown';

export class CodeSnippet extends Component<HTMLSelectElement> {
  protected setup(): void {
    super.setup();
  }

  /**
   * Attaches change event listener to a given select.
   * @param event Select element belonging to a code snippet
   */
  protected onChange(event: Event): void {
    const target = document.getElementById((event.target as HTMLInputElement).value);
    this.toggleCode(target, this.element.options);
  }

  /**
   * Shows a given code snippet panel, and hides the rest.
   * @param target the element to show.
   * @param options collection of options whose values reference elements to be hidden.
   */
  toggleCode(target: HTMLElement, options: HTMLOptionsCollection) {
    for (let i = 0; i < options.length; i++) {
      const element = document.getElementById(options[i].value);
      element.classList.add('u-hide');
      element.setAttribute('aria-hidden', 'true');
    }

    target.classList.remove('u-hide');
    target.setAttribute('aria-hidden', 'false');
  }

  public static setupAll(selector: string = DROPDOWN_SELECTOR) {
    return Array.from(document.querySelectorAll<HTMLSelectElement>(selector)).map((el) => new CodeSnippet(el));
  }
}
