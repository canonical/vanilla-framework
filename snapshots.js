const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8101;

async function getExampleFiles() {
  //
  let files = await fs.promises.readdir(path.join(process.cwd(), 'templates/docs/examples'), {recursive: true});

  files = files.filter((file) => path.dirname(file) !== '.' && file.endsWith('.html') && !path.basename(file).startsWith('_'));

  return files;
}

const DOCS_URL = `http://localhost:${PORT}/docs/examples/`;

function getExampleUrls(files) {
  return files.map((file) => {
    file = file.replace('.html', '');
    return DOCS_URL + file;
  });
}

async function run() {
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
  return await run();
};
