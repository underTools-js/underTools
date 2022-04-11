# Join

## Basic use

```js
_.join(_.uniq('abracadabra')); // Return abrcd

_.join('abracadabra', ';'); // Return a;b;r;a;c;a;d;a;b;r;a

_.join([1, 2, 3], ';'); // Return 1;2;3
```

## Details

- `_.join(arr, separator)`: Creates and returns a new character string by concatenating, with separator if is entered as a parameter, all the elements of an array or all the characters of a character string.
  - `arr`: String | Array
  - `separator`: String (initially '')
