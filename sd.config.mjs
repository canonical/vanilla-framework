import StyleDictionary from 'style-dictionary';
// import {dirname} from 'path';
// import {fileURLToPath} from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Build started...');
console.log('\n==============================================');

// REGISTER THE CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  // this is a silly example, to show how you can apply transform to names
  name: 'name/squiggle',
  type: 'name',
  // notice: if you don't specify a filter, the transformation will be applied to all the tokens
  transform: function (token) {
    let theme = null;
    const jsonFilePath = token.filePath;
    const tokenPath = token.path;

    if (jsonFilePath.includes('light')) {
      theme = 'light';
    } else if (jsonFilePath.includes('dark')) {
      theme = 'dark';
    } else if (jsonFilePath.includes('paper')) {
      theme = 'paper';
    }

    // console.log(token);
    // console.log(theme);
    // console.log(tokenPath);

    if (theme) {
      tokenPath.splice(1, 0, theme);
    }

    console.log(tokenPath.join('-'));

    // $vf-color-light-link-default

    return tokenPath.join('-');
  },
});

// REGISTER THE CUSTOM TRANSFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

// StyleDictionary.registerTransformGroup({
//   name: 'custom/scss',
//   transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/rem', 'color/css', 'name/squiggle'],
// });

// List of scss transforms acquired from:
// https://github.com/amzn/style-dictionary/blob/main/lib/common/transformGroups.js
StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  // this is to show one possibility for adding a few transforms to a pre-defined group
  // (however, we suggest to use the previous approach, which is more explicit and clear)
  transforms: [
    'attribute/cti',
    'name/kebab',
    'time/seconds',
    'html/icon',
    'size/rem',
    'color/css',
    'asset/url',
    'fontFamily/css',
    'cubicBezier/css',
    'strokeStyle/css/shorthand',
    'border/css/shorthand',
    'typography/css/shorthand',
    'transition/css/shorthand',
    'shadow/css/shorthand',
    'name/squiggle',
  ],
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
// const styleDictionary = new StyleDictionary(__dirname + '/sd.config.json');

const modes = ['light', 'dark', 'paper'];

const styleDictionary = new StyleDictionary();

console.log(`☀️ Building light mode...`);

const extendedSd = await styleDictionary.extend({
  // include: [
  //   `tokens/**/!(*.${modes.join(`|*.`)}).json5`
  // ],

  source: [`tokens/color/dark/link.json`],

  platforms: {
    scss: {
      transformGroup: 'custom/scss',
      prefix: 'vf',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
});

// FINALLY, BUILD ALL THE PLATFORMS
await extendedSd.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
