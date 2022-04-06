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
- [Methods](#functions)
- [DOM](#dom)

## Start

### 1. Include

#### NPM

```bash
$ npm i undertools
```

#### YARN

```bash
$ yarn add undertools
```

#### CDN

```html
<script src="https://unpkg.com/undertools@1.2.0/dist/undertools.js"></script>
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

The `randArray()` function selects an element randomly from an array.

```js
const array = [1, 2, 3, 4, 5];
_.randArray(array);
```

In this example the `randArray()` function will return one of the elements of the array either 1, 2, 3, 4 or 5.

Other methods :

- `_.id(x)`: Returns the value as a parameter.
- `_.double(x)`: Returns the double of the value in parameter.
  - `x`: Number
- `_.map(arr, callback)`: Allows you to use Javascript's map function with a string or an array.
  - `arr`: String | Array
  - `callback`: Function
- `_.forEach(arr, callback)` or `_.each(arr, callback)`: Allows you to use the Javascript forEach function with a character string or an array with the name forEach or each.
  - `arr`: String | Array
  - `callback`: Function
- `_.filter(arr, test)`: Allows you to use the JavaScript filter function with a character string or an array.
  - `arr`: String | Array
  - `test`: Function
- `_.uniq(arr)`: Returns unique characters from a string or unique elements from an array.
  - `arr`: String | Array
- `_.join(arr, separator)`: Creates and returns a new character string by concatenating, with separator if is entered as a parameter, all the elements of an array or all the characters of a character string.
  - `arr`: String | Array
  - `separator`: String (initially '')
- `_.inter(arr, ...array)`: Returns an array containing the common characters of character strings or the common elements of arrays passed as parameters
  - `arr`, `...array`: String | Array
- `_.scale(arr, min, max, int)`: 
  - `arr`: Array[Number]
  - `min`: Number (initially 0)
  - `max`: Number (initially 1)
  - `int`: Boolean (initially true)

## DOM

The `_()` function allows you to work with dom elements.

### Use

```js
_(element, action).method(agrs...);
```

**element**: The HTML element(s) targeted or you want to target or create based on the `action`.

**action**:

- `undefined`: select the element(s)

_Facultatif_

- `create`: create the element

**method**:

- `undefined`: get the object containing all the properties and methods of the element(s)
- `dom()`: get the element(s)
  - `dom(element)`: replace element(s)

_Facultatif_

- `style()`: get all the element(s) style(s)
  - `style(property)` or `style().property`: get the value of the property entered as parameter of the element(s)\
    _The property is written as in Javascript for `style().property` (example `style().backgroundColor`) and as in CSS for `style(property)` (example `style('background-color')`)._
  - `style(property, value)`: set to the element(s) the value to the property entered as parameter
- `text()`: get the text content of the element(s)
  - `text(content)`: set the content entered as a parameter for the element(s)
- `on(event, callback)`: set an event to the element(s) like `element.addEventListener(event, callback)`
- `click()`: click on the element(s)
- `hide()`: set display none to the element(s)
- `display()`: set display block to the element(s)
- `attr(name)`: get the value of the attribute entered as a parameter
  - `attr(name, value)`: set the attribute and its value entered in parameters
- `haveClass(name)`: return true if the element contains the class entered as parameter or false if it does not
- `addClass(name)`: set the class entered as a parameter to the element(s)
- `removeClass(name)`: remove the class entered as a parameter to the element(s)
- `toggleClass(name)`: toggle the class entered as a parameter to the element(s)
- `add(element)`: add an element in the element(s)

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
