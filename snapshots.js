const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8101;
const DOCS_URL = `http://localhost:${PORT}/docs/examples/`;

async function getExampleFiles() {
  // get all example files from templates folder
  let files = await fs.promises.readdir(path.join(process.cwd(), 'templates/docs/examples'), {recursive: true});

  // filter only HTML example files in subfolders that are not partials
  files = files.filter((file) => path.dirname(file) !== '.' && file.endsWith('.html') && !path.basename(file).startsWith('_'));

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

async function getPercyConfigURLs() {
  let links = getExampleUrls(await getExampleFiles());
  let urls = [];

  for (var i = 0; i < links.length; i++) {
    const url = links[i];

    const path = new URL(url).pathname.replace(/\/?$/, '/');
    const isResponsive = path.indexOf('responsive') >= 0;

    urls.push({
      url: url,
      name: path,
      widths: isResponsive ? [375, 800, 1280] : [375, 1280],
    });
  }

  return urls;
}

module.exports = async () => {
  return await getPercyConfigURLs();
};
