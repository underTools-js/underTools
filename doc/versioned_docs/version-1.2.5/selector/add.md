# Add

## Basic use

```js
const h1 = _('div', 'create').text('Hello World');

// With element selected in the DOM
_('#root').add(h1);

// With an element create in the dom
_('#root').dom(_('div', 'create').add(h1));
```

## Details

- `add(element)`: add an element in the element(s).
  - `element`: String
