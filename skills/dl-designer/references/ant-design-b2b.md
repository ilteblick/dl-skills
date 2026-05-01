# Ant Design B2B Reference

Use this reference when creating a DL Designer mockup or design spec.

## Component Selection

- `Table`: operational lists, editable grids, selection workflows, sortable/filterable datasets.
- `Descriptions`: dense read-only facts about an entity.
- `Form`: create/edit flows and filter panels.
- `Tabs`: subviews of the same entity.
- `Drawer`: side edit/review flows that preserve table context.
- `Modal`: short blocking tasks or confirmations.
- `Dropdown`: secondary row actions or toolbar overflow.
- `Tag`, `Badge`, `Typography.Text`: statuses, flags, ids, copyable values, and metadata.
- `Alert`: important contextual warnings near affected data.
- `Skeleton`/`Spin`: loading states.
- `Empty`: no-data state inside the owning component.

## Layout Patterns

### List Page

1. Compact title row: entity name, count/status summary, primary action.
2. Dense filter row: search, major selectors, date range, status.
3. Advanced filters behind collapse/dropdown if needed.
4. `Table size="small"` with explicit row key, constrained columns, stable action column, horizontal scroll.
5. Pagination and total count close to the table.

### Entity Page

1. Header: identifier/name, status, primary actions, compact metadata.
2. Main facts: `Descriptions` or compact grid.
3. Work area: tabs or split sections for task-specific content.
4. Drawers/modals only when they preserve context or reduce navigation.

### Edit Flow

1. Keep data entry close to the affected data.
2. Use inline editing only for frequent low-risk edits.
3. Use modal/drawer forms for multi-field edits and validation.
4. Keep Save/Cancel in predictable positions.

## Dense Table Guidance

- id/code: 80-140px
- date: 110-150px
- money/rate: 120-170px
- status: 120-180px
- row actions: 48-120px

Use ellipsis and tooltips for long names, addresses, cargo descriptions, comments, and company names.

## Required States

Design at least:

- default with realistic data
- loading
- empty
- error
- disabled/no-permission where relevant
- validation errors for forms
- success/confirmation feedback
- long text and overflow cases

## Verification Checklist

- Build the mockup before delivery when it is a React/Vite project.
- Review the running mockup at `1400x900` and `1920x1080`.
- Save representative screenshots in the handoff package.
- Check table horizontal scroll, fixed action columns, ellipsis/tooltips, drawer overflow, modal overflow, and sticky action areas.
- Check default, loading, empty, error, disabled/no-permission, validation, success, and long-content states.

## Handoff Quality Bar

A developer should be able to answer these from the package:

- what problem the screen solves
- which users and workflow it supports
- what data is shown and why
- which controls are primary vs secondary
- how the layout behaves around 1400px
- what is fake in the mockup
- what must be preserved in production
- what data contract and API assumptions production must satisfy
- which interaction details, validation rules, and implementation risks matter
