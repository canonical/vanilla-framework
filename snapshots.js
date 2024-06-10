const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8101;
const DOCS_URL = `http://localhost:${PORT}/docs/examples/`;

async function getExampleFiles() {
  // get all example files from templates folder
  let files = await fs.promises.readdir(path.join(process.cwd(), 'templates/docs/examples'), {recursive: true});

  // filter only HTML example files in subfolders that are not partials
  files = Array.from(
    new Set(
      files
        .filter((file) => path.dirname(file) !== '.' && file.endsWith('.html') && !path.basename(file).startsWith('_'))
        .map((file) => {
          // Replace files that have a `combined.html` sibling file with the combined file
          // Deduping necessary to avoid including `combined.html` multiple times
          const fileDir = path.dirname(file);
          const combinedFilePathRelative = path.join(fileDir, 'combined.html');
          const combinedFilePathAbsolute = path.join(process.cwd(), `templates/docs/examples/${combinedFilePathRelative}`);
          const combinedFileExists = fs.existsSync(combinedFilePathAbsolute);
          if (!combinedFileExists) return file;
          return combinedFilePathRelative;
        }),
    ),
  );

  return files;
}

function getExampleUrls(files) {
  // add standalone versions of the examples in base and patterns folders
  const standaloneFiles = files.filter((file) => file.startsWith('base/') || file.startsWith('patterns/')).map((file) => path.join('standalone', file));

  files = files.concat(standaloneFiles);

  // map the file paths to URLs
  return files.map((file) => {
    file = file.replace('.html', '');
    return DOCS_URL + file;
  });
}

function getThemesForExample(url) {
  return ['light', 'dark', 'paper'];
}

function getWidthsForExample(url) {
  const isResponsive = url.indexOf('responsive') >= 0;
  return isResponsive ? [375, 800, 1280] : [375, 1280];
}

async function getPercyConfigURLs() {
  let links = getExampleUrls(await getExampleFiles());
  let urls = [];
  let numSnapshots = 0;

  links.forEach((url) => {
    const path = new URL(url).pathname.replace(/\/?$/, '/');

    const widths = getWidthsForExample(path);
    const themes = getThemesForExample(path);

    themes.forEach((theme) => {
      numSnapshots += widths.length;

      urls.push({
        url: `${url}?theme=${theme}`,
        name: path,
        widths,
      });
    });
  });

  console.log('Total snapshots: ' + numSnapshots);

  fs.writeFileSync(
    'percy_snapshots_report.json',
    JSON.stringify(
      {
        numSnapshots,
        urls,
      },
      null,
      2,
    ),
  );

  return urls;
}

module.exports = async () => {
  return await getPercyConfigURLs();
};
