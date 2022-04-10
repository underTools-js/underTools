# Event

## Basic use

```js
_('h1').on('click', e => {
  console.log(e.target);
});
```

## Details

- `on(event, callback)`: set an event to the element(s) like `element.addEventListener(event, callback)`.

:::caution

As for the **addEventListener** the `event` and `callback` parameters are mandatory.

:::
