const COLOR_THEME_QUERY_PARAM_NAME = 'theme';
const COLOR_THEMES_SUPPORTED_QUERY_PARAM_NAME = 'available_themes';
var availableThemes = [];
var activeTheme;

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

  /**
   * Gets the current query parameters
   * @returns {URLSearchParams}
   */
  function getQueryParameters() {
    return new URLSearchParams(window.location.search);
  }

  /**
   * Sets the query parameter value of `key` to `value`
   * @param {String} key
   * @param {String} value
   * @param {Boolean} reload Whether to cause a page load after updating the query parameter
   * @returns {URLSearchParams} Query parameters after update
   */
  function setQueryParameter(key, value, reload = false) {
    var currentQueryParams = getQueryParameters();

    if (reload && currentQueryParams.get(key) !== value) {
      currentQueryParams.set(key, value);
      window.location.search = currentQueryParams.toString();
    } else {
      var url = new URL(window.location.href);
      url.searchParams.set(key, value);
      if (window.location.href !== url.toString()) {
        window.history.replaceState(null, null, url.toString());
      }
    }
    return getQueryParameters();
  }

  /**
   * Converts a theme name to its document class name, used for applying that color theme to the body
   * @param {String} themeName
   * @returns {string}
   */
  function convertThemeNameToClassName(themeName) {
    return `is-${themeName.toLowerCase()}`;
  }

  /**
   * Converts a theme name to its JS toggler class name, used for targeting it with JS events
   * @param {String} themeName
   * @returns {string}
   */
  function convertThemeNameToJsTogglerClassName(themeName) {
    return `js-${themeName.toLowerCase()}-theme-toggle`;
  }

  /**
   * Converts a theme name to its toggler utility class name, used for applying style to the toggler button
   * @param {String} themeName
   * @returns {string}
   */
  function convertThemeNameToTogglerUtilityClassName(themeName) {
    return `u-theme-toggle__${themeName.toLowerCase()}`;
  }

  /**
   * Sets a color theme as active; removes all other color themes from active status
   * @param {String} themeToSelect
   */
  function selectColorTheme(themeToSelect) {
    // Apply the color theme to the document body
    document.body.classList.add(convertThemeNameToClassName(themeToSelect));

    // Update address bar to reflect the newly selected color theme
    setQueryParameter(COLOR_THEME_QUERY_PARAM_NAME, themeToSelect.toLowerCase());

    // Update theme selector button states to reflect which one is currently active
    var themeButtonToSelect = document.querySelector(`.${convertThemeNameToJsTogglerClassName(themeToSelect)}`);
    themeButtonToSelect?.setAttribute('aria-selected', 'true');

    if (activeTheme) {
      var themeButtonCurrentlySelected = document.querySelector(`.${convertThemeNameToJsTogglerClassName(activeTheme)}`);
      themeButtonCurrentlySelected?.setAttribute('aria-selected', 'false');

      // Remove the old color theme from the document body
      if (themeToSelect !== activeTheme) document.body.classList.remove(convertThemeNameToClassName(activeTheme));
    }

    activeTheme = themeToSelect;
  }

  if (!inIframe()) {
    document.documentElement.classList.add('u-baseline-grid');

    document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var controls = document.createElement('div');
      controls.classList.add('u-example-controls', 'p-form', 'p-form--inline');
      var queryParameters = getQueryParameters();

      availableThemes = queryParameters.get(COLOR_THEMES_SUPPORTED_QUERY_PARAM_NAME)?.split(',');
      var requestedTheme = queryParameters.get(COLOR_THEME_QUERY_PARAM_NAME) || availableThemes[0] || 'light';

      selectColorTheme(requestedTheme);
      if (availableThemes?.length > 1) {
        var themeSwitcherControls = availableThemes.map(
          (themeLabel) =>
            `<button class="p-segmented-control__button u-theme-toggle__button is-dense ${convertThemeNameToTogglerUtilityClassName(themeLabel)} ${convertThemeNameToJsTogglerClassName(themeLabel)}" role="button" aria-selected="${activeTheme === themeLabel.toLowerCase()}" id="theme-selector-${themeLabel.toLowerCase()}" data-color-theme-name="${themeLabel.toLowerCase()}">${themeLabel}</button>`,
        );
        var themeSwitcherSegmentedControl = fragmentFromString(
          `<div class="p-segmented-control u-theme-toggle"><div class="p-segmented-control__list" role="list">${themeSwitcherControls.join('')}</div></div>`,
        );

        controls.appendChild(themeSwitcherSegmentedControl);
      }
      var baselineGridControl = fragmentFromString(
        '<div class="u-baseline-grid__toggle"><label class="p-switch"><input type="checkbox" class="p-switch__input js-baseline-toggle" /><span class="p-switch__slider"></span><span class="p-switch__label">Toggle baseline grid</span></label></div>',
      );
      controls.appendChild(baselineGridControl);

      body.appendChild(controls);

      // Below code relies on the controls already existing in the DOM, so must come after `body.appendChild`.
      var themeToggleButtons = document.querySelectorAll('.u-theme-toggle__button');
      themeToggleButtons.forEach((themeToggleButton) => {
        themeToggleButton.addEventListener('click', () => {
          selectColorTheme(themeToggleButton.getAttribute('data-color-theme-name'));
        });
      });

      var toggle = document.querySelector('.js-baseline-toggle');
      toggle.addEventListener('click', function (event) {
        body.classList.toggle('u-baseline-grid');
      });
    });
  }
})();
