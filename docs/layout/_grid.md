---
collection: layout
title: Grid
---

The grid is constructing using `col-*` elements nested inside a single `.row` parent element.

<div class="grid_outline">
    <div class="row">
        <div class="col-12">
            <span>.col-12</span>
        </div>
    </div>
    <div class="row">
        <div class="col-11">
            <span>.col-11</span>
        </div>
        <div class="col-1">
            <span>.col-1</span>
        </div>
    </div>
    <div class="row">
        <div class="col-10">
            <span>.col-10</span>
        </div>
        <div class="col-2">
            <span>.col-2</span>
        </div>
    </div>
    <div class="row">
        <div class="col-9">
            <span>.col-9</span>
        </div>
        <div class="col-3">
            <span>.col-3</span>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <span>.col-8</span>
        </div>
        <div class="col-4">
            <span>.col-4</span>
        </div>
    </div>
    <div class="row">
        <div class="col-7">
            <span>.col-7</span>
        </div>
        <div class="col-5">
            <span>.col-5</span>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <span>.col-6</span>
        </div>
        <div class="col-6">
            <span>.col-6</span>
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <span>.col-5</span>
        </div>
        <div class="col-7">
            <span>.col-7</span>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <span>.col-4</span>
        </div>
        <div class="col-8">
            <span>.col-8</span>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <span>.col-3</span>
        </div>
        <div class="col-9">
            <span>.col-9</span>
        </div>
    </div>
    <div class="row">
        <div class="col-2">
            <span>.col-2</span>
        </div>
        <div class="col-10">
            <span>.col-10</span>
        </div>
    </div>
    <div class="row">
        <div class="col-1">
            <span>.col-1</span>
        </div>
        <div class="col-11">
            <span>.col-11</span>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-12">.col-12</div>
</div>
<div class="row">
    <div class="col-11">.col-11</div>
    <div class="col-1">.col-1</div>
</div>
<div class="row">
    <div class="col-10">.col-10</div>
    <div class="col-2">.col-2</div>
</div>
<div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-3">.col-3</div>
</div>
<div class="row">
    <div class="col-8">.col-8</div>
    <div class="col-4">.col-4</div>
</div>
<div class="row">
    <div class="col-7">.col-7</div>
    <div class="col-5">.col-5</div>
</div>
<div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
</div>
<div class="row">
    <div class="col-5">.col-5</div>
    <div class="col-7">.col-7</div>
</div>
<div class="row">
    <div class="col-4">.col-4</div>
    <div class="col-8">.col-8</div>
</div>
<div class="row">
    <div class="col-3">.col-3</div>
    <div class="col-9">.col-9</div>
</div>
<div class="row">
    <div class="col-2">.col-2</div>
    <div class="col-10">.col-10</div>
</div>
<div class="row">
    <div class="col-1">.col-1</div>
    <div class="col-11">.col-11</div>
</div>
```

## Nested grid

Nest grids by ensuring columns add up to the number assigned to their parent column.

<div class="grid_outline">
    <div class="row">
        <div class="col-11">
            <span>
                <div class="col-6">
                    <span>.col-6</span>
                </div>
                <div class="col-5">
                    <span>.col-5</span>
                </div>
            </span>
        </div>
        <div class="col-1">
            <span>.col-1</span>
        </div>
    </div>
    <div class="row">
        <div class="col-10">
            <span>.col-10</span>
        </div>
        <div class="col-2">
            <span>.col-2</span>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-11">
        <div class="col-6">
            .col-6
        </div>
        <div class="col-5">
            .col-5
        </div>
    </div>
    <div class="col-1">
        .col-1
    </div>
</div>

<div class="row">
    <div class="col-10">
        .col-10
    </div>
    <div class="col-2">
        .col-2
    </div>
</div>
```

## Empty columns

Adding empty columns before or after an element might be useful when you need extra space between elements and columns than that provided by the default grid.

The classes `.prefix-1`, `.prepend-2`, `.prepend-3`, and so on, will add empty columns before the element to the number of columns specified in the class.

The classes `.suffix-1`, `.suffix-2`, `.suffix-3`, and so on, will add empty columns after the element to the number of columns specified in the class.

<div class="grid_outline">
    <div class="row">
      <div class="col-8">
        <span>.col-8</span>
      </div>
      <div class="col-4">
        <span>.col-4</span>
      </div>
    </div>
    <div class="row">
        <div class="col-7">
            <span>.col-7</span>
        </div>
        <div class="col-4 prefix-1">
            <span>.col-4.prefix-1</span>
        </div>
    </div>
    <div class="row">
        <div class="col-7">
            <span>.col-7</span>
        </div>
        <div class="col-4 suffix-1">
            <span>.col-4.suffix-1</span>
        </div>
    </div>
</div>


```html
<div class="row">
    <div class="col-8">
        .col-8
    </div>
    <div class="col-4">
        .col-4
    </div>
</div>

<div class="row">
    <div class="col-7">
        .col-7
    </div>
    <div class="col-4 prefix-1">
        .col-4.prefix-1
    </div>
</div>

<div class="row">
    <div class="col-7">
        .col-7
    </div>
    <div class="col-4 suffix-1">
        .col-4.suffix-1
    </div>
</div>
```

