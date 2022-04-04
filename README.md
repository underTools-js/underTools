<h1 align="center">aTool.js</h1>

<br>

<p align="center">
  <a href="#">
    <img src="https://elliot-sutton.com/src/img/atool.js.png" alt="aTool.js Logo" width="160">
  </a>
</p>

<p align="center">
  <strong>aTool.js</strong> is a light, fast, and complete <strong>Javascript library</strong>.
  <br>
  It facilitates the manipulation of the DOM, the events, the API calls and adds interesting functions, not present in the native JavaScript.
</p>

<br>

## Table of contents

- [Start](#start)
- [Functions](#functions)

## Start

### 1. Include

#### NPM

```sh
npm install atool.js
```

#### YARN

```sh
yarn add atool.js
```

#### CDN

```sh
soon...
```

### 2. Use

#### SSR

```js
// Recommended
const { randArray } = require("atool.js");
randArray(array);
```

or

```js
const aTool = require("atool.js");
aTool.randArray(array);
```

#### CSR

```js
// Recommended
import { randArray } from "atool.js";
randArray(array);
```

or

```js
import aTool from "atool.js";
aTool.randArray(array);
```

#### CDN

1. HTML

```html
<script src="cdn/atool.js"></script>
```

2. CSS

```js
const { randArray } = aTool;
randArray(array);
```

or

```js
aTool.randArray(array);
```

## Functions

The `randArray()` function selects an element randomly from an array.

```js
const array = [1, 2, 3, 4, 5];
randArray(array);
```

In this example the `randArray()` function will return one of the elements of the array either 1, 2, 3, 4 or 5.
