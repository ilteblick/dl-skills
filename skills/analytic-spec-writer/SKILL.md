---
name: analytic-spec-writer
description: Create uniform developer-ready business analysis specifications for features, integrations, UI workflows, APIs, data models, business rules, validations, errors, acceptance criteria, and open questions. Use when Codex needs to help a business analyst draft, normalize, review, or complete a structured specification for handoff to developers, QA, architects, or product teams.
---

# Analytic Spec Writer

Use this skill to produce consistent business analysis specifications that developers can implement without guessing. Prefer precise tables, numbered rules, explicit assumptions, and open questions over narrative-only descriptions.

Write the specification in the user's language unless they request another language. Keep technical identifiers, enum values, API fields, and database names in their original technical form.

## Workflow

1. Identify the feature, business goal, affected users, systems, and implementation surface.
2. If information is missing, make reasonable assumptions, mark them explicitly, and continue.
3. Produce the specification using the standard structure below.
4. Always include a data model table when the feature creates, changes, reads, imports, exports, or validates structured data.
5. End with open questions, implementation notes, and acceptance criteria.

For a full reusable document skeleton, read `references/spec-template.md`.

## Standard Specification Structure

Use these headings unless the user asks for a different format:

```md
# Specification: <Feature Name>
## 1. Context And Goal
## 2. Scope
## 3. Actors And Systems
## 4. Business Process
## 5. Functional Requirements
## 6. Data Model
## 7. Business Rules
## 8. Validations And Errors
## 9. Integrations And API Contract
## 10. UI/UX Requirements
## 11. Permissions And Audit
## 12. Non-Functional Requirements
## 13. Acceptance Criteria
## 14. Open Questions
## 15. Assumptions
```

Remove sections that are clearly irrelevant only when keeping them would add noise. Keep `Data Model`, `Acceptance Criteria`, `Open Questions`, and `Assumptions` for most specifications.

## Data Model

Represent the data model as a Markdown table. Include one row per field.

| Field | Required | Type/Format | Description | Example |
|---|---:|---|---|---|
| `entity_name` | Yes | string | Business entity name. | `Credit application` |
| `table_name` | Yes | string | Technical table, collection, object, or DTO name. | `credit_application` |
| `field_name` | Yes | string | Technical field name. | `application_status` |
| `field_label` | Yes | string | Business or UI label. | `Application status` |
| `data_type` | Yes | enum/string | Data type or domain type. | `string`, `number`, `date`, `boolean`, `uuid` |
| `required` | Yes | boolean | Whether the value must be present. | `true` |
| `description` | Yes | text | Business meaning of the field. | `Current processing status` |
| `allowed_values` | No | list/table | Allowed enum values or reference values. | `draft`, `submitted`, `approved`, `rejected` |
| `default_value` | No | value/null | Default value if applicable. | `draft` |
| `validation_rules` | No | text/list | Field-level validations. | `Required after submission` |
| `source` | No | string | Origin of the value. | `Client form`, `CRM`, `Scoring API` |
| `owner` | No | string | Owning system or business owner. | `CRM` |
| `notes` | No | text | Additional implementation notes. | `Changed only by backend service` |

### Mandatory Data Model Columns

Every data model table must include these columns:

| Column | Why It Is Mandatory |
|---|---|
| `entity_name` | Connects each field to a business entity. |
| `table_name` | Gives developers the target technical object or storage model. |
| `field_name` | Provides an unambiguous technical identifier. |
| `field_label` | Preserves business terminology and UI language. |
| `data_type` | Determines storage, API serialization, UI controls, and validation. |
| `required` | Defines requiredness for UI, API, and persistence layers. |
| `description` | Removes ambiguity about business meaning. |

If the user provides a different data model format, normalize it to this table and mention any fields that could not be mapped.

## Requirement Rules

Write functional requirements as atomic statements:

```md
REQ-001: The system shall <behavior> when <condition>.
```

Each requirement should include, when relevant:

- trigger or precondition
- main behavior
- result or state change
- affected role/system
- edge cases
- related data fields

Avoid combining multiple behaviors in one requirement. Split create, edit, delete, approval, notification, and integration behavior into separate requirements.

## Business Rules

Write business rules as numbered rules:

```md
BR-001: <Rule>.
```

Clarify priority when rules conflict. Distinguish hard rules from configurable policies.

## Validations And Errors

For validation-heavy features, use a table:

| ID | Field/Action | Condition | Error Message | Blocking | Notes |
|---|---|---|---|---|---|
| `VAL-001` | `<field>` | `<invalid condition>` | `<message>` | `Yes/No` | `<notes>` |

Specify whether each error appears in UI, API response, logs, or monitoring.

## Acceptance Criteria

Use scenario-based criteria:

```md
AC-001: Given <context>, when <action>, then <expected result>.
```

Cover the happy path, permission checks, required validations, integration failure, and audit/logging expectations when applicable.

## Quality Bar

Before finalizing a specification, check that:

- All mandatory data model columns are present.
- Every important business action has at least one requirement.
- Every validation has an expected message or API behavior.
- Every integration names source, target, trigger, payload, and failure behavior.
- Open questions are explicit and do not hide implementation-critical gaps.
- Assumptions are marked as assumptions, not facts.
