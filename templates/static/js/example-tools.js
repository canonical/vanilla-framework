(function () {
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function fragmentFromString(htmlString) {
    var temp = document.createElement('template');
    temp.innerHTML = htmlString;
    return temp.content;
  }

  if (!inIframe()) {
    document.documentElement.classList.add('u-baseline-grid');

    document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var controls = fragmentFromString(
        '<div class="u-baseline-grid__toggle"><label class="p-switch"><input type="checkbox" class="p-switch__input js-baseline-toggle" /><span class="p-switch__slider"></span><span class="p-switch__label">Toggle baseline grid</span></label></div>',
      );
      var themes = fragmentFromString(
        '<div class="u-theme-toggle is-light"><button class="u-theme-toggle__button u-theme-toggle__dark js-dark-theme-toggle">Dark</button><button class="u-theme-toggle__button u-theme-toggle__light js-light-theme-toggle">Light</button><button class="u-theme-toggle__button u-theme-toggle__paper js-paper-theme-toggle">Paper</button></div>',
      );

      body.appendChild(themes);
      body.appendChild(controls);

      var toggle = document.querySelector('.js-baseline-toggle');
      toggle.addEventListener('click', function (event) {
        body.classList.toggle('u-baseline-grid');
      });

      var themeToggles = document.querySelector('.u-theme-toggle');

      if (!SHOW_THEME_SWITCH) {
        themeToggles.classList.add('u-hide');
      }

      var darkTheme = document.querySelector('.js-dark-theme-toggle');
      darkTheme.addEventListener('click', function (event) {
        body.classList.add('is-dark');
        body.classList.remove('is-paper');
        body.classList.remove('is-light');
      });

      var lightTheme = document.querySelector('.js-light-theme-toggle');
      lightTheme.addEventListener('click', function (event) {
        body.classList.add('is-light');
        body.classList.remove('is-dark');
        body.classList.remove('is-paper');
      });

      var paperTheme = document.querySelector('.js-paper-theme-toggle');
      paperTheme.addEventListener('click', function (event) {
        body.classList.add('is-paper');
        body.classList.remove('is-dark');
        body.classList.remove('is-light');
      });
    });
  }
})();
