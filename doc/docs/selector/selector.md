# Selector

The `_(element, action).method(agrs...)` function allows you to work with dom elements.

## Basic use

```js
// Select element in the dom
_("#root").dom();
// Create an element
_("h1", "create").text("Hello world");
// Modify an element in the dom by another element
_("#root").dom(_("h1", "create").text("Hello world"));

// or
const h1 = _("h1").dom();
_(h1).attr("id", "test");
```
