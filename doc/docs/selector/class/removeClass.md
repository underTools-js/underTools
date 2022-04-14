# Remove Class

## Basic use

```js
// With element selected in the DOM
_('button').removeClass('active');

// With an element create in the dom
const button = _('button', 'create').text('Click');
const button = _(button).addClass('active');
_('#root').dom(_(button).removeClass('active'));
```

## Details

- `removeClass(name)`: remove the class entered as a parameter to the element(s).
  - `name`: String
