# On

## Basic use

```js
_('h1').on('click', e => {
  console.log(e.target);
});
```

## Details

- `_(element, action).on(event, callback)`: set an event to the element(s) like `document.querySelector(element).addEventListener(event, callback)`.
  - `event`: String
  - `callback`: Function

:::caution

As for the **addEventListener** the `event` and `callback` parameters are mandatory.

:::
