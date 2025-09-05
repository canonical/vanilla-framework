---
wrapper_template: '_layouts/docs.html'
context:
  title: Share an idea
---

**Submit an idea if you can't find something in our Design System. This could be a design idea, a code proposal, or missing documentation. These instructions focus on design contributions.**

The Canonical Design System Team will take around 2 weeks to review and approve or reject your idea.

Before submitting a new idea:

<!-- TODO add link to documentation in Figma whenever available -->

- Review any existing documentation for the pattern or component
<!-- TODO revisit/replace Vanilla-specific references when ready to add contribution process for the new design system -->
- Check if your proposal was already addressed by checking the [backlog](https://github.com/canonical/vanilla-framework/issues)

Once you confirm your idea is new, submit it by creating an issue in the [Vanilla Framework’s GitHub repository](https://github.com/canonical/vanilla-framework/issues/new/choose). You can:

<!-- TODO replace issue templates with new forms -->

- [Propose changes to an existing component](https://github.com/canonical/vanilla-framework/issues/new?template=propose-changes-to-existing-component.md)
- [Propose a new component](https://github.com/canonical/vanilla-framework/issues/new?template=propose-new-component.md)
- [Report a bug](https://github.com/canonical/vanilla-framework/issues/new?template=report-a-bug.md)
- [Start a blank issue](https://github.com/canonical/vanilla-framework/issues/new?template=BLANK_ISSUE) for anything else

The GitHub forms and templates will guide you through what we need for each option. Provide as much detail and context as you can so we can assess your idea.

Our Design System promotes consistency, so if we’ve already solved a problem, we recommend following that solution. If you have concerns or find our solution insufficient, you can open an issue so we can discuss your case.

After you submit an idea on GitHub, the Canonical Design System Team will review your idea, and assign designers who work on similar projects to assess it.

- **If the idea is rejected**, it means you can solve the problem with existing components or by other means, or it is not suited to the Design System.
- **If the idea is approved**, we assign a priority level. This determines how much the Canonical Design System Team can support developing your idea into a proposal.

## What ideas get approved

Valid ideas have most of the following characteristics:

1. **Unique** – Solves a problem not addressed by existing solutions in the Design System
2. **Useful** – Addresses a problem faced by multiple products or teams, not just a niche problem
3. **New** – Is not already listed in the [Vanilla backlog](https://github.com/canonical/vanilla-framework/issues)
4. **Consistent** – Complies with all brand and Design System guidelines, especially for visual elements
5. **Functional** – Provides clear accessibility or usability benefits beyond aesthetics even for visual changes

## How we assign priority levels

If your idea is approved, the Canonical Design System Team will assign a priority level to it.

| Depending on these characteristics:                        | 🔴 High                                                                   | 🟠 Medium                                                                              | 🟡 Low                                                                     |
| :--------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Impacts a bug                                              | Critical bug that prevents teams from using the Design System as intended | Divergence of solutions across products, but it doesn’t block immediate functionality  | Not applicable to critical functionality or bug fixes                      |
| Has strategic gain                                         | High strategic value for the Design System and/or user needs              | High strategic gain for business and/or user needs, but will require a lot of planning | Strategic value is minimal or deferred                                     |
| Complexity of implementation                               | Relatively easy to implement                                              | Moderate to high complexity, requiring detailed planning and execution                 | Can be implemented but without urgent need or substantial benefit          |
| Urgency                                                    | Required by multiple Canonical products and/or sites for ongoing work     | Not urgent but strategically important                                                 | Not urgent and doesn’t provide immediate strategic value                   |
| What you can expect from the Canonical Design System Team: | Allocate available resources to complete the proposal                     | Add to our list of items to work on, you can of course develop on your own             | Unlikely to address within 6 months, you can of course develop on your own |

## Rejected ideas

If your idea is rejected, it’s probably because there are other ways to solve your problem. We understand you may disagree with this outcome, but our goal is to ensure good quality and consistency across our products.

The team will provide a detailed reason for the rejection in GitHub in this case.

## Next steps

Once your idea is approved, we invite you to further develop it so it becomes a [fully fledged proposal](/docs/contribute/design-proposal) that can be incorporated into our Design System.
