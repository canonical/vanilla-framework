import StyleDictionary from 'style-dictionary';

console.log('Style Dictionary build started...');
console.log('==============================================');

// This transform determines if the target token's file is within a theme
// directory, and if so, splices the theme name into the token name
StyleDictionary.registerTransform({
  name: 'name/theme',
  type: 'name',
  transform: (token) => {
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

    if (theme) {
      tokenPath.splice(1, 0, theme);
    }

    return tokenPath.join('-');
  },
});

// This transform adds a prefix to the beginning of each token name
StyleDictionary.registerTransform({
  name: 'name/prefix',
  type: 'name',
  transform: (token) => `vf-${token.name}`,
});

// List of scss transforms acquired from:
// https://github.com/amzn/style-dictionary/blob/main/lib/common/transformGroups.js
StyleDictionary.registerTransformGroup({
  name: 'vanilla/scss',
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
    'name/theme',
    'name/prefix',
  ],
});

const styleDictionary = new StyleDictionary();

console.log('🏠 Building base variables...');

const baseSd = await styleDictionary.extend({
  source: ['tokens/color/base.json', 'tokens/font/*.json'],
  platforms: {
    scss: {
      transformGroup: 'vanilla/scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: 'tokens.base.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
});

await baseSd.buildAllPlatforms();

console.log('🌞 Building light theme variables...');

const lightSd = await styleDictionary.extend({
  include: ['tokens/color/base.json'],
  source: ['tokens/color/light/*.json'],
  platforms: {
    scss: {
      transformGroup: 'vanilla/scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: 'tokens.light.scss',
          format: 'scss/variables',
          filter: (token) => token.path[1] === 'light',
        },
      ],
    },
  },
});

await lightSd.buildAllPlatforms();

console.log('🌚 Building dark theme variables...');

const darkSd = await styleDictionary.extend({
  include: ['tokens/color/base.json'],
  source: ['tokens/color/dark/*.json'],
  platforms: {
    scss: {
      transformGroup: 'vanilla/scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: 'tokens.dark.scss',
          format: 'scss/variables',
          filter: (token) => token.path[1] === 'dark',
        },
      ],
    },
  },
});

await darkSd.buildAllPlatforms();

console.log('==============================================');
console.log('Style Dictionary build completed!');
