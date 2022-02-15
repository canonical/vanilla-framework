let esbuild = require('esbuild');
const path = require('path');

let entries = {
  liveDemoBox: './templates/static/js/src/demobox/app.tsx',
};

const isDev = process && process.env && process.env.NODE_ENV === 'development';

for (const [key, value] of Object.entries(entries)) {
  const options = {
    entryPoints: [value],
    bundle: true,
    minify: isDev ? false : true,
    nodePaths: [path.resolve(__dirname, './templates/static/js/src')],
    sourcemap: isDev ? false : true,
    outfile: 'templates/static/build/js/' + key + '.js',
    target: ['chrome90', 'firefox88', 'safari14', 'edge90'],
    define: {
      'process.env.NODE_ENV':
        // Explicitly check for 'development' so that this defaults to
        // 'production' in all other cases.
        isDev ? '"development"' : '"production"',
    },
  };

  esbuild
    .build(options)
    .then((result) => {
      console.log('Built ' + key + '.js');
    })
    // Fail the build if there are errors.
    .catch(() => process.exit(1));
}
