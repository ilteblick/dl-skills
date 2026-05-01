# Handoff Implementation Checklist

Use this checklist when implementing a DL Designer handoff.

## Before Editing

- Read `README.md`, `design-spec.md`, and `handoff.md`.
- Run or inspect the mockup if possible.
- Identify mock-only code and data.
- Inspect the host application's nearby production patterns.
- Decide the target files and component boundaries.

## Preserve From Design

- workflow order
- information hierarchy
- dense 1400px layout
- table columns and relative priority
- filter grouping
- primary and secondary actions
- modal/drawer behavior
- all documented UI states
- Ant Design component choices where practical

## Adapt For Production

- use host app routing and composition
- use host app theme/tokens
- use host app forms and validation conventions
- use existing data/state patterns when clear
- replace mock data with real data only when the source is obvious
- keep missing data contracts explicit

## Avoid

- copying standalone prototype app structure
- shipping mock data as production data
- inventing API/state architecture
- adding broad unrelated refactors
- hiding missing product decisions in hardcoded assumptions

## Verification

- build/typecheck/lint when available and relevant
- inspect at approximately 1400px width
- check loading, empty, error, disabled, success, and overflow states
- compare implemented layout against mockup/screenshots
