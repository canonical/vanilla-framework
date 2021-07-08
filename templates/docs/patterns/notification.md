---
wrapper_template: '_layouts/docs.html'
context:
  title: Notification | Components
---

## Notification

<hr>

Notifications are used to attract the user's attention. They offer four separate severity levels, and can also be modified for use in different contexts.

### Severity levels

#### Information

The information severity should be used to convey an information message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/information/" class="js-example">
View example of the information notification pattern
</a></div>

#### Caution

The caution severity should be used to convey information that is not critical but the user should be aware of.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/caution/" class="js-example">
View example of the caution notification pattern
</a></div>

#### Negative

The negative severity should be used to convey information that is critical and the user should take action.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/negative/" class="js-example">
View example of the negative notification pattern
</a></div>

#### Positive

The positive severity should be used to convey success or completion.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/positive/" class="js-example">
View example of the positive notification pattern
</a></div>

### Borderless

In cases where a notification sits inside another component, such as a table cell or a card, it may be useful to remove the outer border and highlight bar.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/borderless/" class="js-example">
View example of the borderless notification pattern
</a></div>

### Inline

When vertical space is limited, you can use the inline variant.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/inline/" class="js-example">
View example of the inline notification pattern
</a></div>

### Modal

Modal notifications should occupy the full width of the page.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/modal/" class="js-example">
View example of the modal notification pattern
</a></div>

### Raised

Raised notifications should be used when they are overlapping another panel.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/raised/" class="js-example">
View example of the raised notification pattern
</a></div>

### Actions

Notifications can have actions in either button or link form. These will appear below the notification message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/action/" class="js-example">
View example of the caution notification pattern
</a></div>

#### Dismissable

Notifications that can be dismissed can include a close button.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/dismissable/" class="js-example">
View example of the dismissable notification pattern
</a></div>

### Time

For notifications in which recency is important, you can include a section for time.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/time/" class="js-example">
View example of the time notification pattern
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
