<div align="center">
<h1>bappo-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for Bappo projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package] [![MIT License][license-badge]][license]

## The problem

We need to set up linting, testing, building for every project (platform and
customer projects). It's tedious to set up a new project and hard to keep the
tooling up-to-date.

## This solution

This is a CLI that abstracts away all configuration for linting, testing,
building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Overriding Config](#overriding-config)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
Requires node version >= 10.18

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
yarn add --dev @bappo/scripts
```

## Usage

This is a CLI and exposes a bin called `bappo-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some of
the things you can do with `bappo-scripts`.

### Overriding Config

Unlike `react-scripts`, `bappo-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `bappo-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`bappo-scripts` will use that instead of it's own internal config. In addition,
`bappo-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/@bappo/scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["@bappo/scripts/babel"]}
```

Or, for `jest`:

```javascript
const { jest: jestConfig } = require('@bappo/scripts/config');
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
});
```

> Note: `bappo-scripts` intentionally does not merge things for you when you
> start configuring things to make it less magical and more straightforward.
> Extending can take place on your terms. I think this is actually a great way
> to do this.

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/bappogroup/bappo-scripts.svg?style=flat-square
[build]: https://travis-ci.org/bappogroup/bappo-scripts
[coverage-badge]: https://img.shields.io/codecov/c/github/bappogroup/bappo-scripts.svg?style=flat-square
[coverage]: https://codecov.io/github/bappogroup/bappo-scripts
[version-badge]: https://img.shields.io/npm/v/@bappo/scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/@bappo/scripts
[license-badge]: https://img.shields.io/npm/l/@bappo/scripts.svg?style=flat-square
[license]: https://github.com/bappogroup/bappo-scripts/blob/master/LICENSE
