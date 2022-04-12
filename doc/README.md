# underTools Documentation

*This documentation is made with [Docusaurus](https://docusaurus.io/).*

## To start run:

Do not create a new version of the documentation, [update the existing version](https://docusaurus.io/docs/versioning#updating-an-existing-version).

```bash
npm i

npm start
```

To implement documentation for your feature:
- Create a `feature.md` file with the name of your feature all in lowercase
- Take the model below

```md
# Feature

## Basic use

The example of your functionality

## Details

- `_.feature(args)`: Description
  - `arg`: Type
```

## To build the documentation:

```bash
npm run build
```

## To test the build locally run:

```bash
npm run serve
```
