# Hide

## Basic use

```js
// With element selected in the DOM
_('h1').hide();

// With an element create in the dom
const h1 = _('h1', 'create').text('Hello World');
_('#root').dom(_(h1).hide());
```

## Details

- `_(element, action).hide()`: set `display: none` to the element(s).
