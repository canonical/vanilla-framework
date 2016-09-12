---
collection: patterns
title: Strip
---

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.strip--light`) or dark (`.strip--dark`) grey background.

A `.strip` container should always be the parent of a `.row` and never the other way around.

<div class="strip--dark">
    <div class="row">
        <h2>Title of a light row</h2>
        <p>Some text inside a row.</p>
    </div>
</div>

```html
<div class="strip--dark">
    <div class="row">
        ...
    </div>
</div>
```

<div class="strip--dark">
    <div class="row">
        <h2>Title of a dark row</h2>
        <p>Some text inside a row.</p>
    </div>
</div>

```html
<div class="strip--dark">
    <div class="row">
        ...
    </div>
</div>
```
