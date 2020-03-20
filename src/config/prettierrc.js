module.exports = {
  // This will be the default in Prettier 2
  // https://github.com/prettier/prettier/pull/7430
  arrowParens: 'always',
  // This will be the default in Prettier 2
  // https://github.com/prettier/prettier/pull/7435
  endOfLine: 'lf',
  // This is not the default but seems to be more popular in the community and
  // what we use in the bappo platform projects.
  singleQuote: true,
  // The default in Prettier 2 will be 'es5' but we always use es6+, so setting
  // it to 'all' for even better diff readability
  trailingComma: 'all',
};
