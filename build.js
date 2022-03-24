const {build} = require('esbuild');

const entryFiles = 'js/index.ts';

const buildOptions = {
  bundle: true,
  entryPoints: [entryFiles],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
};

build({
  ...buildOptions,
  format: 'esm',
  outfile: './build/js/index.esm.js',
});

build({
  ...buildOptions,
  format: 'cjs',
  outfile: './build/js/index.cjs.js',
});
