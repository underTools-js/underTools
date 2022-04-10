# Click

## Basic use

```js
// With element selected in the DOM
_('button').click();

// With an element create in the dom
const button = _('button', 'create').text('Click');
const button = _(button).attr('id', 'button');
_(button).click();
```

## Details

- `_(element, action).click()`: click on the element(s).
