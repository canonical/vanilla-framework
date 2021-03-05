/**
 * Sorts a table by the column specified.
 * @param {HTMLElement} header Sortable header element that was clicked.
 * @param {HTMLTableElement} table Table to sort.
 */
function sortTable(header, table) {
  var SORTABLE_STATES = {
    none: 0,
    ascending: -1,
    descending: 1,
    ORDER: ['none', 'ascending', 'descending'],
  };

  // Get index of column based on position of header cell in <thead>
  // We assume there is only one row in the table head.
  var col = [].slice.call(table.tHead.rows[0].cells).indexOf(header);

  // Based on the current aria-sort value, get the next state.
  var newOrder = SORTABLE_STATES.ORDER.indexOf(header.getAttribute('aria-sort')) + 1;
  newOrder = newOrder > SORTABLE_STATES.ORDER.length - 1 ? 0 : newOrder;
  newOrder = SORTABLE_STATES.ORDER[newOrder];

  // Reset all header sorts.
  var headerSorts = table.querySelectorAll('[aria-sort]');

  for (var i = 0, ii = headerSorts.length; i < ii; i += 1) {
    headerSorts[i].setAttribute('aria-sort', 'none');
  }

  // Set the new header sort.
  header.setAttribute('aria-sort', newOrder);

  // Get the direction of the sort and assume only one tbody.
  // For this example only assume one tbody.
  var direction = SORTABLE_STATES[newOrder];
  var body = table.tBodies[0];

  // Convert the HTML element list to an array.
  var newRows = [].slice.call(body.rows, 0);

  // If the direction is 0 - aria-sort="none".
  if (direction === 0) {
    // Reset to the default order.
    newRows.sort(function (a, b) {
      return a.getAttribute('data-index') - b.getAttribute('data-index');
    });
  } else {
    // Sort based on a cell contents
    newRows.sort(function (rowA, rowB) {
      // Trim the cell contents.
      var contentA = rowA.cells[col].textContent.trim();
      var contentB = rowB.cells[col].textContent.trim();

      // Based on the direction, do the sort.
      //
      // This example only sorts based on alphabetical order, to sort based on
      // number value a more specific implementation would be needed, to provide
      // number parsing and comparison function between text strings and numbers.
      return contentA < contentB ? direction : -direction;
    });
  }
  // Append each row into the table, replacing the current elements.
  for (i = 0, ii = body.rows.length; i < ii; i += 1) {
    body.appendChild(newRows[i]);
  }
}

function setupClickableHeader(table, header) {
  header.addEventListener('click', function () {
    sortTable(header, table);
  });
}

/**
 * Initializes a sortable table by assigning event listeners to sortable column headers.
 * @param {HTMLTableElement} table
 */
function setupSortableTable(table) {
  // For this example, assume only one tbody.
  var rows = table.tBodies[0].rows;
  // Set an index for the default order.
  for (var row = 0, totalRows = rows.length; row < totalRows; row += 1) {
    rows[row].setAttribute('data-index', row);
  }

  // Select sortable column headers.
  var clickableHeaders = table.querySelectorAll('th[aria-sort]');
  // Attach the click event for each header.
  for (var i = 0, ii = clickableHeaders.length; i < ii; i += 1) {
    setupClickableHeader(table, clickableHeaders[i]);
  }
}

// Make all tables on the page sortable.
var tables = document.querySelectorAll('table');

for (var i = 0, ii = tables.length; i < ii; i += 1) {
  setupSortableTable(tables[i]);
}
