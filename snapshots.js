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
 * @returns {Promise<String[]>} Array of example file paths, relative to `EXAMPLES_RELATIVE_DIR`.
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
 * @param fileNames {String[]} - Array of file names (relative to `EXAMPLES_RELATIVE_DIR`) to generate URLs for.
 * @returns {String[]} Array of URLs to snapshot.
 */
function getExampleUrlsFromExamplePaths(fileNames) {
  // add standalone versions of the examples in base and patterns folders
  const standaloneFiles = fileNames.filter((file) => file.startsWith('base/') || file.startsWith('patterns/')).map((file) => path.join('standalone', file));

  fileNames = fileNames.concat(standaloneFiles);

  // map the file paths to URLs
  return fileNames.map((file) => {
    file = file.replace('.html', '');
    return EXAMPLES_BASE_URL + file;
  });
}

/**
 * Given an example path, returns the color themes to snapshot.
 * @param filepath {String} Path (relative to `EXAMPLES_RELATIVE_DIR`) of the example file.
 * @returns {String[]} Array of color theme names to snapshot.
 *  These must match color theme query parameter names accepted by example-tools.js.
 */
function getThemesForExample(filepath) {
  return ['light', 'dark', 'paper'];
}

/**
 * Given an example path, return the widths to snapshot.
 * @param filepath {String} Path (relative to `EXAMPLES_RELATIVE_DIR`) of the example file.
 * @returns {Promise<Number[]>} Array of widths to snapshot, from smallest to largest.
 */
async function getWidthsForExample(filepath) {
  let widths = new Set([
    375, // Mobile
    1280, // Desktop
  ]);

  if (filepath.endsWith('combined/')) {
    /** Parent directory (remove combined/ path). We also remove 'standalone/' to ensure the directory is a file path. */
    let parentDirectory = path.join('templates', filepath.replace(/(combined|standalone)\//g, ''));
    let siblingFiles = await getExampleFiles(parentDirectory);
    for (let siblingFile of siblingFiles) {
      let siblingWidths = await getWidthsForExample(siblingFile);
      siblingWidths.forEach((width) => widths.add(width));
    }
  }
  const isResponsive = filepath.includes('responsive');

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
  let files = await getExampleFiles();
  let links = getExampleUrlsFromExamplePaths(files);
  let urls = [];

  for (let url of links) {
    const path = new URL(url).pathname.replace(/\/?$/, '/');
    const widths = await getWidthsForExample(path);
    const themes = getThemesForExample(path);

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
