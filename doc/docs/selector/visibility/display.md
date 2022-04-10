# Display

## Basic use

```js
// With element selected in the DOM
_('h1').display();

// With an element create in the dom
const h1 = _('h1', 'create').text('Hello World');
_('#root').dom(_(h1).display());
```

## Details

- `_(element, action).display()`: set `display: block` to the element(s).
