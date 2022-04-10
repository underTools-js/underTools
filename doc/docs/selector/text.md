# Text

## Basic use

```js
// With element selected in the DOM
_('h1').text();
_('h1').text('Hello World');

// With an element create in the dom
_('#root').dom(_('h1', 'create').text('Hello World'));
```

## Details

- `_(element, action).text()`: get the text content of the element(s).
- `_(element, action).text(content)`: set the content entered as a parameter for the element(s).

:::info

If several elements are selected, the texts will be returned in the form of an array.

:::
