# Inter

## Basic use

```js
_.inter('javascript', 'internet', 'text'); // Return ['t']

_.inter([10, 5, 6, 9, 1], [1, 3, 5, 7, 9], [3, 10, 1, 5, 4]); // Return [5, 1]

_.inter([1, 2, 1, 2, 1, 2]); // Return [1, 2]
```

## Details

- `_.inter(arr, ...array)`: Returns an array containing the common characters of character strings or the common elements of arrays passed as parameters.
  - `arr`, `...array`: String | Array
