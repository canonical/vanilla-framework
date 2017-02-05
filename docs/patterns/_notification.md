---
collection: patterns
title: Notification
---

## .p-notification

Notifications are used to display global information. A notification will display at the top and fill the full width of the page. A notification can be a default, warning, negative or position.

<div class="p-notification">
    <p class="p-notification__response">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>

```html
<div class="p-notification">
    <p class="p-notification__response">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>
```

## .p-notification--warning

This warning variant should be used to convey information that is not critical but the user should be aware of.

<div class="p-notification--warning">
    <p class="p-notification__response">
        <span class="p-notification__status">Blocked:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>

```html
<div class="p-notification--warning">
    <p class="p-notification__response">
        <span class="p-notification__status">Blocked:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>
```

## .p-notification--negative

This negative variant should be used to convey information that is critical and the user should take action.

<div class="p-notification--negative">
    <p class="p-notification__response">
        <span class="p-notification__status">Error:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis! <a href="#" class="p-notification__action">Dismiss</a>
    </p>
</div>

```html
<div class="p-notification--negative">
    <p class="p-notification__response">
        <span class="p-notification__status">Error:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis! <a href="#" class="p-notification__action">Dismiss</a>
    </p>
</div>
```

## .p-notification--positive

This positive variant should be used to convey information of success or completion.

<div class="p-notification--positive">
    <p class="p-notification__response">
        <span class="p-notification__status">Success:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>

```html
<div class="p-notification--positive">
    <p class="p-notification__response">
        <span class="p-notification__status">Success:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!
    </p>
</div>
```

### Adding actions

Notifications have the ability to add an action link to them. These should appear inline with the notification response and will add margin between the link and content.

Note: All functionality must be developed in independently.

<div class="p-notification">
    <p class="p-notification__response">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!<a href="#" class="p-notification__action">Dismiss</a>
    </p>
</div>

```html
<div class="p-notification">
    <p class="p-notification__response">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!<a href="#" class="p-notification__action">Dismiss</a>
    </p>
</div>
```
