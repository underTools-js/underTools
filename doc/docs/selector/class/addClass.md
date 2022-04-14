# Add Class

## Basic use

```js
// With element selected in the DOM
_('button').addClass('active');

// With an element create in the dom
const button = _('button', 'create').text('Click');
_('#root').dom(_(button).addClass('active'));
```

## Details

- `addClass(name)`: set the class entered as a parameter to the element(s).
  - `name`: String
