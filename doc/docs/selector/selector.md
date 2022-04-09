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

## Details

`_(element)` retourne un objet. Pour retourné l'élément du DOM sélectionné faites `_(element).dom()`.
Pour utilisé des méthodes sur cette élément il faudra faire `_(element).method(args)`.

:::caution

Ne faite pas `_(element).dom().method(args)` car `_(element)` retourne un objet alors que `_(element).dom()` retourne un élément du DOM.

:::
