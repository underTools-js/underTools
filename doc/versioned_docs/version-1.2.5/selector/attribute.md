# Attribute

## Basic use

```js
// With element selected in the DOM
_('h1').attr('id', 'h1');
_('h1').attr('id');

// With an element create in the dom
const h1 = _('h1', 'create').attr('id', 'h1');
_('#root').dom(_(h1).attr('id'));
```

## Details

- `_(element, action).attr(name)`: get the value of the attribute entered as a parameter.
  - `name`: String
- `_(element, action).attr(name, value)`: set the attribute and its value entered in parameters.
  - `name`: String
  - `value`: String
