var fs = require('fs');
var parkerMetrics = require('parker/metrics/All');
var Parker = require('parker/lib/Parker');

var filepath = 'build/css/build.css';

function generateMetrics(file, metricsArray) {
  var data = fs.readFileSync(file).toString();
  var results = new Parker(metricsArray).run(data);

  return [
    {
      name: 'Stylesheet size',
      benchmark: 150000,
      threshold: 310000,
      result: results['total-stylesheet-size'],
    },
    {
      name: 'Top specificity',
      benchmark: 40,
      threshold: 61,
      result: results['top-selector-specificity'],
      selector: results['top-selector-specificity-selector'],
    },
    {
      name: 'Declarations per rule',
      benchmark: 2.5,
      threshold: 3,
      result: results['total-declarations'] / results['total-rules'],
    },
    {
      name: 'Selectors per rule',
      benchmark: 3,
      threshold: 3.5,
      result: results['selectors-per-rule'],
    },
    {
      name: 'Identifiers per selectors',
      benchmark: 1.75,
      threshold: 2.7,
      result: results['identifiers-per-selector'],
    },
    {
      name: 'Specificity per selector',
      benchmark: 15,
      threshold: 20,
      result: results['specificity-per-selector'],
    },
    {
      name: 'ID selectors',
      benchmark: 0,
      threshold: 0,
      result: results['total-id-selectors'],
    },
    {
      name: 'Total !important keywords',
      benchmark: 50,
      threshold: 150,
      result: results['total-important-keywords'],
    },
    {
      name: 'Total media queries',
      benchmark: 14,
      threshold: 50,
      result: results['total-media-queries'],
    },
  ];
}

module.exports.parkerTest = function () {
  var metrics = generateMetrics(filepath, parkerMetrics);
  var failedTest;

  metrics.forEach(function (metric) {
    var name = metric.name;
    var threshold = metric.threshold;
    var result = metric.result;

    if (threshold !== undefined && result > threshold) {
      console.log('\x1b[31m%s\x1b[0m', '\u2718 - ' + name + ' (' + result + ') exceeds threshold (' + threshold + ')');
      failedTest = true;
    }
  });

  if (failedTest) process.exit(1);
};
