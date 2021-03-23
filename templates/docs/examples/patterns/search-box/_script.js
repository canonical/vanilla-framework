function initSearchResetButtons(selector) {
  var resetButtons = [].slice.call(document.querySelectorAll(selector));

  resetButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var input = button.parentNode.querySelector('input');

      input.focus();
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initSearchResetButtons('.p-search-box__reset');
});
