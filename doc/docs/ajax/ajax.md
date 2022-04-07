# Ajax

The `_.ajax(obj)` method allows you to simply perform an AJAX request.

## Basic use

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

## Use

The object passed as a parameter contains the following properties:

- **request**: `Facultatif` 
  - *Type*: String
  - *Initially*: auto
  - *Description*: Allows forcing the use of XMLHttpRequest or fetch. Initially request is equal to auto ie the fetch function will be favored, however, if the fetch method is not compatible with the browser, the XMLHttpRequest method will be used.

```js
_.ajax({
  request: 'fetch',
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
});
```

:::danger

Focusing the use of fetch may **cause incompatibility** for older browsers like Internet Explorer.

:::

- **method**: `Facultatif`
  - *Type*: String
  - *Initially*: GET
  - *Description*: GET or POST

GET example
```js
_.ajax({
  method: 'GET',
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
});
```

:::info

The method property is initially equal to GET, so there is no need to put `method: 'GET'`.

:::

POST example
```js
_.ajax({
  method: 'POST',
  url: 'https://api.yourdomain.com/articles',
  data: JSON.stringify({ title: 'POST Request Example' }),
  response: (res) => {
    console.log(res);
  },
});
```

:::caution

To make a POST request, the `data` property is required.

:::

- **url**:
  - *Type*: String
  - *Description*: The request URL.

```js
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
});
```
