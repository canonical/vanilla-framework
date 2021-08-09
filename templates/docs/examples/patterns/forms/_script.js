(function () {
  var passwordToggleForms = Array.prototype.slice.call(document.querySelectorAll('.p-form-password-toggle'));

  passwordToggleForms.forEach(function (passwordToggleForm) {
    var passwordToggleButton = passwordToggleForm.querySelector('.p-button--base');
    var passwordToggleLabel = passwordToggleButton.querySelector('span');

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
