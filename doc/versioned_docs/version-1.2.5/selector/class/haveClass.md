# Have Class

## Basic use

```js
// With element selected in the DOM
_('button').haveClass('active');

// With an element create in the dom
const button = _('button', 'create').text('Click');
const button = _(button).addClass('active');
_('#root').dom(_(button).haveClass('active'));
```

## Details

- `haveClass(name)`: return true if the element contains the class entered as parameter or false if it does not.
  - `name`: String
