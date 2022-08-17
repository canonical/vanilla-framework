import {waitFor, screen} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import expandableDocsHTML from '../../templates/docs/examples/patterns/side-navigation/_expandable-docs.html';

function render(html, scriptUrl = '../../templates/docs/examples/patterns/side-navigation/_expand_script') {
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
  import(scriptUrl);
  return {container};
}

it('adds aria-expanded to list elements on load', async () => {
  const {container} = render(`
  <ul class="p-side-navigation__list">
    <li class="p-side-navigation__item">
      <a class="p-side-navigation__link is-expandable" href="#">Testing</a>
      <button class="p-side-navigation__expand" aria-label="show submenu for Testing"></button>
      <ul class="p-side-navigation__list" aria-label="testing submenu">
        <li class="p-side-navigation__item">
          <a class="p-side-navigation__link" href="#">Network testing</a>
        </li>
      </ul> 
      </li>
  </ul>`);
  await waitFor(() => expect(container.querySelectorAll('[aria-expanded="false"]')).toHaveLength(3));
  expect(screen.getByRole('link', {name: 'Testing'})).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('button', {name: 'show submenu for Testing'})).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('list', {name: 'testing submenu'})).toHaveAttribute('aria-expanded', 'false');
});

it('opens nested navigation on click', async () => {
  render(expandableDocsHTML);
  const button = screen.getByRole('button', {name: 'show submenu for Testing'});
  const item = button.closest('.p-side-navigation__item');
  const nestedList = item.querySelector('.p-side-navigation__list');
  expect(nestedList).toHaveAttribute('aria-expanded', 'false');
  userEvent.click(screen.getByRole('button', {name: 'show submenu for Testing'}));
  await waitFor(() => expect(nestedList).toHaveAttribute('aria-expanded', 'true'));
});
