function setTooltipPosition(trigger, container) {
  var triggerRect = trigger.getBoundingClientRect();

  // FOR VANILLA EXAMPLE ONLY:
  // this example only covers two tooltip positions
  if (container.classList.contains('p-tooltip--btm-center')) {
    tooltipX = triggerRect.x + triggerRect.width / 2;
  } else {
    tooltipX = triggerRect.x + 16;
  }

  container.style.left = tooltipX + 'px';
  container.style.top = triggerRect.y + triggerRect.height + 'px';
}

function handleTooltipEvents(target, tooltipContainers) {
  var trigger = document.querySelector("[aria-describedby='" + target.getAttribute('id') + "']");
  var timeout;
  var showEvents = ['mouseenter', 'focus'];
  var hideEvents = ['click', 'mouseout', 'blur'];

  showEvents.forEach(function (event) {
    trigger.addEventListener(event, function () {
      // wait 200ms before showing the tooltip,
      // so we know there is intent
      timeout = setTimeout(function () {
        // hide any tooltips that may still be visible
        tooltipContainers.forEach(function (container) {
          container.classList.add('u-hide');
        });

        target.classList.remove('u-hide');
        setTooltipPosition(trigger, target);
      }, 200);
    });
  });

  hideEvents.forEach(function (event) {
    trigger.addEventListener(event, function (e) {
      if (e.target.parentNode !== trigger) {
        clearTimeout(timeout);
        target.classList.add('u-hide');
      }
    });
  });
}

function initDetachedTooltips(selector) {
  var tooltipContainers = [].slice.call(document.querySelectorAll(selector));

  tooltipContainers.forEach(function (target) {
    handleTooltipEvents(target, tooltipContainers);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initDetachedTooltips('[class*="p-tooltip"].is-detached');
});
