(function () {
  const button = document.querySelector(".p-button--positive");

  button.addEventListener('click', function () {
    const hideClass = "u-hide";
    const processingClass = "is-processing";
    const spinner = document.querySelector(".p-icon--spinner");
    const buttonLabel = document.getElementById("button-label");

    if (!spinner.classList.contains(hideClass)) {
      spinner.classList.add(hideClass);
      buttonLabel.classList.remove(hideClass);
      button.classList.remove(processingClass);
      button.disabled = false;
    } else { 
      const buttonRect = button.getBoundingClientRect();
      button.style.width = buttonRect.width + "px";
      button.style.height = buttonRect.height + "px";

      button.classList.add(processingClass);
      spinner.classList.remove(hideClass);
      buttonLabel.classList.add(hideClass);
      button.disabled = true;
    }
  });
})();
