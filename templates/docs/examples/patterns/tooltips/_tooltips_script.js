function getTooltipPlacement(tooltip) {
  var placement = 'btm-left';

  tooltip.classList.forEach(function (className) {
    if (className.startsWith('p-tooltip--')) {
      placement = className.replace('p-tooltip--', '');
    }
  });

  return placement;
}

function setTooltipPosition(tooltip, cursorX, cursorY) {
  var placement = getTooltipPlacement(tooltip);

  // FOR VANILLA EXAMPLE ONLY:
  // this example only covers two tooltip positions

  // offset the tooltip x and y position
  // so it isn't obscured by the cursor
  switch (placement) {
    case 'btm-center':
      tooltipX = cursorX + 8;
      tooltipY = cursorY + 20;
      break;
    default:
      tooltipX = cursorX - 12;
      tooltipY = cursorY + 20;
      break;
  }

  tooltip.style.left = tooltipX + 'px';
  tooltip.style.top = tooltipY + 'px';
}

function handleTooltipEvents(tooltip, trigger) {
  trigger.addEventListener('mouseenter', function (e) {
    // remove this class on mouseenter,
    // rather than unnecessarily on mousemove
    tooltip.classList.remove('u-hide');
    setTooltipPosition(tooltip, e.x, e.y);
  });

  trigger.addEventListener('mousemove', function (e) {
    setTooltipPosition(tooltip, e.x, e.y);
  });

  trigger.addEventListener('mouseout', function (e) {
    if (e.target.parentNode !== trigger) {
      tooltip.classList.add('u-hide');
    }
  });
}

function initTooltips(selector) {
  var tooltipContainers = [].slice.call(document.querySelectorAll(selector));

  tooltipContainers.forEach(function (container) {
    var trigger = document.querySelector("[aria-describedby='" + container.getAttribute('id') + "']");
    handleTooltipEvents(container, trigger);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTooltips('.is-detached');
});
