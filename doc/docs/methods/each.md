# Each

## Basic use

```js
_.forEach('hello world', (x) => console.log(x));
// or
_.each('hello world', (x) => console.log(x));

_.each([3, 5, 7, 9, 11], (x) => console.log(x));
```

## Details

- `_.forEach(arr, callback)` or `_.each(arr, callback)`: Allows you to use the Javascript `forEach` function with a character string or an array with the name `forEach` or `each`.
  - `arr`: String | Array
  - `callback`: Function
