// query utilities:
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import sideNavigationExampleHTML from '../../templates/docs/examples/patterns/side-navigation/_expandable-docs.html';

function getExampleDOM() {
  const div = document.createElement('div');
  div.innerHTML = sideNavigationExampleHTML;
  return div;
}

test('examples of some things', async () => {
  const container = getExampleDOM();
  expect(container).toMatchSnapshot();

  //   // Get form elements by their label text.
  //   // An error will be thrown if one cannot be found (accessibility FTW!)
  //   const input = getByLabelText(container, 'Username');
  //   input.value = famousProgrammerInHistory;

  //   // Get elements by their text, just like a real user does.
  //   getByText(container, 'Print Username').click();

  //   await waitFor(() => expect(queryByTestId(container, 'printed-username')).toBeTruthy());

  //   // getByTestId and queryByTestId are an escape hatch to get elements
  //   // by a test id (could also attempt to get this element by its text)
  //   expect(getByTestId(container, 'printed-username')).toHaveTextContent(famousProgrammerInHistory);
  //   // jest snapshots work great with regular DOM nodes!
  expect(container).toMatchSnapshot();
});
