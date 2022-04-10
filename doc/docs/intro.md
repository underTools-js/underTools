---
sidebar_position: 1
---

# Introduction

Let's discover the **documentation of underTools**.

## Getting Started

### 1. Installation with npm

```bash
npm i undertools
```

### 2. Installation with yarn

```bash
yarn add undertools
```

### 2. Importation with CDN

```html
<script src="https://unpkg.com/undertools@1.2.0/dist/undertools.js"></script>
```

## Basic use

### 1. Server Side Rendering

```js
// Recommended
const _ = require("undertools");
_.randArray(array);
```

**or**

```js
const underTools = require("undertools");
underTools.randArray(array);
```

### 2. Client Side Rendering

```js
// Recommended
import _ from "undertools";
_.randArray(array);
```

**or**

```js
import underTools from "undertools";
underTools.randArray(array);
```

### 3. Content Delivery Network,

```js
const _ = underTools;
_.randArray(array);
```

**or**

```js
underTools.randArray(array);
```
