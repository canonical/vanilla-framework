---
title: Grid
---

# Grid

Vanilla's default grid has 12 columns and `20px` gutters. On large screens, each column takes up 6.3053% of the total width.

- The page structure must be laid out using rows (`.row`)
- All content must be within columns (`.col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column should span a minimum of 3 columns.

Read also: [Breakpoints](/settings/breakpoints)


<div class="row">
    <div class="col-12 theme__outline">
        <span>.col-12</span>
    </div>
</div>
<div class="row">
    <div class="col-11 theme__outline">
        <span>.col-11</span>
    </div>
    <div class="col-1 theme__outline">
        <span>.col-1</span>
    </div>
</div>
<div class="row">
    <div class="col-10 theme__outline">
        <span>.col-10</span>
    </div>
    <div class="col-2 theme__outline">
        <span>.col-2</span>
    </div>
</div>
<div class="row">
    <div class="col-9 theme__outline">
        <span>.col-9</span>
    </div>
    <div class="col-3 theme__outline">
        <span>.col-3</span>
    </div>
</div>
<div class="row">
    <div class="col-8 theme__outline">
        <span>.col-8</span>
    </div>
    <div class="col-4 theme__outline">
        <span>.col-4</span>
    </div>
</div>
<div class="row">
    <div class="col-7 theme__outline">
        <span>.col-7</span>
    </div>
    <div class="col-5 theme__outline">
        <span>.col-5</span>
    </div>
</div>
<div class="row">
    <div class="col-6 theme__outline">
        <span>.col-6</span>
    </div>
    <div class="col-6 theme__outline">
        <span>.col-6</span>
    </div>
</div>
<div class="row">
    <div class="col-5 theme__outline">
        <span>.col-5</span>
    </div>
    <div class="col-7 theme__outline">
        <span>.col-7</span>
    </div>
</div>
<div class="row">
    <div class="col-4 theme__outline">
        <span>.col-4</span>
    </div>
    <div class="col-8 theme__outline">
        <span>.col-8</span>
    </div>
</div>
<div class="row">
    <div class="col-3 theme__outline">
        <span>.col-3</span>
    </div>
    <div class="col-9 theme__outline">
        <span>.col-9</span>
    </div>
</div>
<div class="row">
    <div class="col-2 theme__outline">
        <span>.col-2</span>
    </div>
    <div class="col-10 theme__outline">
        <span>.col-10</span>
    </div>
</div>
<div class="row">
    <div class="col-1 theme__outline">
        <span>.col-1</span>
    </div>
    <div class="col-11 theme__outline">
        <span>.col-11</span>
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

<div class="row">
    <div class="col-11 theme__outline">
        <span>
            <div class="col-6" style="background: #ccc">
                <span>.col-6</span>
            </div>
            <div class="col-5" style="background: #ccc">
                <span>.col-5</span>
            </div>
        </span>
    </div>
    <div class="col-1 theme__outline">
        <span>.col-1</span>
    </div>
</div>
<div class="row">
    <div class="col-10 theme__outline">
        <span>.col-10</span>
    </div>
    <div class="col-2 theme__outline">
        <span>.col-2</span>
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

The classes `.prefix-1`, `.prefix-2`, `.prefix-3`, and so on, will add empty columns before the element to the number of columns specified in the class.

The classes `.suffix-1`, `.suffix-2`, `.suffix-3`, and so on, will add empty columns after the element to the number of columns specified in the class.


<div class="row">
  <div class="col-8">
    <div class="theme__outline">.col-8</div>
  </div>
  <div class="col-4">
    <div class="theme__outline">.col-4</div>
  </div>
</div>
<div class="row">
    <div class="col-7">
        <div class="theme__outline">.col-7</div>
    </div>
    <div class="col-4 prefix-1">
        <div class="theme__outline">.col-4.prefix-1</div>
    </div>
</div>
<div class="row">
    <div class="col-7">
        <div class="theme__outline">.col-7</div>
    </div>
    <div class="col-4 suffix-1">
        <div class="theme__outline">.col-4.suffix-1</div>
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