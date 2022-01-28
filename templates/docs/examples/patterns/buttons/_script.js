(function () {
  const button = document.querySelector('.p-button--positive');
  const hideClass = 'u-hide';
  const processingClass = 'is-processing';
  const spinner = document.querySelector('.p-icon--spinner');
  const buttonLabel = document.getElementById('button-label');
  const buttonRect = button.getBoundingClientRect();

  button.addEventListener('click', function () {
    button.style.width = buttonRect.width + 'px';
    button.style.height = buttonRect.height + 'px';
    button.disabled = true;

    button.classList.add(processingClass);
    spinner.classList.remove(hideClass);
    buttonLabel.classList.add(hideClass);
  });
})();
