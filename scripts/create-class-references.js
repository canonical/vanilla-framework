/*
Notes:

scss-comment-parser: https://github.com/SassDoc/scss-comment-parser
CDocParser: https://github.com/FWeinb/CDocParser

scss-comment parser can be used to parse out block or line comments
with custom annotations from SCSS.

Internally it uses CDocParser that extracts/parses comments and annotations
but is not aware of the context of the code itself.

If we want to have context of where the comment is in the code and read the
CSS selector for example we could use scss-comment-parser.

If we just want to parse annotations from the comment ignoring the code itself
we can use CDocParser directly.

Below is some hacking around with both.

Please note that docs in READMEs for both of the projects are quite limited
and hacking around and debugging is needed to fully understand the values
passed to functions and returned by them.
*/

const scssFolder = './scss';
const fs = require('fs');
const postcssScss = require('postcss-scss');
const yaml = require('yaml');

var CDocParser = require('cdocparser');
var extractor = new CDocParser.CommentExtractor(function () {
  return {
    type: 'any',
  };
});

// same format of annotations is used by both
const annotations = {
  // the _ and alias are required, even if they are empty
  _: {
    alias: {
      // element: 'element',
      // classname: 'classname',
    },
  },
  element: {
    // parse is mandatory function to read the annotation line
    // see: https://github.com/FWeinb/CDocParser#parse-method
    parse: function (annotationLine, info, id) {
      //console.log('element', annotationLine);
      return annotationLine;
    },
  },
  classname: {
    parse: function (annotationLine, info, id) {
      //console.log('classname', annotationLine);
      return annotationLine;
    },
  },
};

var parser = new CDocParser.CommentParser(annotations);

const ScssCommentParser = require('scss-comment-parser');
var scssparser = new ScssCommentParser(annotations);

const patternFiles = ['_patterns_side-navigation.scss'];
// fs.readdirSync(scssFolder).forEach((file) => {
//   const isPattern = file.match(/_patterns.*/, 'i');
//   if (isPattern) patternFiles.push(file);
// });

// function findComment(element) {
//   if (element.type === 'comment' && element.text.split('\n')[0] === '@classreference') return element;

//   if (!element || !element.nodes) return;

//   for (let node of element.nodes) {
//     const foundElement = findComment(node);
//     if (foundElement) return foundElement;
//   }
// }

let classReferences = {};
patternFiles.forEach((fileName) => {
  try {
    console.log(fileName);
    const data = fs.readFileSync(`${scssFolder}/${fileName}`, 'utf8');

    // with CDocParser you need to first extract comments data from code
    var comments = extractor.extract(data);
    console.log('COMMENTS:\n', comments);

    // parses reads the comments and parses the annotation values
    var parsedComments = parser.parse(comments);
    console.log('PARSED:\n', parsedComments);

    // BELOW is ScssParser implementation

    parsedComments = scssparser.parse(data);
    console.log('SCSS PARSED:\n', parsedComments);

    // BELOW IS OUR OWN YAML PARSING
    // const root = postcssScss.parse(data);
    // const comment = findComment(root);

    // if (!comment) throw new Error(`class-reference does not exist in ${fileName}`);

    // const yamlText = comment.text.substring(comment.text.indexOf('\n') + 1);
    // const yamlElement = yaml.parse(yamlText);
    // classReferences = Object.assign(classReferences, yamlElement);
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
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
