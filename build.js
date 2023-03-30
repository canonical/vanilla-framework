const {build} = require('esbuild');

const buildOptions = {
  bundle: true,
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  outdir: './build/js/out/',
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
};

const entryPoint = './templates/docs/examples/patterns/navigation/_script-sliding.js';

build({
  ...buildOptions,
  format: 'esm',
  entryPoints: [entryPoint],
  entryNames: 'sliding-navigation',
});

build({
  ...buildOptions,
  format: 'cjs',
  entryPoints: [entryPoint],
  entryNames: `sliding-navigation-cjs`,
});
