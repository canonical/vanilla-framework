<div class="u-baseline-grid" id="baseline">
  <h1>Heading one</h1>
  <h2>Heading two</h2>
  <h3>Heading three</h3>
  <h4>Heading four</h4>
  <h5>Heading five</h5>
  <h6>Heading six</h6>
  <label>
    <input type="checkbox" class="p-switch" checked aria-controls="baseline" />
    <div class="p-switch__slider"></div>
  </label>
</div>
<script>
/**
  Attaches event listener to switch baseline grid visibility on click.
  @param {HTMLElement} toggle Switch element to toggle baseline grid.
*/
function setupBaselineGridSwitch(toggle) {
  var target = toggle.getAttribute('aria-controls');
  if (target) {
    target = document.getElementById(target);
  }
  if (target) {
    toggle.addEventListener('click', function () {
      target.classList.toggle('u-baseline-grid');
    });
  }
}
// Set up switch element on page
var toggle = document.querySelector('.p-switch[aria-controls]');
if (toggle) {
  setupBaselineGridSwitch(toggle);
}
</script>
