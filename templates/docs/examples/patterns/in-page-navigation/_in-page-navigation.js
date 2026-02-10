/**
 * Init:
 *  - Generates in page navigation if scope is set to "full-page".
 *  - Initializes navigation interactions.
 */
document.addEventListener('DOMContentLoaded', () => {
  const documentBody = document.querySelector('body');
  const navRoots = documentBody.querySelectorAll('.p-in-page-navigation');
  navRoots.forEach((navRoot) => {
    buildInPageNavigation(navRoot);
    initNavigationInteraction(navRoot);
  });
});

/**
 * Build the navigation list from page headings.
 * @param {HTMLElement} navRoot - The .p-in-page-navigation element
 */
function buildInPageNavigation(navRoot) {
  if (!navRoot) {
    return;
  }

  // If not full-page, assume manual navigation structure
  const scope = navRoot.dataset.inPageNavigationScope;
  if (scope !== 'full-page') {
    return;
  }

  const selectors = generateSelectors(navRoot);
  const headings = getHeadings(navRoot);
  if (!headings.length) {
    return;
  }

  const navList = navRoot.querySelector('.js-in-page-nav-list');
  const itemTemplate = document.querySelector('.js-in-page-nav-template-item');
  const sublistTemplate = document.querySelector('.js-in-page-nav-template-sublist');
  let currentPrimaryItem = null;
  let currentNestedList = null;
  let isFirst = true;

  headings.forEach((heading) => {
    const id = generateHeadingId(heading);
    const text = heading.textContent.trim().replace(/\s+/g, ' '); // Remove whitespace
    const tooltipId = `${id}-tooltip`;
    const isPrimaryList = heading.matches(selectors.primarySelector);
    const itemClone = itemTemplate.content.cloneNode(true);
    const li = itemClone.querySelector('li');
    const link = itemClone.querySelector('a');
    const tooltipWrapper = itemClone.querySelector('.p-tooltip--right');
    const tooltipMessage = itemClone.querySelector('.p-tooltip__message');

    link.href = `#${id}`;
    link.textContent = text;
    tooltipWrapper.setAttribute('aria-describedby', tooltipId);
    tooltipMessage.id = tooltipId;
    tooltipMessage.textContent = text;

    if (isFirst) {
      link.classList.add('is-active');
      isFirst = false;
    }

    if (isPrimaryList) {
      // Append to main list
      navList.appendChild(li);
      currentPrimaryItem = li;
      currentNestedList = null;
    } else if (selectors.secondarySelector && currentPrimaryItem) {
      // Append to sublist under current primary list
      if (!currentNestedList) {
        const nestedLististClone = sublistTemplate.content.cloneNode(true);
        currentNestedList = nestedLististClone.querySelector('ul');
        currentPrimaryItem.appendChild(currentNestedList);
      }
      if (currentNestedList) {
        currentNestedList.appendChild(li);
      }
    } else {
      navList.appendChild(li);
    }
  });
}

/**
 * Initializes navigation interactions:
 *  - Dropdown toggle for mobile view
 *  - Intersection observer to highlight active section in navigation
 * @param {HTMLElement} navRoot - The .p-in-page-navigation element
 */
function initNavigationInteraction(navRoot) {
  const toggle = navRoot.querySelector('.p-in-page-navigation__dropdown-toggle');
  const navList = navRoot.querySelector('.js-in-page-nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.p-icon--chevron-down').classList.remove('u-hide');
        toggle.querySelector('.p-icon--chevron-up').classList.add('u-hide');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        navList.setAttribute('aria-expanded', 'true');
        toggle.querySelector('.p-icon--chevron-down').classList.add('u-hide');
        toggle.querySelector('.p-icon--chevron-up').classList.remove('u-hide');
      }
    });
  }

  const headings = getHeadings(navRoot);
  const navigationLinks = getNavigationLinks(navRoot);

  /**
   * Updates the active navigation link based on the given heading ID.
   * Also scrolls the active link into view if it's in horizontal layout.
   * @param {string} headingId - The ID of the currently active heading.
   */
  function updateActiveLink(headingId) {
    const targetLink = navRoot.querySelector(`a[href='#${headingId}']`);
    // Ignore links that are hidden in horizontal layout
    const parentList = targetLink ? targetLink.closest('.p-in-page-navigation__list') : null;

    if (!targetLink || !parentList || window.getComputedStyle(parentList, null).display === 'none') {
      return;
    }

    navigationLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${headingId}`) {
        link.classList.add('is-active');
        scrollActiveNavItemIntoView(link);
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  const observer = new IntersectionObserver(
    function (entries) {
      if (navItemClicked) {
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.5,
    },
  );

  headings.forEach((heading) => observer.observe(heading));

  // Handle navigation link clicks
  let navItemClicked = false;
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navItemClicked = true;

      // Handle active state
      navigationLinks.forEach(function (navLink) {
        navLink.classList.remove('is-active');
      });
      link.classList.add('is-active');

      // Handle smooth scroll
      const targetId = link.getAttribute('href');
      const targetHeading = document.querySelector(targetId);
      if (targetHeading) {
        targetHeading.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, targetId);
      }
      // We use a timeout to prevent the IntersectionObserver from immediately
      // overiding the active state. As the IntersectionObserver points at the
      // center of the screen
      setTimeout(() => {navItemClicked = false;}, 1000);
    });
  });

  // Show tooltip for truncated links
  navigationLinks.forEach(function (link) {
    if (isLineClamped(link)) {
      const linkContainer = link.parentNode;
      const tooltip = linkContainer.querySelector('.p-tooltip__message');
      tooltip.classList.remove('u-hide');
    }
  });
}

// Helper functions

/**
 * Returns headings to be included in navigation.
 * @param {HTMLElement} navRoot
 * @returns {NodeList} List of heading elements matching the defined selectors
 */
function getHeadings(navRoot) {
  const selectors = generateSelectors(navRoot);
  const headings = Array.from(document.querySelectorAll(selectors.query));
  const excludes = getHeadingExcludes(navRoot, headings);
  return headings.filter((heading) => !excludes.includes(heading));
}

/**
 * Parse exclusion rules and return a list of excluded heading elements.
 * Supports two formats:
 *   - CSS selector (e.g. "#some-id", ".some-class")
 *   - Text match (e.g. "text:Newsletter signup") - case-insensitive
 * @param {HTMLElement} navRoot
 * @param {NodeList} headings - all headings being considered
 * @returns {HTMLElement[]} List of heading elements to exclude
 */
function getHeadingExcludes(navRoot, headings) {
  const excludeAttr = navRoot.dataset.inPageNavigationExcludes;
  if (!excludeAttr) {
    return [];
  }

  const excludeRules = excludeAttr
    .trim()
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const excludeList = [];

  excludeRules.forEach((rule) => {
    if (rule.toLowerCase().startsWith('text:')) {
      // Text-based exclusion
      const textToMatch = rule.split('text:')[1].trim().toLowerCase();
      headings.forEach((heading) => {
        if (heading.textContent.trim().toLowerCase() === textToMatch) {
          excludeList.push(heading);
        }
      });
    } else {
      // CSS selector exclusion
      try {
        const matched = document.querySelector(rule);
        if (matched) {
          excludeList.push(matched);
        }
      } catch (e) {
        console.warn(`In page navigation: Invalid exclude selector "${rule}"`);
      }
    }
  });
  return excludeList;
}

/**
 * Generate CSS selectors for heading retrieval based.
 * @param {HTMLElement} navRoot
 * @returns {Object} An object containing primarySelector, secondarySelector, and a query string
 */
function generateSelectors(navRoot) {
  const primarySelector = navRoot.dataset.inPageNavigationPrimary;
  const secondarySelector = navRoot.dataset.inPageNavigationSecondary ?? null;
  const query = secondarySelector ? `${primarySelector}, ${secondarySelector}` : primarySelector;
  return {primarySelector, secondarySelector, query};
}

/**
 * Checks for heading ID and generates on from text content if missing
 * @param {HTMLElement} heading
 * @returns {string} The heading ID
 */
function generateHeadingId(heading) {
  if (heading.id && !document.getElementById(heading.id)) {
    return heading.id;
  }

  let baseId = slugify(heading.textContent);
  let id = baseId;

  // Handle duplicate IDs
  let counter = 1;
  while (document.getElementById(id)) {
    appendix = counter == 1 ? '' : `-${counter}`;
    id = baseId + appendix;
    counter++;
  }

  heading.id = id;
  return id;
}

/**
 * Returns all navigation links within the given navigation root.
 * @param {HTMLElement} navRoot
 * @returns {NodeList} List of navigation link elements
 */
function getNavigationLinks(navRoot) {
  return navRoot.querySelectorAll('.p-in-page-navigation__link');
}

/**
 * Converts a string to a href friendly slug.
 * @param {string} text - The text content of the heading
 * @return {string} A slugified version of the text
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Checks if the content of an element is line-clamped.
 * @param {HTMLElement} element
 * @returns {boolean} True if the content is line-clamped, else false.
 */
function isLineClamped(element) {
  return element.scrollHeight > element.clientHeight;
}

/**
 * Scrolls the active navigation item into view in horizontal layout.
 * @param {HTMLElement} link - The active navigation link
 */
function scrollActiveNavItemIntoView(link) {
  const listItem = link.closest('.p-in-page-navigation__item');
  if (listItem) {
    listItem.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
}
