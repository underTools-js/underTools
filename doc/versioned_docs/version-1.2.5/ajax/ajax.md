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

## Properties

The object passed as a parameter contains the following properties:

### request <small>`Facultatif`</small> 
  - *Type*: String
  - *Initially*: auto
  - *Description*: Allows forcing the use of XMLHttpRequest or fetch. Initially request is equal to auto ie the fetch function will be favored, however, if the fetch method is not compatible with the browser, the XMLHttpRequest method will be used.

```js
_.ajax({
  // highlight-next-line
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

### method <small>`Facultatif`</small> 
  - *Type*: String
  - *Initially*: GET
  - *Description*: GET or POST

GET example
```js
_.ajax({
  // highlight-next-line
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
  // highlight-next-line
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

### url
  - *Type*: String
  - *Description*: The request URL.

```js
_.ajax({
  // highlight-next-line
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
});
```

### data <small>`Facultatif`</small> 
  - *Type*: Depends on the recipient of your request.
  - *Description*: The data you want to insert.

```js
_.ajax({
  method: 'POST',
  url: 'https://api.yourdomain.com/articles',
  // highlight-next-line
  data: JSON.stringify({ title: 'POST Request Example' }),
  response: (res) => {
    console.log(res);
  },
});
```

:::caution

The `data` property should only be filled in for the POST method.

:::

### format <small>`Facultatif`</small> 
  - *Type*: String
  - *Description*: If the format is JSON the data returned or sent will be converted from JavaScript to JSON or from JSON to JavaScript depending on the request.
  - *Value*:
    - json *or* JSON → With GET and POST method
    - text → Only with GET method
    - type → Only with GET method
    - url → Only with GET method
    - blob → Only with GET method and fetch

GET example
```js
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  // highlight-next-line
  format: 'JSON',
  response: (res) => {
    console.log(res);
  },
});
```

POST example
```js
_.ajax({
  method: 'POST',
  url: 'https://api.yourdomain.com/articles',
  data: { title: 'POST Request Example' },
  // highlight-next-line
  format: 'JSON',
  response: (res) => {
    console.log(res);
  },
});
```

:::caution

Initially the response is returned as is. The format can therefore be different in `request: auto` depending on the type of request chosen in relation to browser compatibility.
It is therefore advisable to specify the `format` or to treat the data well in the `response` function.

:::

### headers <small>`Facultatif`</small>
  - *Type*: Object
  - *Description*: Allows performing various actions on HTTP request and response headers.

```js
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  format: 'JSON',
  // highlight-next-line
  headers: { 'Content-Type': 'application/json' },
  response: (res) => {
    console.log(res);
  },
});
```

### mode <small>`Facultatif`</small>
  - *Type*: String
  - *Description*: Contains the mode of the request (e.g., cors, no-cors, cors-with-forced-preflight, same-origin, or navigate.) This is used to determine whether cross-origin requests will lead to valid responses, and what properties of the response will be readable.
  - *Compatibility*: Only with fetch.

```js
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  format: 'JSON',
  headers: { 'Content-Type': 'application/json' },
  // highlight-next-line
  mode: 'cors',
  response: (res) => {
    console.log(res);
  },
});
```

### cache <small>`Facultatif`</small>
  - *Type*: String
  - *Description*: Contains the cache mode of the request. It controls how the request will interact with the browser's HTTP cache.

```js
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  format: 'JSON',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  // highlight-next-line
  cache: 'default',
  response: (res) => {
    console.log(res);
  },
});
```

### response
  - *Type*: Function
  - *Description*: The query response function.
  - *Parameter*: `res` → The returned result.

```js {3-5}
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
});
```

### error <small>`Facultatif`</small>
  - *Type*: Function
  - *Description*: The query error function if the request fails.
  - *Parameter*: `err` → The returned error.

```js {6-8}
_.ajax({
  url: 'https://api.yourdomain.com/articles',
  response: (res) => {
    console.log(res);
  },
  error: (err) => {
    console.log(err);
  }
});
```
