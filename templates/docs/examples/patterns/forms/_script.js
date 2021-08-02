(function () {
  var passwordToggleButtons = Array.prototype.slice.call(document.querySelectorAll('.p-form-password-toggle__button'));

  passwordToggleButtons.forEach(function (passwordToggleButton) {
    var passwordToggleLabel = passwordToggleButton.querySelector('.p-form-password-toggle__label');

    var passwordField = document.getElementById(passwordToggleButton.getAttribute('aria-controls'));

    var passwordToggleIcon = passwordToggleButton.querySelector('i');

    passwordToggleButton.addEventListener('click', function () {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggleLabel.innerText = 'Hide';
        passwordToggleIcon.classList.add('p-icon--hide');
        passwordToggleIcon.classList.remove('p-icon--show');
      } else {
        passwordField.type = 'password';
        passwordToggleLabel.innerText = 'Show';
        passwordToggleIcon.classList.add('p-icon--show');
        passwordToggleIcon.classList.remove('p-icon--hide');
      }
    });
  });
})();
