function setTooltipPosition(tooltip, x, y) {
  // offset the tooltip so it
  // isn't obscured by the cursor
  var offset = 20;

  tooltip.style.left = x - offset + 'px';
  tooltip.style.top = y + offset + 'px';
}

function handleTooltipEvents(tooltip) {
  var trigger = document.querySelector('[aria-describedby="' + tooltip.getAttribute('id') + '"]');

  trigger.addEventListener('mouseenter', function (e) {
    // remove this class on mouseenter,
    // rather than unnecessarily on mousemove
    tooltip.classList.remove('u-hide');
    setTooltipPosition(tooltip, e.x, e.y);
  });

  trigger.addEventListener('mousemove', function (e) {
    setTooltipPosition(tooltip, e.x, e.y);
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
