# Filter

## Basic use

```js
_.filter('hello world', (x) => x === 'o'); // Return ['o', 'o']

_.filter([3, 5, 7, 9, 11], (x) => x > 5); // Return [7, 9, 11]

_.filter([3, 5, 7, 9, 11]); // Return [3, 5, 7, 9, 11]
```

## Details

- `_.filter(arr, test)`: Allows you to use the JavaScript `filter` function with a character string or an array.
  - `arr`: String | Array
  - `test`: Function

:::info

By only filling in the first parameter, this is simply returned.

:::
