#!/usr/bin/env node

// Command-line arguments
var argv = require('minimist')(process.argv.slice(2));

var util = require('util');
var sourceFile = argv['source-file'] || null;
var sourceDirectory = argv['source-dir'] || 'scss';
var outputDirectory = argv['source-dir'] || 'tests/output';
var outputFile = argv['outputfile'] || null;
var parkerOptions = argv['parker-options'] || null;
var boilerplate = `
@import 'base';
@include vf-base;
`;

var fs = require('fs');
var sass = require('node-sass');
var Parker = require('parker/lib/Parker');
var metrics = require('parker/metrics/All'); // Or an array of the metrics you want to measure
var components = [];

if (sourceFile) {
  //TODO: add support for specifying a file
  console.log('Specifying individual files not yet supported.');
} else {
  // Load all sass file(s)
  fs.readdirSync(sourceDirectory).forEach((fileName) => {
    if (fileName.startsWith('_patterns')) {
      var renderedCss = '';
      var fileContents = fs.readFileSync(sourceDirectory + '/' + fileName, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        return data;
      });

      components[fileName] = [];
      components[fileName]['sass'] = boilerplate + fileContents;
      components[fileName]['css'] = sass
        .renderSync({
          data: components[fileName]['sass'],
          includePaths: ['scss/'],
        })
        .css.toString();
    }
  });
}

// run css through parker
var parker = new Parker(metrics);
for (fileName in components) {
  components[fileName]['report'] = parker.run(components[fileName]['css']);
  // Display sumamry / output to file
  console.log(fileName);
  console.log(components[fileName]['report']);
  if (fs.writeFileSync(outputDirectory + '/' + fileName + '.report.json', util.inspect(components[fileName]['report'], false, 2, false))) {
    console.log('Report saved to: ' + outputDirectory + fileName + '.report.json');
  } else {
    console.log('Unable to write file.');
  }
}
