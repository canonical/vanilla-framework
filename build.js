const {build} = require('esbuild');
const fs = require('fs');
const path = require('path');
const patternsDir = 'templates/docs/examples/patterns';

const buildOptions = {
  bundle: true,
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  outdir: './build/js/out/',
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
};

// for every subdirectory in the examples/patterns directory if there is a _script.js file, build it
fs.readdirSync(patternsDir).forEach((dir) => {
  const scriptPath = path.join(patternsDir, dir, '_script.js');
  // test if the scriptPath exists
  fs.access(scriptPath, fs.constants.F_OK, (err) => {
    if (err) {
      return;
    } else {
      const dirName = path.basename(path.dirname(scriptPath));

      build({
        ...buildOptions,
        format: 'esm',
        entryPoints: [scriptPath],
        entryNames: dirName,
      });

      build({
        ...buildOptions,
        format: 'cjs',
        entryPoints: [scriptPath],
        entryNames: `${dirName}-cjs`,
      });
    }
  });
});
