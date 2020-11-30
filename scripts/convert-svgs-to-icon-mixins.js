const fs = require('fs');
const path = require('path');
const mime = require('mime');
const SVGO = require('svgo');

const args = process.argv;
const directory = args[2];
const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
const svgo = new SVGO();

function encodeSVG(data) {
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/"/g, "'");

  data = data.replace(symbols, encodeURIComponent);

  // Replace any fill color values with a Vanilla function that
  // converts a SCSS color variable to a URL friendly value.
  data = data.replace(/fill='%23(.*)' /g, "fill='#{vf-url-friendly-color($color)}' ");

  return data;
}

function convertSVGs(directory, files) {
  files.forEach((file) => {
    const filePath = `${directory}${file}`;
    const fileType = mime.getType(filePath);
    const isSVG = fileType === 'image/svg+xml';

    if (isSVG) {
      fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
          throw err;
        }

        svgo.optimize(data, {path: filePath}).then(function (result) {
          console.log(`@mixin vf-icon-${path.parse(file).name}($color) {`);
          console.log(`background-image: url("data:image/svg+xml,${encodeSVG(result.data)}");`);
          console.log('}');
        });
      });
    }
  });
}

if (directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      throw err;
    }

    convertSVGs(directory, files);
  });
} else {
  throw `missing directory argument`;
}
