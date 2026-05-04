# Specification: <Feature Name>

Use this Quick Spec template by default. Remove sections that do not reduce ambiguity.

## 1. Goal

- Business goal:
- Problem being solved:
- Target users:
- Success signal:

## 2. Scope

### In Scope

-

### Out Of Scope

-

## 3. User / Business Flow

1.

## 4. Requirements

- The system shall `<behavior>` when `<condition>`.

Use IDs like `REQ-001` only when traceability is useful.

## 5. Data And Validation

| field_name | field_label | data_type | required | description | validation_rules |
|---|---|---|---:|---|---|
| `<field>` | `<label>` | `<type>` | `<true/false>` | `<meaning>` | `<rules>` |

## 6. Integrations / API

| Source | Target | Trigger | Payload/Data | Success Behavior | Failure Behavior |
|---|---|---|---|---|---|
| `<system>` | `<system>` | `<event>` | `<payload>` | `<behavior>` | `<behavior>` |

## 7. Edge Cases

-

## 8. Acceptance Criteria

- Given `<context>`, when `<action>`, then `<expected result>`.

Use IDs like `AC-001` only when they help QA or review.

## 9. Open Questions

| Question | Owner | Impact |
|---|---|---|
| `<question>` | `<owner>` | `<impact>` |

## 10. Assumptions

| Assumption | Risk If Wrong |
|---|---|
| `<assumption>` | `<risk>` |

## 11. Developer Handoff

- Build:
- Affected screens/entities/services:
- Decisions already made:
- Blocked by open questions:
- Test focus:

---

# Full Spec Extension

Use the full structure only for large, cross-system, regulated, permission-heavy, audit-heavy, or high-risk work.
This section holds the heavier reference tables that should not be loaded into the main skill unless the task needs them.

## Actors And Systems

| Actor/System | Role In Process | Notes |
|---|---|---|
| `<name>` | `<role>` | `<notes>` |

## Business Rules

| ID | Rule | Configurable | Notes |
|---|---|---|---|
| `BR-001` | `<rule>` | `Yes/No` | `<notes>` |

## Validations And Errors

| ID | Field/Action | Condition | Error Message/API Response | Blocking | Notes |
|---|---|---|---|---|---|
| `VAL-001` | `<field_or_action>` | `<condition>` | `<message_or_response>` | `Yes/No` | `<notes>` |

## UI/UX Requirements

| Screen/State | Requirement | Notes |
|---|---|---|
| `<screen>` | `<requirement>` | `<notes>` |

## Permissions And Audit

| Role/Event | Allowed Action Or Audit Event | Notes |
|---|---|---|
| `<role_or_event>` | `<action_or_event>` | `<notes>` |

## Non-Functional Requirements

| Category | Requirement | Target |
|---|---|---|
| Performance | `<requirement>` | `<target>` |

## Expanded Data Model

| entity_name | table_name | field_name | field_label | data_type | required | description | allowed_values | default_value | validation_rules | source | owner | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<entity>` | `<table_or_object>` | `<field>` | `<label>` | `<type>` | `<true/false>` | `<meaning>` | `<values>` | `<default>` | `<rules>` | `<source>` | `<owner>` | `<notes>` |
