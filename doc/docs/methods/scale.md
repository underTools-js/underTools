# Scale

## Basic use

```js
_.scale([3, 7, 12, 8, 1], 0, 20); // Return [4, 11, 20, 13, 0]

_.scale([3, 7, 12, 8, 1], 0, 20, false); // Return [3.6363636363636362, 10.909090909090908, 20, 12.727272727272727, 0]
```

## Details

- `_.scale(arr, min, max, int)`: Returns an array containing the common characters of character strings or the common elements of arrays passed as parameters.
  - `arr`: Array[Number]
  - `min`: Number (initially 0)
  - `max`: Number (initially 1)
  - `int`: Boolean (initially true)
