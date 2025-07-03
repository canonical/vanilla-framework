export function initAlertButton(buttonEl, alertText){
  buttonEl.addEventListener('click', () => {
    alert(alertText)
  })
};
