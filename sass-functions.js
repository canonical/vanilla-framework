var sass = require('node-sass');
var version = require('./package.json').version;

module.exports = {
  'vanilla-version': function () {
    return sass.types.String(version);
  },
};
