const { resolveBappoScripts, resolveBin } = require('../utils');

const bappoScripts = resolveBappoScripts();
const doctoc = resolveBin('doctoc');

module.exports = {
  'README.md': [`${doctoc} --maxlevel 3 --notitle`],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx|vue)': [
    `${bappoScripts} format`,
    `${bappoScripts} lint`,
    `${bappoScripts} test --findRelatedTests`,
  ],
};
