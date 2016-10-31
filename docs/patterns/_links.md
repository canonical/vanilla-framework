---
collection: patterns
title: Links
---

## External link

The `.p-link--external` class should be used on hyperlinks that go to a different domain than the current one. E.g.:

An <a class="p-link--external">external link</a> in a sentence.

```html
<a class="p-link--external">External link</a>
```

## Link without underline

The `.p-link--no-underline` class should be used on hyperlinks where an underline should not appear, such as image links. E.g.:

<a class="p-link--no-underline" href="#">
    <img src="http://placehold.it/150x200" alt="Placeholder image" />
</a>

```html
<a class="p-link--no-underline" href="#">
    <img src="http://placehold.it/150x200" alt="Placeholder image" />
</a>
```

## Back to top link

The `.p-top` link can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.

<div class="row">
    <div class="p-top">
        <a href="#" class="p-top__link">Back to top</a>
    </div>
</div>

```html
<div class="p-top">
    <a href="#" class="p-top__link">Back to top</a>
</div>
```
