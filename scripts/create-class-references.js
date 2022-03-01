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

let classReferences = [];
patternFiles.forEach((fileName) => {
  try {
    const data = fs.readFileSync(`${scssFolder}/${fileName}`, 'utf8');
    const root = postcssScss.parse(data);
    const comment = findComment(root);

    if (!comment) throw new Error(`class-reference does not exist in ${fileName}`);

    const yamlText = comment.text.substring(comment.text.indexOf('\n') + 1);
    const yamlElement = yaml.parse(yamlText);
    classReferences.push(yamlElement);
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
  }
});

if (classReferences.length > 0) {
  const parsedYaml = yaml.stringify({
    'class-references': classReferences,
  });
  fs.writeFile('build/classreferences.yaml', parsedYaml, function (err) {
    if (err) throw err;
  });
}
