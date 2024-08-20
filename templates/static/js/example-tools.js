const SUPPORTED_THEMES = ['light', 'dark', 'paper'];
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
    } else {
      var url = new URL(window.location.href);
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
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
    return `is-${themeName}`;
  }

  /**
   * Converts a theme name to its JS toggler identifier name, used for targeting it with JS events
   * @param {String} themeName
   * @returns {string}
   */
  function convertThemeNameToButtonIdentifier(themeName) {
    return `js-${themeName}-theme-toggle`;
  }

  /**
   * Converts a string to titlecase (first letter capitalized & subsequent letters lowercase)
   * @param {String} str
   * @returns {string}
   */
  function titleCase(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
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
    var themeButtonToSelect = document.getElementById(convertThemeNameToButtonIdentifier(themeToSelect));
    themeButtonToSelect?.setAttribute('aria-selected', 'true');
    if (activeTheme) {
      var themeButtonToDeselect = document.getElementById(convertThemeNameToButtonIdentifier(activeTheme));
      themeButtonToDeselect?.setAttribute('aria-selected', 'false');
    }

    activeTheme = themeToSelect;
  }

  if (!inIframe()) {
    document.documentElement.classList.add('u-baseline-grid');

    document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var controls = document.createElement('div');
      controls.classList.add('p-example-controls', 'p-form');
      var queryParameters = getQueryParameters();
      var requestedTheme = queryParameters.get(COLOR_THEME_QUERY_PARAM_NAME);
      if (SHOW_THEME_SWITCH) {
        // Some examples (i.e., button / dark) are pre-themed by their jinja template.
        // if this is the case we don't modify the body class (it's already set); we just mark that theme as active.
        var preExistingClassFromTemplate = SUPPORTED_THEMES.find((themeName) => body.classList.contains(convertThemeNameToClassName(themeName)));

        if (preExistingClassFromTemplate) {
          activeTheme = preExistingClassFromTemplate;
        } else if (!requestedTheme) {
          // No template-defined theme & no query-param-requested theme; fallback to default
          selectColorTheme(DEFAULT_COLOR_THEME);
        }

        if (requestedTheme) {
          if (SUPPORTED_THEMES.includes(requestedTheme)) {
            selectColorTheme(requestedTheme);
          } else {
            // Query param used to request a theme that is not supported
            selectColorTheme(DEFAULT_COLOR_THEME);
          }
        }

        if (SUPPORTED_THEMES?.length > 1) {
          var themeSwitcherControls = SUPPORTED_THEMES.map(
            (themeName) =>
              `<button id="${convertThemeNameToButtonIdentifier(themeName)}" class="p-segmented-control__button p-theme-toggle__button is-dense" role="button" aria-selected="${body.classList.contains(convertThemeNameToClassName(themeName))}" data-color-theme-name="${themeName}">${titleCase(themeName)}</button>`,
          );
          var themeSwitcherSegmentedControl = fragmentFromString(
            `<div class="p-segmented-control u-theme-toggle"><div class="p-segmented-control__list">${themeSwitcherControls.join('')}</div></div>`,
          );

          controls.appendChild(themeSwitcherSegmentedControl);
        }
      } else if (requestedTheme) {
        setQueryParameter(COLOR_THEME_QUERY_PARAM_NAME, null);
      }
      var baselineGridControl = fragmentFromString(
        '<div class="u-baseline-grid__toggle"><label class="p-switch"><input type="checkbox" class="p-switch__input js-baseline-toggle" /><span class="p-switch__slider"></span><span class="p-switch__label">Toggle baseline grid</span></label></div>',
      );
      controls.appendChild(baselineGridControl);

      const closeButtonFragment = fragmentFromString(`
        <button class="p-button is-dense p-example-controls__close-button" id="js-example-toolbar-close-button">
          Close
        </button>
      `);
      controls.appendChild(closeButtonFragment);
      body.appendChild(controls);

      var closeButton = document.getElementById('js-example-toolbar-close-button');
      closeButton.addEventListener('click', () => controls.remove());

      // Below code relies on the controls already existing in the DOM, so must come after `body.appendChild`.
      var themeToggleButtons = document.querySelectorAll('.p-theme-toggle__button');
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
