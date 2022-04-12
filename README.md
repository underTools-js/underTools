<h1 align="center">underTools</h1>

<br>

<p align="center">
  <a href="#">
    <img src="https://elliot-sutton.com/src/img/undertoolsLogo.png" alt="underTools Logo" width="100">
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
- [Methods](#methods)
- [Selector](#selector)
- [AJAX](#ajax)

## Start

### 1. Include

#### NPM

```bash
npm i undertools
```

#### YARN

```bash
yarn add undertools
```

#### CDN

```html
<script src="https://unpkg.com/undertools@1.2.5/dist/undertools.js"></script>
```

### 2. Use

#### SSR

```js
// Recommended
const _ = require("undertools");
_.randArray(array);
```

or

```js
const underTools = require("undertools");
underTools.randArray(array);
```

#### CSR

```js
// Recommended
import _ from "undertools";
_.randArray(array);
```

or

```js
import underTools from "undertools";
underTools.randArray(array);
```

#### CDN

```js
const _ = underTools;
_.randArray(array);
```

or

```js
underTools.randArray(array);
```

## Methods

You can use the methods of the `_` object.

### Examples

In this example the `randArray` method will return one of the elements of the array either 1, 2, 3, 4 or 5.

```js
const array = [1, 2, 3, 4, 5];
_.randArray(array);
```

In this example the `rand` method returns a number between 1 and 10.

```js
_.rand(1, 10);
```

## Selector

The `_()` function allows you to work with dom elements.

### Use

```js
_(element, action).method(agrs...);
```

### Examples

```js
// Select element in the dom
_("#root").dom();
// Create an element
_("h1", "create").text("Hello world");
// Modify an element in the dom by another element
_("#root").dom(_("h1", "create").text("Hello world"));

// or
const h1 = _("h1").dom();
_(h1).attr("id", "test");
```

## AJAX

The `_.ajax(obj)` method allows you to simply perform an AJAX request.

### Examples

```js
_.ajax({
  url: 'https://api.thecatapi.com/v1/images/search',
  format: 'JSON',
  response: (res) => {
    console.log(res);
  },
  error: (err) => {
    console.log(err);
  },
});
```
