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

You can use the methods of the `_` object.

### Use

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
- `_.inter(arr, ...array)`: Returns an array containing the common characters of character strings or the common elements of arrays passed as parameters.
  - `arr`, `...array`: String | Array
- `_.scale(arr, min, max, int)`: Returns an array containing the common characters of character strings or the common elements of arrays passed as parameters.
  - `arr`: Array[Number]
  - `min`: Number (initially 0)
  - `max`: Number (initially 1)
  - `int`: Boolean (initially true)
- `_.randArray(arr)`: Returns an element randomly from an array.
  - `arr`: Array
- `_.rand(min, max)`: Returns a random number between the numbers passed as parameter.
  - `min`: Number
  - `max`: Number
- `_.type(variable)`: Returns the type (array, object, string, integer, float, boolean) of a variable passed as a parameter.
  - `variable`: All

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

## AJAX

The `_.ajax(obj)` method allows you to simply perform an AJAX request.

### Use

The object passed as a parameter contains the following properties:
- `request`: *Facultatif* **String** Allows forcing the use of XMLHttpRequest or fetch. Initially request is equal to auto ie the fetch function will be favored, however, if the fetch method is not compatible with the browser, the XMLHttpRequest method will be used.
- `method`: *Facultatif* **String** GET or POST (initially GET).
- `url`: **String** The request URL.
- `data`: *Facultatif* The data you want to insert (only if the method is POST).
- `format`: *Facultatif* **String** If the format is JSON the data returned or sent will be converted from JavaScript to JSON or from JSON to JavaScript depending on the request.
- `headers`: *Facultatif* **Object** Allows performing various actions on HTTP request and response headers.
- `mode`: *Facultatif* **String** Contains the mode of the request (e.g., cors, no-cors, cors-with-forced-preflight, same-origin, or navigate.) This is used to determine whether cross-origin requests will lead to valid responses, and what properties of the response will be readable.
- `cache`: *Facultatif* **String** Contains the cache mode of the request. It controls how the request will interact with the browser's HTTP cache.
- `response(res)`: **Function** The query response function.
  - `res`: The returned result.
- `error(err)`: *Facultatif* **Function** The query error function if the request fails.
  - `err`: The returned error.

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
