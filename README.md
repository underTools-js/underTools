<h1 align="center">underTools</h1>

<br>

<p align="center">
  <a href="#">
    <img src="https://elliot-sutton.com/src/img/undertools.png" alt="underTools Logo" width="160">
  </a>
</p>

<p align="center">
  <strong>underTools</strong> is a light, fast, and complete <strong>Javascript library</strong>.
  <br>
  It facilitates the manipulation of the DOM, the events, the API calls and adds interesting functions, not present in the native Javascript.
</p>

<br>

## Table of contents

- [Start](#start)
- [Functions](#functions)

## Start

### 1. Include

#### NPM

```sh
npm install undertools
```

#### YARN

```sh
yarn add undertools
```

#### CDN

```html
<script src="https://unpkg.com/undertools@1.0.3/dist/undertools.js"></script>
```

### 2. Use

#### SSR

```js
// Recommended
const { randArray } = require("undertools");
randArray(array);
```

or

```js
const underTools = require("undertools");
underTools.randArray(array);
```

#### CSR

```js
// Recommended
import { randArray } from "undertools";
randArray(array);
```

or

```js
import underTools from "undertools";
underTools.randArray(array);
```

#### CDN

```js
const { randArray } = underTools;
randArray(array);
```

or

```js
underTools.randArray(array);
```

## Functions

The `randArray()` function selects an element randomly from an array.

```js
const array = [1, 2, 3, 4, 5];
randArray(array);
```

In this example the `randArray()` function will return one of the elements of the array either 1, 2, 3, 4 or 5.
