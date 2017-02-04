---
collection: patterns
title: Strip
---

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.p-strip--light`) or dark (`.p-strip--dark`) grey background.

A `.p-strip` container should always be the parent of a `.row` and never the other way around.

<div class="p-strip--light">
    <div class="row">
        <h2>Title of a light row</h2>
        <p>Some text inside a row.</p>
    </div>
</div>

```html
<div class="p-strip--light">
    <div class="row">
        ...
    </div>
</div>
```

<div class="p-strip--dark">
    <div class="row">
        <div class="col-12">
            <h2>Title of a dark row</h2>
            <p>Some text inside a row.</p>
        </div>
    </div>
</div>

```html
<div class="p-strip--dark">
    <div class="row">
        ...
    </div>
</div>
```
