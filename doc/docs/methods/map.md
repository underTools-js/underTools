# Map

## Basic use

```js
_.map('hello world', x => x === 'l'); // Return [false, false, true, true, false, false, false, false, false, true, false]

_.map("hello world", x => x.charCodeAt(0)); // Return [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

_.map([3, 5, 7, 9, 11], x => x * 2); // Return [6, 10, 14, 18, 22]

_.map([3, 5, 7, 9, 11]); // Return [3, 5, 7, 9, 11]
```

## Details

- `_.map(arr, callback)`: Allows you to use Javascript's `map` function with a string or an array.
  - `arr`: String | Array
  - `callback`: Function

:::info

By only filling in the first parameter, this is simply returned.

:::
