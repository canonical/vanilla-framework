const scssFolder = './scss';
const fs = require('fs');
const postcssScss = require('postcss-scss');
const yaml = require('yaml');

const patternFiles = [];
fs.readdirSync(scssFolder).forEach((file) => {
  const isPattern = file.match(/_patterns.*/, 'i');
  if (isPattern) patternFiles.push(file);
});

function findComment(element) {
  if (element.type === 'comment' && element.text.split('\n')[0] === '@classreference') return element;

  if (!element || !element.nodes) return;

  for (let node of element.nodes) {
    const foundElement = findComment(node);
    if (foundElement) return foundElement;
  }
}

let classReferences = {};
patternFiles.forEach((fileName) => {
  try {
    const data = fs.readFileSync(`${scssFolder}/${fileName}`, 'utf8');
    const root = postcssScss.parse(data);
    const comment = findComment(root);

    if (comment) {
      const yamlText = comment.text.substring(comment.text.indexOf('\n') + 1);
      const yamlElement = yaml.parse(yamlText);
      classReferences = Object.assign(classReferences, yamlElement);
      console.log(`✅ Class reference data parsed from ${fileName}.`);
    } else {
      console.log(`💤 Skipping ${fileName}, no class reference found.`);
    }
  } catch (error) {
    const errorMessage = error.message;
    console.error(`❌ Error parsing class reference in ${fileName}: ${error}`);
    throw error;
  }
});

if (Object.keys(classReferences).length > 0) {
  const parsedYaml = yaml.stringify({
    'class-references': classReferences,
  });
  fs.writeFile('build/classreferences.yaml', parsedYaml, function (err) {
    if (err) throw err;
  });
}
