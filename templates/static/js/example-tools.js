const SUPPORTED_THEMES = ['Light', 'Dark', 'Paper'];
const [DEFAULT_COLOR_THEME] = SUPPORTED_THEMES;
const COLOR_THEME_QUERY_PARAM_NAME = 'theme';
var activeTheme = DEFAULT_COLOR_THEME;

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
    }
    else {
      var url = new URL(window.location.href);
      url.searchParams.set(key, value);
      window.history.pushState(null, '', url.toString());
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
    return `u-theme-toggle__${themeName.toLowerCase()}`
  }

  /**
   * Sets a color theme as active; removes all other color themes from active status
   * @param {String} themeToSelect
   */
  function selectColorTheme(themeToSelect) {
    // Apply the color theme to the document body
    document.body.classList.add(convertThemeNameToClassName(themeToSelect));
    // Remove the old color theme from the document body
    if (themeToSelect !== activeTheme) document.body.classList.remove(convertThemeNameToClassName(activeTheme));

    // Update address bar to reflect the newly selected color theme
    setQueryParameter(COLOR_THEME_QUERY_PARAM_NAME, themeToSelect.toLowerCase());

    // Update theme selector button states to reflect which one is currently active
    var themeButtonToSelect = document.querySelector(`.${convertThemeNameToJsTogglerClassName(themeToSelect)}`);
    themeButtonToSelect?.setAttribute('aria-selected', "true");
    var themeButtonCurrentlySelected = document.querySelector(`.${convertThemeNameToJsTogglerClassName(activeTheme)}`);
    themeButtonCurrentlySelected?.setAttribute('aria-selected', 'false');

    activeTheme = themeToSelect;
  }

  if (!inIframe()) {
    document.documentElement.classList.add('u-baseline-grid');

    document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var requestedColorTheme = getQueryParameters().get(COLOR_THEME_QUERY_PARAM_NAME);

      // Validate requested color theme
      if (
        requestedColorTheme
        && SUPPORTED_THEMES.some(supportedTheme => supportedTheme.toLowerCase() === requestedColorTheme.toLowerCase())
      ) {
        selectColorTheme(requestedColorTheme);
      } else {
        selectColorTheme(DEFAULT_COLOR_THEME);
      }

      var themeSwitcherControls = SUPPORTED_THEMES.map(themeLabel => `<button class="p-segmented-control__button u-theme-toggle__button is-dense ${convertThemeNameToTogglerUtilityClassName(themeLabel)} ${convertThemeNameToJsTogglerClassName(themeLabel)}" role="button" aria-selected="${activeTheme === themeLabel.toLowerCase()}" id="theme-selector-${themeLabel.toLowerCase()}" data-color-theme-name="${themeLabel.toLowerCase()}">${themeLabel}</button>`);
      var themeSwitcherSegmentedControl = fragmentFromString(`<div class="p-segmented-control u-theme-toggle"><div class="p-segmented-control__list" role="list">${themeSwitcherControls.join('')}</div></div>`)
      var baselineGridControl = fragmentFromString('<div class="u-baseline-grid__toggle"><label class="p-switch"><input type="checkbox" class="p-switch__input js-baseline-toggle" /><span class="p-switch__slider"></span><span class="p-switch__label">Toggle baseline grid</span></label></div>')

      var controls = document.createElement('div');
      controls.classList.add('u-example-controls', 'p-form', 'p-form--inline');
      controls.appendChild(themeSwitcherSegmentedControl);
      controls.appendChild(baselineGridControl);
      body.appendChild(controls);

      var toggle = document.querySelector('.js-baseline-toggle');
      toggle.addEventListener('click', function (event) {
        body.classList.toggle('u-baseline-grid');
      });

      var themeToggleContainer = document.querySelector('.u-theme-toggle');

      if (!SHOW_THEME_SWITCH) {
        themeToggleContainer.classList.add('u-hide');
      }

      var themeToggleButtons = document.querySelectorAll('.u-theme-toggle__button');
      themeToggleButtons.forEach(themeToggleButton => {
        themeToggleButton.addEventListener('click', () => {
          selectColorTheme(themeToggleButton.getAttribute('data-color-theme-name'))
        })
      })
    });
  }
})();
