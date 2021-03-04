/**
  Sets up indeterminate checkboxes and attaches event handlers to it
  @param {String} checkboxSelector The CSS selector matching indeterminate checkboxes
  @param {String} triggerSelector The CSS selector matching the trigger element
*/
function initIndeterminateCheckboxes(checkboxSelector, triggerSelector) {
  var checkbox = document.querySelector(checkboxSelector);
  var trigger = document.querySelector(triggerSelector);

  // FOR EXAMPLE PURPOSES ONLY:
  // In this example, we want the indeterminate state to be visible to Percy,
  // which doesn't use JavaScript, so we hardcode the `aria-checked='mixed'`
  // attribute in HTML, and remove it when JavaScript _is_ available.
  checkbox.removeAttribute('aria-checked');

  // The example checkbox isn't controlling other checkboxes (as it would be in
  // a real world implementation), so we need a way to show each state here. When
  // the checkbox is clicked, it behaves as a normal checkbox would and shows as either
  // checked or unchecked, whilst clearing any indeterminate state.
  checkbox.addEventListener('change', function () {
    checkbox.indeterminate = false;
  });

  // We still want to allow people viewing the example to get back to the indeterminate
  // state, so provide a path to that via a button click.
  trigger.addEventListener('click', function () {
    checkbox.indeterminate = true;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initIndeterminateCheckboxes('.js-indeterminate-checkbox', '.js-indeterminate-trigger');
});
