var fs = require('fs');
var gulp = require('gulp');
var parkerMetrics = require('parker/metrics/All');
var Parker = require('parker/lib/Parker');

var filepath = 'build/css/build.min.css';

function generateMetrics(file, metricsArray) {
  var data = fs.readFileSync(file).toString();
  var results = new Parker(metricsArray).run(data);

  return [
    {
      name: 'Stylesheet size',
      benchmark: 150000,
      threshold: 175000,
      result: results['total-stylesheet-size']
    },
    {
      name: 'Top specificity',
      benchmark: 40,
      threshold: 50,
      result: results['top-selector-specificity'],
      selector: results['top-selector-specificity-selector']
    },
    {
      name: 'Declarations per rule',
      benchmark: 2.5,
      threshold: 3,
      result: results['total-declarations'] / results['total-rules']
    },
    {
      name: 'Selectors per rule',
      benchmark: 2,
      threshold: 2.5,
      result: results['selectors-per-rule']
    },
    {
      name: 'Identifiers per selectors',
      benchmark: 1.75,
      threshold: 2.5,
      result: results['identifiers-per-selector']
    },
    {
      name: 'Specificity per selector',
      benchmark: 15,
      threshold: 20,
      result: results['specificity-per-selector']
    },
    {
      name: 'ID selectors',
      benchmark: 0,
      threshold: 0,
      result: results['total-id-selectors']
    },
    {
      name: 'Total !important keywords',
      benchmark: 50,
      threshold: 85,
      result: results['total-important-keywords']
    },
    {
      name: 'Total media queries',
      benchmark: 14,
      threshold: 23,
      result: results['total-media-queries']
    }
  ];
}

gulp.task('parker:test', function() {
  var metrics = generateMetrics(filepath, parkerMetrics);
  var failedTest;

  metrics.forEach(function(metric) {
    var name = metric.name;
    var threshold = metric.threshold;
    var result = metric.result;

    if (threshold !== undefined && result > threshold) {
      console.log('\x1b[31m%s\x1b[0m', '\u2718 - ' + name + ' (' + result + ') exceeds threshold (' + threshold + ')');
      failedTest = true;
    }
  });

  if (failedTest) throw 'Metrics test failed';
});

gulp.task('parker:report', function() {
  var metrics = generateMetrics(filepath, parkerMetrics);

  metrics.forEach(function(metric) {
    var name = metric.name;
    var benchmark = metric.benchmark;
    var threshold = metric.threshold;
    var selector = metric.selector;
    var result = metric.result;

    var resultColour = (function() {
      if (result > threshold) return '\x1b[31m%s\x1b[0m';
      if (result > benchmark) return '\x1b[33m%s\x1b[0m';
      return '\x1b[32m%s\x1b[0m';
    })();

    console.log('\x1b[36m%s\x1b[0m', name);
    console.log('Benchmark: ' + benchmark + '\nThreshold: ' + threshold);
    console.log(resultColour, 'Result: ' + result + (selector ? '\nSelector: ' + selector : ''));
    console.log('------------------------------');
  });
});
