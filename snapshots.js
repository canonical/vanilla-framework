const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8101;

/**
 * URL of the local server where the examples are hosted.
 * This URL is used to generate the snapshot URLs.
 */
const EXAMPLES_BASE_URL = `http://localhost:${PORT}/docs/examples/`;

/** Relative path to the examples directory from the project root. */
const EXAMPLES_RELATIVE_DIR = 'templates/docs/examples';

/**
 * Get the example files to snapshot from a directory.
 * @param dir {String} Directory path to get example files from.
 * @returns {Promise<String[]>} Array of example url paths, relative to site root
 */
async function getExampleFiles(dir = EXAMPLES_RELATIVE_DIR) {
  let files = [];
  let absDir = path.join(process.cwd(), dir);
  const entries = await fs.promises.readdir(absDir, {withFileTypes: true});

  for (let entry of entries) {
    const fullPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      if (fs.existsSync(`${fullPath}/combined.html`)) {
        // Combined HTML file found. Assume it combines all examples in the directory and subdirectories.
        files.push(path.join(dir, entry.name, 'combined.html'));
      } else {
        // Get examples from the subdirectory
        files.push(...(await getExampleFiles(path.join(dir, entry.name))));
      }
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('_')) {
      // Ignore partials & non-HTML files
      files.push(path.join(dir, entry.name));
    }
  }

  // Return the relative paths
  return files.map((file) => file.replace(`${EXAMPLES_RELATIVE_DIR}/`, ''));
}

/**
 * Converts example relative paths to example URLs
 * @param urlPaths {String[]} - Array of url paths, relative to the site root
 * @returns {String[]} Array of URLs to snapshot.
 */
function getExampleUrlsFromExamplePaths(urlPaths) {
  // add standalone versions of the examples in base and patterns folders
  const standaloneUrls = urlPaths.filter((file) => file.startsWith('base/') || file.startsWith('patterns/')).map((file) => path.join('standalone', file));

  urlPaths = urlPaths.concat(standaloneUrls);

  // map the file paths to URLs
  return urlPaths.map((url) => {
    url = url.replace('.html', '');
    return EXAMPLES_BASE_URL + url;
  });
}

/**
 * Given an example path, return the widths to snapshot.
 * @param urlPath {String} Relative url to the example, from the siteroot
 * @returns {Promise<Number[]>} Array of widths to snapshot, from smallest to largest.
 */
async function getWidthsForExample(urlPath) {
  let widths = new Set([
    375, // Mobile
    1280, // Desktop
  ]);

  /**
   * We need to make sure that combined examples that embed responsive examples are also responsive.
   * To do this, we need to get the widths of the sibling files in the parent directory.
   * We then accumulate the widths of the sibling files and add them to the current example.
   */
  if (urlPath.endsWith('combined/')) {
    /** Parent directory (remove combined/ path). We also remove 'standalone/' to ensure the directory is a file path. */
    let parentDirectory = path.join('templates', urlPath.replace(/(combined|standalone)\//g, ''));
    let siblingFiles = await getExampleFiles(parentDirectory);
    for (let siblingFile of siblingFiles) {
      let siblingWidths = await getWidthsForExample(siblingFile);
      siblingWidths.forEach((width) => widths.add(width));
    }
  }
  const isResponsive = urlPath.includes('responsive');

  if (isResponsive) {
    widths.add(800); // Tablet
  }

  // Sort the widths so that the snapshots are taken in order of increasing width
  return Array.from(widths).sort((a, b) => a - b);
}

/**
 * Retrieves list of URLs to take Percy snapshots against.
 * @returns {Promise<{url: String, name: String, widths: Number[]}[]>} Array of URLs to snapshot. Each URL should resolve to a reachable example page.
 * @see https://www.browserstack.com/docs/percy/take-percy-snapshots/snapshots-via-cli#advanced-options
 */
async function getPercyConfigURLs() {
  const links = getExampleUrlsFromExamplePaths(await getExampleFiles());
  let urls = [];

  for (let url of links) {
    const path = new URL(url).pathname.replace(/\/?$/, '/');
    const widths = await getWidthsForExample(path);
    // TODO this could be functionalized to get the proper themes for a given example.
    const themes = ['light', 'dark', 'paper'];

    // Take one snapshot per theme at the last breakpoint
    themes.forEach((theme) => {
      urls.push({
        url: `${url}?theme=${theme}`,
        name: `${path.slice(0, path.length - 1)}?theme=${theme}`,
        widths: [widths[widths.length - 1]],
      });
    });

    // Take one snapshot per breakpoint at default theme.
    // Ignore the last breakpoint as it has already been snapshotted while covering themes.
    urls.push({
      url,
      name: path,
      widths: widths.slice(0, widths.length - 1),
    });
  }

  return urls;
}

module.exports = async () => {
  return await getPercyConfigURLs();
};
