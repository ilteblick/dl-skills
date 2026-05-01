---
name: dl-design-implementer
description: Implement handoffs produced by dl-designer in a host React application. Use when Codex needs to read a DL Designer mini-project, design-spec, handoff docs, screenshots, or mockup code and convert the approved dense Ant Design B2B interface into production UI inside an existing codebase.
---

# DL Design Implementer

Use this skill to convert a `dl-designer` mini-project into production UI in the host application. Treat the prototype as a design reference and handoff artifact, not as production source code.

## Expected Input

Prefer a handoff folder with:

```text
<feature-name>-design/
  README.md
  design-spec.md
  handoff.md
  src/ or index.html
  mockData.ts/json
  screenshots/
```

If documentation is missing, inspect the mockup and reconstruct the intent before editing the host app.

## Core Rule

Preserve the approved UX, density, layout, component choices, states, and behavior. Rebuild them inside the host application's architecture.

Do not blindly copy:

- mock data
- fake API calls
- standalone routing
- prototype-only state
- temporary CSS
- one-file demo structure
- simplified domain types

## Workflow

1. Read `README.md`, `design-spec.md`, and `handoff.md` first.
2. Inspect the running mockup or screenshots if available.
3. Identify the target place in the host app: route, page, widget, component, or feature folder.
4. Inspect nearby production code before editing.
5. Map the design to host-app components, tokens, forms, table patterns, validation, routing, and state conventions.
6. Implement the UI with real project structure.
7. Replace mock data with the host app's existing data source when it is obvious and already present.
8. If data/API mechanics are unclear, do not invent a new backend integration. Isolate the UI and document the missing data contract.
9. Verify the result at about 1400px width.
10. Report what was implemented, what was adapted, and what remains blocked by missing product/API details.

## Implementation Scope

This skill currently focuses on UI implementation from a design handoff. It should not invent broad project mechanics.

Allowed:

- create or update React components
- wire Ant Design tables, filters, forms, modals, drawers, statuses, empty/loading/error states
- use the host application's existing theme/token helpers
- use existing routing/state/data patterns when they are already clear
- add lightweight adapter props/types when needed for UI composition

Avoid unless explicitly requested:

- new API controllers
- new global state architecture
- new data fetching framework
- generated translation catalog edits
- broad refactors unrelated to the design handoff

## Ant Design Rules

- Use the modern Ant Design package chosen by the host application for new interfaces.
- Use Ant Design tokens for brand and semantic colors.
- Keep brand primary as `#58B07A` only through theme/token configuration or existing host token helpers.
- Prefer component props and Ant Design patterns before custom styling.
- Use compact defaults for dense B2B screens: small tables, constrained columns, compact filters, predictable action columns.
- Preserve standard states: loading, empty, error, disabled, validation, success, long-content overflow.

## Handoff Mapping

Translate handoff artifacts like this:

- `design-spec.md` -> product intent and UI contract
- `handoff.md` -> implementation priorities, mock-only parts, data requirements, open questions
- mockup layout -> component hierarchy and visual density
- mock data -> shape hints only, not production data source
- screenshots -> regression/reference checks

## When Details Are Missing

Make reasonable UI assumptions, but be explicit. Prefer an implemented UI shell with clear typed boundaries over fake production behavior.

If the host project lacks the required data flow:

- implement the visual component with props
- keep data requirements in the final response
- avoid wiring fake production requests
- leave minimal TODOs only when they are actionable and tied to missing external decisions

## Final Response

At completion, report:

- source handoff path
- production files changed
- design decisions preserved
- differences from the prototype and why
- verification performed
- remaining integration gaps

Read `references/handoff-implementation.md` for a compact checklist.

See `prompts/implementation-from-design.md` for a ready-to-copy task prompt template.
