---
wrapper_template: '_layouts/docs.html'
context:
  title: Notification | Components
---

## Notification

<hr>

Notifications are used to display global information, our notification variants consist of default, caution, negative or positive.

You can also include a close button using the `p-icon--close` pattern, although you will need to implement the click function yourself.

### Default

The default variant should be used to display global messages.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/notifications/" class="js-example">
View example of the default notification pattern
</a></div>

### Caution

The caution variant should be used to convey information that is not critical but the user should be aware of.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/caution/" class="js-example">
View example of the caution notification pattern
</a></div>

### Negative

The negative variant should be used to convey information that is critical and the user should take action.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/negative/" class="js-example">
View example of the negative notification pattern
</a></div>

### Positive

The positive variant should be used to convey success or completion.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/positive/" class="js-example">
View example of the positive notification pattern
</a></div>

### Information

The information variant should be used to convey an information message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/information/" class="js-example">
View example of the information notification pattern
</a></div>

### Actions

Notifications have the ability to add an action link to them. These will appear inline with the notification response.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>All functionality must be developed independently.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/action/" class="js-example">
View example of the caution notification pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_notifications';
@include vf-p-notification;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use notifications in React by installing our react-component library and importing `Notification` component.

[See the documentation for our React `Notification` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/notification--default-story#notification)
