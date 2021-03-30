function handleTooltipEvents(tooltip) {
  var trigger = document.querySelector('[aria-describedby="' + tooltip.getAttribute('id') + '"]');

  trigger.addEventListener('mouseenter', function () {
    // remove this class on mouseenter,
    // rather than unnecessarily on mousemove
    tooltip.classList.remove('u-hide');
  });

  trigger.addEventListener('mousemove', function (e) {
    // move with the cursor, but offset it
    // so it isn't obscured by the cursor
    var offset = 20;

    tooltip.style.top = e.y + offset + 'px';
    tooltip.style.left = e.x - offset + 'px';
  });

  trigger.addEventListener('mouseout', function () {
    tooltip.classList.add('u-hide');
  });
}

function initTooltips(selector) {
  var tooltips = [].slice.call(document.querySelectorAll(selector));

  tooltips.forEach(function (tooltip) {
    handleTooltipEvents(tooltip);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTooltips('.p-tooltip--detached');
});
