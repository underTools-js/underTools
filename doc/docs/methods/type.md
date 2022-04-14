# Type

## Basic use

```js
_.type(true); // Return boolean
_.type(3); // Return integer
_.type(3.33); // Return float
_.type('string'); // Return string
_.type([1, 2, 3]);  // Return array
_.type({ name: 'John' }); // Return object
```

## Details

- `_.type(variable)`: Returns the type (array, object, string, integer, float, boolean) of a variable passed as a parameter.
  - `variable`: All
