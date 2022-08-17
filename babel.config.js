module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  plugins: ['transform-html-import-to-string'],
};
