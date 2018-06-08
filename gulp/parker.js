var fs = require('fs');
var gulp = require('gulp');
var metrics = require('parker/metrics/All');
var Parker = require('parker/lib/Parker');

var filepath = 'build/css/build.min.css';

function generateBenchmarks(file, metricsArray) {
  var data = fs.readFileSync(file).toString();
  var results = new Parker(metricsArray).run(data);

  return [
    {
      name: 'Stylesheet size',
      threshold: 175000,
      result: results['total-stylesheet-size'],
    }, {
      name: 'Top specificity',
      threshold: 50,
      result: results['top-selector-specificity'],
    }, {
      name: 'Top specificity selector',
      result: results['top-selector-specificity-selector'],
    }, {
      name: 'Declarations per rule',
      threshold: 3,
      result: results['total-declarations'] / results['total-rules'],
    }, {
      name: 'Selectors per rule',
      threshold: 3,
      result: results['selectors-per-rule'],
    }, {
      name: 'Identifiers per selectors',
      threshold: 2,
      result: results['identifiers-per-selector'],
    }, {
      name: 'Specificity per selector',
      threshold: 20,
      result: results['specificity-per-selector'],
    }, {
      name: 'ID selectors',
      threshold: 0,
      result: results['total-id-selectors'],
    }, {
      name: 'Total !important keywords',
      threshold: 100,
      result: results['total-important-keywords'],
    },
  ];
}

gulp.task('parker:test', function() {
  var benchmarks = generateBenchmarks(filepath, metrics);
  var failedTest;

  benchmarks.forEach(function(benchmark) {
    var name = benchmark.name;
    var result = benchmark.result;
    var threshold = benchmark.threshold;

    if (threshold !== undefined && result > threshold) {
      console.log(
        '\x1b[31m%s\x1b[0m',
        '\u2718 - ' + name + ' (' + result + ') exceeds threshold (' + threshold + ')'
      );
      failedTest = true;
    }
  });

  if (failedTest) throw ('Benchmark test failed');
});

gulp.task('parker:report', function() {
  var benchmarks = generateBenchmarks(filepath, metrics);

  benchmarks.forEach(function(benchmark) {
    console.log('\x1b[36m%s\x1b[0m', benchmark.name);
    console.log('Result: ' + benchmark.result);

    if (benchmark.threshold || benchmark.threshold === 0) {
      console.log('Threshold: ' + benchmark.threshold);
    }

    console.log('------------------------------');
  });
});
