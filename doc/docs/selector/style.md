# Style

## Basic use

```js
// With element selected in the DOM
_('div').style();
_('div').style().backgroundColor;
_('div').style('background-color');
_('div').style('background-color', '#000');

// With an element create in the dom
_('#root').dom(_('div', 'create').style('background-color', '#000'));
```

## Details

- `style()`: get all the element(s) style(s).
- `style(property)` or `style().property`: get the value of the property entered as parameter of the element(s).

:::caution

The property is written as in Javascript for `style().property` (example `style().backgroundColor`) and as in CSS for `style(property)` (example `style('background-color'`)).


:::

- `style(property, value)`: set to the element(s) the value to the property entered as parameter.
