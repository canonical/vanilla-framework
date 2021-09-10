---
wrapper_template: '_layouts/pattern-implementation.html'
context:
  title: Notification | Components
  guidelines: patterns/notification
  tab: react
---

## Overview

Notifications are messages that communicate information to the user. The two main variants of notifications are toast notifications and borderless notifications.

Please read the [design guideline](/discourse/patterns/notification) s for usage details.

---

## Toast Notifications

Toast Notification is short, time-based messages that slide in and out of a page and provide nondisruptive information. It either dsappears automatically or can be dismissed by user. The colour of notification status should correspond with the message intent.

### Live demo

<div class="embedded-example"><div class="p-code-snippet is-bordered">
  <div class="p-code-snippet__header"><h5 class="p-code-snippet__title">Notifications / Information </h5></div>
<iframe height="112px" src="https://canonical-web-and-design.github.io/react-components/iframe.html?id=notification--information&viewMode=story"></iframe>
  <pre class="p-code-snippet__block  language-js" data-lang="html" style="max-height: 300px;">
<code class="language-jsx css-1maezg8"><span class="token tag token tag token punctuation">&lt;</span><span class="token tag token tag token class-name">Notification</span><span class="token tag">
</span><span class="token tag">  </span><span class="token tag token attr-name">severity</span><span class="token tag token attr-value token punctuation attr-equals">=</span><span class="token tag token attr-value token punctuation">"</span><span class="token tag token attr-value">information</span><span class="token tag token attr-value token punctuation">"</span><span class="token tag">
</span><span class="token tag">  </span><span class="token tag token attr-name">title</span><span class="token tag token attr-value token punctuation attr-equals">=</span><span class="token tag token attr-value token punctuation">"</span><span class="token tag token attr-value">Permissions changed</span><span class="token tag token attr-value token punctuation">"</span><span class="token tag">
</span><span class="token tag"></span><span class="token tag token punctuation">&gt;</span><span class="token plain-text">
</span><span class="token plain-text">  Anyone with access can view your invited users.
</span><span class="token plain-text"></span><span class="token tag token tag token punctuation">&lt;/</span><span class="token tag token tag token class-name">Notification</span><span class="token tag token punctuation">&gt;</span></code></pre>
</div>
</div>

## Props

<table class="docblock-argstable css-6hhrgj"><thead class="docblock-argstable-head"><tr><th style="width: 20%">Name</th><th>Description</th><th style="width: 20%">Default</th></tr></thead><tbody class="docblock-argstable-body"><tr><td class="css-4lbn0a"><span class="css-in3yi3">actions</span></td><td><div class="css-1521b8c"><span>A list of up to two actions that the notification can perform.</span></div><div class="css-fimcbu"><code>NotificationAction[]</code></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">borderless</span></td><td><div class="css-1521b8c"><span>Whether the notification should not have a border.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>boolean</code></div></div></td><td><div class="css-13nzt7e"><code>false</code></div></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">children</span></td><td><div class="css-1521b8c"><span>The notification message content.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>ReactNode</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">className</span></td><td><div class="css-1521b8c"><span>Optional class(es) to apply to the parent notification element.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>string</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">close</span></td><td><div class="css-1521b8c"><span><strong>Deprecated</strong>. Use <code>onDismiss</code> instead.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>never</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">inline</span></td><td><div class="css-1521b8c"><span>Whether the title should display inline with the message.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>boolean</code></div></div></td><td><div class="css-13nzt7e"><code>false</code></div></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">onDismiss</span></td><td><div class="css-1521b8c"><span>The function to run when dismissing/closing the notification.</span></div><div class="css-fimcbu"><code>() =&gt; void</code></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">severity</span></td><td><div class="css-1521b8c"><span>The severity of the notification.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>"caution"</code>, <code>"information"</code>, <code>"negative"</code>, <code>"positive"</code></div></div></td><td><div class="css-13nzt7e"><code>"information"</span></div></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">status</span></td><td><div class="css-1521b8c"><span><strong>Deprecated</strong>. Use <code>title</code> instead.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>never</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">timeout</span></td><td><div class="css-1521b8c"><span>The amount of time (in ms) until the notification is automatically dismissed.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>number</span></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">timestamp</span></td><td><div class="css-1521b8c"><span>A relevant timestamp for the notification, e.g. when it was created.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>ReactNode</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">title</span></td><td><div class="css-1521b8c"><span>The title of the notification.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>ReactNode</code></div></div></td><td><span>-</span></td></tr><tr><td class="css-4lbn0a"><span class="css-in3yi3">type</span></td><td><div class="css-1521b8c"><span><strong>Deprecated</strong>. Use <code>severity</code> instead.</span></div><div class="css-fimcbu"><div class="css-13nzt7e"><code>never</code></div></div></td><td><span>-</span></td></tr></tbody></table>
