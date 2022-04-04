<h3 align="center">Tools.js</h3>

<p align="center">
  <strong>Tools.js</strong> is a light, fast, and complete <strong>Javascript library</strong>.
  <br>
  It facilitates the manipulation of the DOM, the events, the API calls and adds interesting functions, not present in the native JavaScript.
</p>

## Table of contents

- [Start](#start)
- [Functions](#functions)

## Start

### 1. Include

#### NPM

```sh
npm install toolsjs
```

#### YARN

```sh
yarn add toolsjs
```

#### CDN

```sh
soon...
```

### 2. Use

#### SSR

```js
// Recommended
const { randArray } = require("toolsjs");
randArray(array);
```

or

```js
const Tools = require("toolsjs");
Tools.randArray(array);
```

#### CSR

```js
// Recommended
import { randArray } from "toolsjs";
randArray(array);
```

or

```js
import Tools from "toolsjs";
Tools.randArray(array);
```

#### CDN

##### HTML

```html
<script src="cdn/tools.js"></script>
```

##### CSS

```js
const { randArray } = Tools;
randArray(array);
```

or

```js
Tools.randArray(array);
```

## Functions

The `randArray()` function selects an element randomly from an array.

```js
const array = [1, 2, 3, 4, 5];
randArray(array);
```

In this example the `randArray()` function will return one of the elements of the array either 1, 2, 3, 4 or 5.
