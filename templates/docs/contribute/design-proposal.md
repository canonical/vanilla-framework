---
wrapper_template: '_layouts/docs.html'
context:
  title: Submit a design proposal
---

**Here’s how to prepare a fully fledged design proposal that we can review and approve to add to our Design System.**

We hold these proposals to the same standard as we do for design work at Canonical, but we are here to walk you through the process. If you just want to make a suggestion for our Design System, you can [submit an idea](/docs/contribute/idea) instead.

Generally speaking, we accept proposals that:

- Are flexible enough to handle many different use cases
- Consider how other designers might use the design in the future
- Match the styles from the design foundations of the Design System (font scale, colors, spacing)
- Consider how [accessibility](https://vanillaframework.io/accessibility) will be taken into account
- Include [research](#the-design-process) such as benchmarking, how you understood the problem, how you came to your solution
- Include clear and detailed [documentation](#document-your-proposal)

## The design process

This process for designing something new for our Design System is similar to any design or UX project:

1. **Discovery** to understand the current state of the component you want to work on
2. **Ideation** to generate requirements or problems for you to address
3. **Validation** for your ideas in a way that matches the complexity and risk of your ideas

Not all of these steps are mandatory, but a proposal can only be approved if it has a clear rationale.

### 1. Discovery

Before submitting an idea, look through the [Vanilla documentation](https://vanillaframework.io/docs) or [the backlog on GitHub](https://github.com/canonical/vanilla-framework/issues) in case we’ve addressed it already.

Once you confirm there’s a need for it, we recommend that you:

- Check articles or guidelines from reputable, external sources to inform your approach.
- Benchmark solutions from other design systems, particularly those from leading organisations. We frequently look at systems like [Carbon](https://carbondesignsystem.com/) (IBM) and [Material Design](https://material.io/) (Google) for inspiration.

### 2. Ideation

Use your preferred method of ideation and the tools you feel comfortable with. At Canonical, we use tools like Miro or FigJam to work together in this phase. We do not require particular evidence of ideation, but appreciate proposals that demonstrate an understanding of possible options.

We recommend taking good notes as you ideate and breaking the issue into smaller questions or requirements so that you can design for each in detail. For example, when designing a side navigation component for applications, we broke the problems down into behaviors such as:

- What does grouping of navigation items look like?
- When do we use expand/collapse behavior versus using secondary navigation?
- What styles are allowed in the secondary navigation?

### 3. Validation

You can choose the level of validation required for your proposal. You should:

- Find the research method that’s most appropriate and efficient for the validation you need. At Canonical we rely on techniques such as interviews, surveys, user testing with tools like [Maze](http://maze.com), and benchmarking (looking at how other organizations solve similar problems).
- Gather concerns and validate them through research to help build consensus. User research can help if there’s disagreement on the solution or if conversations get too hypothetical.
- Document your decisions and keep a list of sources to back them up, especially if your proposal follows common patterns or industry standards. You may not need additional research.

Make sure to keep track of your conclusions and add them to the relevant sections of the design contributions form.

## Suggesting changes to Figma libraries

If your proposal is a component, pattern, or page template, you may need to create Figma components.

1. Check our Figma libraries for [instructions on adding a component](https://www.figma.com/community/file/1435297834108003391). You can use [our Figma template](https://www.figma.com/files/team/989818926921821605/project/354426501/%F0%9F%AA%9A-Design-Systems-Component-Contributions?fuid=802129372533337888) to check what we expect.
2. Create a share link for your file and set permissions to “anyone can view”
3. Add the link to the GitHub issue

The Figma library maintainers at Canonical will then review your work and add it into the shared library

At Canonical, we currently use Figma for our design libraries, but you can also create the design for your proposal with a different tool, such as [Penpot](https://penpot.app/).

## Document your proposal

Documentation works as a ‘user manual’ for your component or pattern. It's your chance to tell users how they should use it. We always aim for high-quality, detailed documentation.

To get started with the minimal documentation, answer the following questions in clear, plain language:

| Questions:                           | Answers:                                     | For example:                                                                                                                                                                                                                                                 |
| :----------------------------------- | :------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What are the parts of the component? | Parts, or ‘anatomy’                          | List of component parts and their names Illustrations to show structure                                                                                                                                                                                      |
|                                      | Variants                                     | Different implementations of the component Examples like blog cards versus Charmhub cards                                                                                                                                                                    |
|                                      | Properties                                   | Configurable properties like size and color Show/hide options Editable text fields                                                                                                                                                                           |
| When should we use the component?    | When to use (best practices)                 | Context and problem-solving scenarios Alternative component options Comparative advantages UI examples showing correct implementation Recommended practices or dos and don’ts Usage limitations (such as primary button frequency) Implementation guidelines |
|                                      | When not to use                              | Scenarios to avoid Team agreements on component usage                                                                                                                                                                                                        |
| How is your contribution accessible? | Show how you meet accessibility requirements | Follow this [accessibility checklist](https://discourse.canonical.com/t/quick-accessibility-audit-for-designers/340)                                                                                                                                         |

## Get your proposal approved

After you submit a proposal, you can expect some back and forth to refine it. Our goal is to consider all the angles and provide clear, actionable feedback and approvals for your proposals. It will take up to 4 weeks to review and approve or suggest additional work on a proposal.

To ensure our decision-making process is clear, we document on GitHub:

- What the problem was and what solutions were suggested
- The conversations and considerations of Canonical Design System Team about the proposal
- Our final decision and reasons behind it

## Next steps

Once your proposal is approved, we will add it to our Figma library and implement it in code. This can of course take time, depending on the assigned [priority level](/docs/contribute/idea#how-we-assign-priority-levels).

## Thank you for contributing!

At Canonical, we believe designers have a lot to [contribute to the open source community](https://canonical.design/open-design). Our Design System grows and improves because of people like you. We know that our standards are high and this process may not be easy – we appreciate your time and look forward to engaging with you to refine your contribution.
