---
layout: default
---

## Notification

<hr>

Notifications are used to display global information, our notification variants consist of default, caution, negative or positive.

You can also include a close button using the `p-icon--close` pattern, although you will need to implement the click function yourself.

### Default

The default variant should be used to display global messages.

<a href="/examples/patterns/notifications/notifications/"
    class="js-example">
View example of the default notification pattern
</a>

### Caution

The caution variant should be used to convey information that is not critical but the user should be aware of.

<a href="/examples/patterns/notifications/caution/"
    class="js-example">
View example of the caution notification pattern
</a>

### Negative

The negative variant should be used to convey information that is critical and the user should take action.

<a href="/examples/patterns/notifications/negative/"
    class="js-example">
View example of the negative notification pattern
</a>

### Positive

The positive variant should be used to convey success or completion.

<a href="/examples/patterns/notifications/positive/"
    class="js-example">
View example of the positive notification pattern
</a>

### Information

The information variant should be used to convey an information message.

<a href="/examples/patterns/notifications/information/"
    class="js-example">
View example of the information notification pattern
</a>

### Actions

Notifications have the ability to add an action link to them. These should appear inline with the notification response and will add a margin between the link and content.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>All functionality must be developed independently.
  </p>
</div>

<a href="/examples/patterns/notifications/action/"
    class="js-example">
View example of the caution notification pattern
</a>

### Design

For more information view the [notification design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Notifications) which includes the specification in markdown format and a PNG image.
