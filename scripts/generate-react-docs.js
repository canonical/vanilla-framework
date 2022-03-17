const docgen = require('react-docgen-typescript');

const options = {
  savePropValueAsString: true,
};

// Parse a file for docgen info
const doc = docgen.parse('node_modules/@canonical/react-components/dist/index', options);

console.log({doc});
