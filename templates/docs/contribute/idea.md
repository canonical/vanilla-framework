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

### 🔴 High priority

A proposal is assigned high priority based on criteria such as:

- Fixes a critical bug that prevents teams from using the Design System as intended.
- Offers high strategic value for the Design System and/or user needs.
- Is relatively easy to implement.
- Required by multiple Canonical products and/or sites for ongoing work.

The team will allocate available resources to complete the proposal.

### 🟠 Medium priority

A proposal is assigned medium priority based on criteria such as:

- Addresses a divergence of solutions across products, but doesn’t block immediate functionality.
- Has high strategic gain for business and/or user needs, but will require a lot of planning.
- Has moderate to high complexity, requiring detailed planning and execution.
- Not urgent but strategically important.

The team will add your idea to our list of items to work on; you can also develop it on your own.

### 🟡 Low priority

A proposal is assigned low priority based on criteria such as:

- Not applicable to critical functionality or bug fixes.
- Strategic value is minimal or deferred.
- Can be implemented but without urgent need or substantial benefit.
- Not urgent and doesn’t provide immediate strategic value.

Low priority ideas are unlikely to be addressed within 6 months, but you can of course develop them on your own.

<!-- TODO Re-add table when issues fixed in Vanilla -->
<!-- <table class="p-table--mobile-card">
  <thead>
    <tr>
      <th>Depending on these characteristics:</th>
      <th>🔴 High</th>
      <th>🟠 Medium</th>
      <th>🟡 Low</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-heading="Depending on these characteristics:">Impacts a bug</td>
      <td data-heading="🔴 High">Critical bug that prevents teams from using the Design System as intended</td>
      <td data-heading="🟠 Medium">Divergence of solutions across products, but it doesn’t block immediate functionality</td>
      <td data-heading="🟡 Low">Not applicable to critical functionality or bug fixes</td>
    </tr>
    <tr>
      <td data-heading="Depending on these characteristics:">Has strategic gain</td>
      <td data-heading="🔴 High">High strategic value for the Design System and/or user needs</td>
      <td data-heading="🟠 Medium">High strategic gain for business and/or user needs, but will require a lot of planning</td>
      <td data-heading="🟡 Low">Strategic value is minimal or deferred</td>
    </tr>
    <tr>
      <td data-heading="Depending on these characteristics:">Complexity of implementation</td>
      <td data-heading="🔴 High">Relatively easy to implement</td>
      <td data-heading="🟠 Medium">Moderate to high complexity, requiring detailed planning and execution</td>
      <td data-heading="🟡 Low">Can be implemented but without urgent need or substantial benefit</td>
    </tr>
    <tr>
      <td data-heading="Depending on these characteristics:">Urgency</td>
      <td data-heading="🔴 High">Required by multiple Canonical products and/or sites for ongoing work</td>
      <td data-heading="🟠 Medium">Not urgent but strategically important</td>
      <td data-heading="🟡 Low">Not urgent and doesn’t provide immediate strategic value</td>
    </tr>
    <tr>
      <td data-heading="Depending on these characteristics:">What you can expect from the Canonical Design System Team:</td>
      <td data-heading="🔴 High">Allocate available resources to complete the proposal</td>
      <td data-heading="🟠 Medium">Add to our list of items to work on, you can of course develop on your own</td>
      <td data-heading="🟡 Low">Unlikely to address within 6 months, you can of course develop on your own</td>
    </tr>
  </tbody>
</table> -->

## Rejected ideas

If your idea is rejected, it’s probably because there are other ways to solve your problem. We understand you may disagree with this outcome, but our goal is to ensure good quality and consistency across our products.

The team will provide a detailed reason for the rejection in GitHub in this case.

## Next steps

Once your idea is approved, we invite you to further develop it so it becomes a [fully fledged proposal](/docs/contribute/design-proposal) that can be incorporated into our Design System.
