/*
  To use the script put the icon SVG files into /icons folder in the project,
  and run `yarn icon-svgs-to-mixins`.
*/
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const {optimize} = require('svgo');

const args = process.argv;
const directory = args[2];
const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;

function parseColorArguments(data) {
  const colorCount = (data.match(/fill="#[^\s]+"/g) || []).length;
  let colorArgs = [];

  if (colorCount == 1) {
    colorArgs.push('$color');
  } else {
    for (var i = 0; i < colorCount; i++) {
      colorArgs.push(`$color${i + 1}`);
    }
  }

  return colorArgs;
}

function printBaseMixins(svgs) {
  console.log('// Base definition mixins:');
  console.log('//------------------------');

  svgs.forEach((svg) => {
    console.log(`
      // ${svg.name}
      @function vf-icon-${svg.name}-url($color) {
        @return url("data:image/svg+xml,${encodeSVG(svg.svg, svg.colors)}");
      }

      @mixin vf-icon-${svg.name}($color: $colors--light-theme--icon) {
        background-image: vf-icon-${svg.name}-url($color);
      }

      @mixin vf-icon-${svg.name}-themed {
        @include vf-themed-icon($light-value: vf-icon-${svg.name}-url($colors--light-theme--icon), $dark-value: vf-icon-${svg.name}-url($colors--dark-theme--icon));
      }
    `);
  });
}

function printPatternMixins(svgs) {
  console.log('// Pattern includes:');
  console.log('//------------------');

  svgs.forEach((svg) => {
    console.log(`@include vf-p-icon-${svg.name};`);
  });

  console.log('// Pattern mixins:');
  console.log('//----------------');

  svgs.forEach((svg) => {
    console.log(`
      @mixin vf-p-icon-${svg.name} {
        .p-icon--${svg.name} {
          @extend %icon;
          @include vf-icon-${svg.name}-themed;
        }
      }
    `);
  });

  console.log('// **Base and Pattern mixins accurate as of October 2024**');
}

function encodeSVG(data, colorVariables) {
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/"/g, "'");

  data = data.replace(symbols, encodeURIComponent);

  // Replace any fill color values with a Vanilla function that
  // converts a SCSS color variable to a URL friendly value.
  colorVariables.forEach((color) => {
    data = data.replace(/fill='%23[^\s]+'/, `fill='#{vf-url-friendly-color(${color})}' `);
  });
  return data;
}

function convertSVGs(directory, files) {
  let convertedSVGs = [];

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileType = mime.getType(filePath);
    const isSVG = fileType === 'image/svg+xml';

    if (isSVG) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const svg = optimize(data, {path: filePath});
      const colorsArray = parseColorArguments(svg.data);
      const iconName = path.parse(filePath).name.toLowerCase();

      convertedSVGs.push({
        svg: svg.data,
        colors: colorsArray,
        name: iconName,
      });
    }
  });

  printBaseMixins(convertedSVGs);
  printPatternMixins(convertedSVGs);
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
