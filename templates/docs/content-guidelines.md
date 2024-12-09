---
wrapper_template: '_layouts/docs.html'
context:
  title: Content Guidelines
  description: Content guidelines for the Canonical design system
---

Open source software connects and uplifts, and our content does the same. With a diverse and global community of users, our language should be clear, consistent, and accessible.

Follow this overall guidance for all UX copy:

- Put the most important information first
- Use short words and short sentences
- Use sentence case
- Avoid "please" and "thank you" – in UI copy, they can vary by culture
- Use inclusive language – avoid gendered pronouns and ableist words such as "see" or "view"

## Abbreviations

Do not use e.g. or i.e. Instead, use ‘for example’ or ‘meaning’.

## Alt text for images

Alt text is a short description that replaces an image for users who don’t see the image. They may rely on screen readers or other assistive technologies. This is also good for SEO.

### How screen readers work

Screen readers follow the HTML reading order to read and interpret content for users.

When an image conveys important information, alt text is how users who don’t see the images consume that information. When a screen reader gets to an image, it will read the alt text to describe the content or purpose. Screen readers ignore images with empty alt attributes.

For complex images like graphs or diagrams, consider putting a longer description somewhere else on the page. For example, in a nearby paragraph or through ARIA attributes.

### When to write alt text

- Always write alt text when the image adds meaning.
- Use an empty alt attribute (`alt=""`) if the image doesn’t add meaning. For example, the currency icons below are decorative and do not add meaning. [Learn more about decorative images](https://www.w3.org/WAI/tutorials/images/decorative/).

<img src="https://assets.ubuntu.com/v1/f6d73074-alt-text-entreprise-savings.png" alt="" width="560">

### How to write alt text for images

- Be concise, ideally less than 125 characters.
- Describe the image accurately.
- Add information the image conveys that is not in titles, link text, or paragraphs.

**Instructions for certain types of images:**

- **Card images:** Images inside cards or with links can be tricky. The screen reader will include the card title and link text, so alt text just needs to fill in any gaps. For example below, the card and link text tell the user a Dell XPS 13 Plus is a featured device, the missing information is it’s a laptop.

<img src="https://assets.ubuntu.com/v1/1db0cd77-card-image-featured-device.png" alt="" width="250">

- **Charts and diagrams:** If the chart is already explained in the text, use an empty alt attribute (`alt=""`). For example:

<img src="https://assets.ubuntu.com/v1/0dd0ff70-empty-alt-attribute.png" alt="A screenshot of a page that describes the LTS support cycle of Ubuntu. A table summarizing the information is provided afterwards, with an empty alt-text." width="600">

- **Graphs:** Describe the key trend or insight depicted in the graph so users understand the main data point.

- **Logos:** Just use the brand name (for example, ‘Microsoft Azure,’ not ‘Microsoft Azure logo’). Use empty state if the company name is used in the title or a link label.

---

## Buttons and other CTAs

On Canonical websites (‘Sites’), we have three CTA patterns: primary (green buttons), secondary (white buttons), and tertiary (linked text with a chevron).

<a href="#" class="p-button--positive">Positive</a>
<a href="#" class="p-button">Secondary</a>
<a href="#">Tertiary &rsaquo;</a>

For buttons:

- Start with a verb when the button connects to an action.
- Match language between the CTA and the title.
- Try to use three words or fewer.

Terry Podemjersky, a content designer at Google, notes that buttons that are more than two words long aren’t clicked as much.

For links followed by a chevron:

- Be specific, not generic (for example avoid, ‘learn more’ ‘click here’).
- Use chevrons at the end of a CTA when the information is alone. Do not use chevrons when it’s a list of links with context.

**Examples from Sites:**

<div class="u-fixed-width"><img src="https://assets.ubuntu.com/v1/57b9c63d-buttons-ctas-primary-secondary.png" alt="Example showing a Hero with Primary and Secondary buttons"></div>

<div class="u-fixed-width"><img src="https://assets.ubuntu.com/v1/e38f7945-buttons-ctas-tertiary.png" alt="Example showing tertiary buttons"></div>

## Error messages

Error messages can be more frustrating than other notifications. Support the user when something goes wrong.

- Don’t blame the user (Use ‘incorrect password,’ not, ‘you entered your password incorrectly.’)
- Explain what went wrong.
- Use verb-first, short instructions on how to fix the issue or get help.
- Try to match the title action to the CTA action.

Consider thinking about the specific user and the moment they get this error. Do they have a very technical background and want lots of details? Is there a job to be done and they just need to know how to get there?

## Dates and times

To support international and US audiences, shorten dates with dashes. For example, 10-SEPT-23.

Use numerals for relative dates. For example, ‘2 hours ago’ or ‘Updated 5 days ago’.

## Numbers

Use numerals in the UI when it can help highlight an action and compare two amounts. Use the UK convention for commas and decimals in numbers. For example, £10.00 rather than £10,00.

- **Example from Landscape:**

<img src="https://assets.ubuntu.com/v1/135209d1-numbers-numberals-example-landscape.png" alt="An example of a dialaog in Landscape where the use of numbers is shown" width="400">

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">
This guidance differs from the Copy Style Guide to spell out numerals less than 10. Follow the Copy Style Guide for copy that is not part of the UI.
    </span>
  </p>
</div>

## Videos

When you embed a video in a web page, you don’t need a ‘watch’ CTA as well. Use a clear header to explain to the user what they will get from clicking on the video. For example, what they will learn.

## Writing notifications

There are three basic concepts for UX copy that we use: attributes and objects, and actions.

- **Attributes:** The components that make up a piece of content. For example, a title, description.
- **Objects:** Usually nouns, the things users interact with.
- **Actions:** Often verbs, things users can do with objects.

<div class="u-fixed-width"><img src="https://assets.ubuntu.com/v1/cde94563-lxd-context.png" alt="A capture of a form of the LXD UI, including the app side navigation. The context relevant for an error message is outlined on the screenshot."></div>

We should be specific about objects and actions and not have duplicate terms. Our messages typically include three attributes:

- **Title**
- **Description**
- **CTA**

**Example from Anbox:**

<img src="https://assets.ubuntu.com/v1/e53e5133-reset-dialog.png" alt="Example of a reset dialog in Anbox with contextualized title, description and CTA." width="500">

You may need to consult with your product manager or engineers to clarify the objects and actions in different circumstances. Follow the guidance below to write messages that support users.

### Title

- Use a verb phrase to describe the action that will affect a certain object. In the example above, the action is to ‘reset’ and the object is ‘default values’.
- Do not use punctuation in the title.

### Description

- Add details about the action, try not to add more objects.
- Use punctuation in the description.

**Research says to:**

- Aim for 3-6 words per line, no more than 3 lines per message.
- Avoid asterisks (users don’t really trust them).

### CTAs

Match the text of the primary CTA button to the action in the title.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">
        Our current convention is to make ‘Cancel’ the secondary CTA button. It performs the same action as an ‘X’ icon in the top right corner.
    </span>

  </p>
</div>

## Notification library

The following is a library of messages you can use or edit to your specific needs.

**Error: Unspecified systems error**  
Use this kind of message when we don’t know what caused the error. Adjust the message to match the action the system can’t complete and the options the user has to fix the issue.

**Installation failed**  
We're sorry, but we're not sure what went wrong. You can try restarting your computer and start the installation process again. You can also report the issue.

**Error: No connection**  
Connect to the internet  
We can't load [insert specifics of what we cannot load] without an internet connection. Check your connection and reload.

**Example from App Store:**  
We can't load content in the App Center without an internet connection. Check your connection and reload.

**Error: 404 for Vanilla**  
404 Page not found  
We can’t find the page you’re looking for. File a bug if you think this might be an error.

<img src="https://assets.ubuntu.com/v1/98071afb-page-not-found.png" alt="Example of a 404 page from Vanilla" width="600">

**Confirmation: Contact form submission**  
‘Thank you for contacting us. A member of our team will be in touch shortly.’

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">
Follow the guidance as described for consistency and accessibility across all content.
    </span>

  </p>
</div>
