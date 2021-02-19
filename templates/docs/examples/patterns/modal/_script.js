/**
  Toggles visibility of modal dialog.
  @param {HTMLElement} modal Modal dialog to show or hide.
*/
function toggleModal(modal) {
  if (modal && modal.classList.contains('p-modal')) {
    if (modal.style.display === 'none') {
      modal.style.display = 'flex';
      modal.focus();
    } else {
      modal.style.display = 'none';
    }
  }
}

// Add click handler for clicks on elements with aria-controls
document.addEventListener('click', function (event) {
  var targetControls = event.target.getAttribute('aria-controls');
  if (targetControls) {
    toggleModal(document.getElementById(targetControls));
  }
});
