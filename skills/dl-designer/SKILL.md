---
name: dl-designer
description: Create dense B2B interface designs and reviewable mini-project prototypes using modern Ant Design. Use when Codex needs to design screens, workflows, tables, filters, forms, modals, dashboards, states, wireframes, clickable mockups, or handoff documentation for analysts and product teams before production implementation.
---

# DL Designer

Use this skill to design data-heavy B2B interfaces as a standalone handoff package. The result should be a mini-project that analysts can open, review, iterate on, and later pass to development.

## Design Baseline

- Use modern Ant Design as the default design system.
- Treat `#58B07A` as the brand primary color.
- Keep the interface dense: business data, decisions, and workflows are more important than decorative visuals.
- Design for a primary working viewport around 1400px. Full HD is a secondary check.
- Prefer standard Ant Design patterns before inventing custom UI.
- Avoid marketing-style hero sections, decorative gradients, oversized cards, large empty states, and excessive whitespace.

## Default Output

Create or update a mini-project, not only a text answer, unless the user explicitly asks for a quick explanation.

Recommended structure:

```text
<feature-name>-design/
  README.md
  design-spec.md
  handoff.md
  package.json
  index.html
  src/
    App.tsx
    mockData.ts
    main.tsx
    styles.ts
  screenshots/
```

Keep the structure lightweight. If a static HTML mockup is enough, use it. If iteration needs realistic Ant Design behavior, create a small React/Vite mockup.

## Documentation Contract

Every handoff package must include:

- `README.md`: how to run/open the mockup, what scenario it covers, and what is intentionally fake.
- `design-spec.md`: screen goal, target users, information hierarchy, layout, components, table columns, filters, forms, actions, states, and responsive behavior.
- `handoff.md`: explicit notes for implementation: what to preserve, what is mock-only, data requirements, open questions, and accepted tradeoffs.

Use stable headings so another agent can consume the result:

```md
# Design Spec
## Screen Goal
## Users And Workflow
## Information Hierarchy
## Layout
## Components
## Tables
## Forms And Filters
## Actions
## States
## Responsive Behavior
## Open Questions
```

Use stable handoff headings so `dl-design-implementer` can map the design to production code:

```md
# Implementation Handoff
## Preserve In Production
## Mock-Only Parts
## Data Contract
## API Assumptions
## Interaction Details
## Validation Rules
## Accessibility And Locale
## Open Questions
## Implementation Risks
```

## Prototype Rules

- Use mock data only. Do not call real APIs.
- Do not implement production state management, permissions, routing, or backend contracts unless the user explicitly asks.
- Include all important UI states: default, loading, empty, error, disabled, validation, success, and long-content overflow.
- Make controls movable and easy to iterate: group filters, action bars, tables, side panels, modals, and drawers clearly.
- Prefer dense Ant Design components:
  - `Table` for operational datasets
  - `Form` for structured input
  - `Descriptions` for read-heavy records
  - `Tabs` for same-entity subviews
  - `Modal`/`Drawer` for focused tasks
  - `Tag`/`Badge` for statuses
  - `Tooltip` for compact clarification
  - `Dropdown` for secondary actions
  - `Space.Compact` for joined filters/actions

## Visual Rules

- Configure brand color through Ant Design tokens when the mockup uses React/Ant Design:
  - `token.colorPrimary: "#58B07A"`
  - `token.colorLink: "#58B07A"`
- Use Ant Design semantic colors for status/error/warning/info/success states.
- Keep spacing on a 4px rhythm: 4, 8, 12, 16.
- Use compact typography: 12-14px body/table text and 14-18px section headings.
- Use fixed or constrained widths for IDs, dates, money, statuses, and row actions.
- Use ellipsis/tooltips for long text instead of breaking table structure.

## Accessibility And Locale

- Preserve keyboard access for primary flows: filters, tables, row actions, drawers, modals, and form submission.
- Show clear focus states and use readable contrast for text, controls, borders, disabled states, and selected rows.
- Label form controls and compact icon actions through visible labels, placeholders, `aria-label`, or tooltips as appropriate.
- Do not encode status or priority by color alone. Pair colors with text, icons, tags, or badges.
- Design with realistic locale pressure: long Russian and English labels, company names, addresses, comments, dates, times, currencies, decimals, and time zones.
- Keep validation and error messages close to the affected control, especially in dense forms, inline edits, drawers, and modals.

## Verification Workflow

Before final delivery of a React/Vite mockup:

1. Run `npm install` when dependencies are not already installed.
2. Run `npm run build` and fix build errors.
3. Start a preview or dev server for visual review.
4. Capture screenshots at minimum `1400x900` and `1920x1080`.
5. Save useful screenshots under `screenshots/`.
6. Check long-content cases: long labels, names, comments, IDs, dates, money values, and table overflow.
7. Check required states in the running mockup: default, loading, empty, error, disabled, validation, success, and long-content overflow.
8. Check drawer and modal overflow, sticky actions, focus behavior, and close/cancel paths.

If the mockup is static HTML, open it in a browser and perform the same viewport, overflow, and state checks manually where applicable.

## Iteration Behavior

When the user asks to move controls, compare variants, or adjust layout:

1. Update the mockup.
2. Update `design-spec.md` if the decision changes the intended UX.
3. Update `handoff.md` if the implementation contract changes.
4. Keep obsolete variants only when the user wants comparison.

## Final Response

At completion, report:

- mini-project path
- how to run/open it
- key design decisions
- known mock-only parts
- open questions for implementation

Read `references/ant-design-b2b.md` for detailed component and density guidance.
