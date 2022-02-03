/**
 * This is an example implementation of how to keep the button width
 * while loading spinner icon is shown.
 *
 * This code is not meant for production use. In real cases you will need
 * to provide your proper click handlers and events to start/stop loading
 * animation.
 */
(function () {
  const button = document.querySelector('.js-processing-button');
  const hideClass = 'u-hide';
  const processingClass = 'is-processing';
  const spinner = button.querySelector('.p-icon--spinner');
  const buttonLabel = button.querySelector('#button-label');
  const buttonRect = button.getBoundingClientRect();

  button.addEventListener('click', function () {
    button.style.width = buttonRect.width + 'px';
    button.style.height = buttonRect.height + 'px';
    button.disabled = true;

    button.classList.add(processingClass);
    spinner.classList.remove(hideClass);
    buttonLabel.classList.add(hideClass);

    // timeout to remove the spinner from the button
    setTimeout(function () {
      button.style.width = null;
      button.style.height = null;
      button.disabled = false;

      button.classList.remove(processingClass);
      spinner.classList.add(hideClass);
      buttonLabel.classList.remove(hideClass);
    }, 3000);
  });
})();
