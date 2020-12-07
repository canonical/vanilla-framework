const fs = require('fs');
const path = require('path');
const mime = require('mime');
const SVGO = require('svgo');

const args = process.argv;
const directory = args[2];
const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
const svgo = new SVGO();

function parseColorArguments(data) {
  const color_count = (data.match(/fill="#[^\s]+"/g) || []).length;
  let arguments = [];

  if (color_count == 1) {
    arguments.push('$color');
  } else {
    for (var i = 0; i < color_count; i++) {
      arguments.push(`$color${i + 1}`);
    }
  }

  return arguments;
}

function printBaseMixins(svgs) {
  console.log('// Base definition mixins:');
  console.log('//------------------------');

  svgs.forEach((svg) => {
    console.log(`@mixin vf-icon-${svg.name}(${svg.colors.join(', ')}) {`);
    console.log(` background-image: url("data:image/svg+xml,${encodeSVG(svg.svg, svg.colors)}");`);
    console.log('}');
    console.log('');
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
    console.log(`@mixin vf-p-icon-${svg.name} {`);
    console.log(` .p-icon--${svg.name} {`);
    console.log('   @extend %icon;');
    console.log(`   @include vf-icon-${svg.name}(${svg.colors.join(', ')});`);
    console.log('');
    console.log("   [class*='--dark'] &,");
    console.log('   &.is-light {');
    console.log(`     @include vf-icon-${svg.name}(${svg.colors.join(', ')});`);
    console.log('   }');
    console.log(' }');
    console.log('}');
    console.log('');
  });
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
  let svgPromises = [];
  let convertedSVGs = [];

  files.forEach((file) => {
    const filePath = `${directory}${file}`;
    const fileType = mime.getType(filePath);
    const isSVG = fileType === 'image/svg+xml';

    if (isSVG) {
      const data = fs.readFileSync(filePath, 'utf-8');

      svgPromises.push(svgo.optimize(data, {path: filePath}));
    }
  });

  // SVGO returns a promise, but we want to further process the data for
  // for each SVG when those promises have resolved, so we resolve them
  // all at once here, do what we need to to each of them, then print the mixins.
  Promise.all(svgPromises).then((optimisedSVGs) => {
    optimisedSVGs.forEach((optimisedSVG) => {
      const svg = optimisedSVG.data;
      const colorsArray = parseColorArguments(optimisedSVG.data);
      const iconName = path.parse(optimisedSVG.path).name.toLowerCase();

      convertedSVGs.push({
        svg: svg,
        colors: colorsArray,
        name: iconName,
      });
    });

    printBaseMixins(convertedSVGs);
    printPatternMixins(convertedSVGs);
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
