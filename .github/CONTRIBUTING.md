# underTools Contributing Guide

Hi! I'm really glad that you want to contribute to underTools. Before submitting your contribution, be sure to take a moment and read the following guidelines:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always use [https://github.com/underTools-js/underTools/issues](https://github.com/underTools-js/underTools/issues) to create new issues.

## Pull Request Guidelines

- The `main` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `main` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding a new feature:

  - Add accompanying test case.
  - Complete the README.md if required.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:
  - If you are resolving a special issue, add `fix #xxx[,#xxx]: bug` (#xxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding fix #354: bug`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 8+**.

After cloning the repo, run:

```bash
$ npm i # install the dependencies of the project
```

### Committing convention

Follow the convention:

- feat: added a new feature
- fix #xxx: fixed a bug (#xxx is the issue id)
- perf: performance improvement
- refactor: modification that does not bring any new functionality or performance improvement
- style: change that does not bring any functional or semantic alteration (indentation, formatting, addition of space, renaming of a variable, etc.)
- docs: writing or updating documentation
- test: adding or modifying tests

### Commonly used NPM scripts

```bash
# fix the code style (airbnb style) with eslint an prettier
$ npm run lint:fix

# build all dist files
$ npm run build

# run the full test suite
$ npm test

# run the test coverage
$ npm test:coverage
```

There are some other scripts available in the `scripts` section of the `package.json` file.

## Project Structure

- **`dist`**: contains built files for distribution. Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.

- **`doc`**: contains the documentation of the module.

- **`examples`**: contains some examples of use / allows to test its functionality _(not required to fill it in case of addition of functionality)_.

- **`src`**:

  - **`ajax`**: contains the ajax method.

  - **`method`**: contains all the methods of the undertools (`_`) library.

  - **`selector`**: contains all the methods of the `_()` selector.

  - **`test`**: contains all tests.

  - **`index.js`**: contains the export of all functions.
