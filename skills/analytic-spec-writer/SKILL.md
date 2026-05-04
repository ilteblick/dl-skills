---
name: analytic-spec-writer
description: Draft or review BA specs, feature requirements, API handoffs, validation rules, acceptance criteria, and developer handoffs. Use for specs, requirements, BRD/SRS, open questions, or BA review. Do NOT use for code implementation or visual design.
allowed-tools: Read, Write, Edit
metadata:
  argument-hint: "<feature description, draft spec, or path to requirements>"
---

# Analytic Spec Writer

Use this skill to produce practical business analysis specifications that developers can implement without guessing. Prefer clarity, concrete decisions, explicit assumptions, and open questions over document ceremony.

Write the specification in the user's language unless they request another language. Keep technical identifiers, enum values, API fields, and database names in their original technical form.

## Category

Treat this as a Documentation & Handoff Template skill. It produces structured implementation handoffs, not code, UI mockups, project plans, or generic product copy.

## Workflow

1. Identify the feature, business goal, affected users, systems, and implementation surface.
2. Choose the lightest useful format: Quick Spec by default, Full Spec only for complex features, integrations, regulated flows, or when the user asks for it.
3. If information is missing, make reasonable assumptions, mark them explicitly, and continue.
4. Remove sections that do not reduce ambiguity. Do not fill sections just because the template contains them.
5. Include data and validation details when the feature creates, changes, reads, imports, exports, or validates structured data.
6. End with acceptance criteria, open questions, assumptions, and developer handoff notes.

For a full reusable document skeleton, read `references/spec-template.md`.

## Argument Handling

- If the argument is a feature description, produce the spec directly from it.
- If the argument is a draft spec or requirements text, use Review Mode first, then provide a cleaned-up spec if requested or clearly useful.
- If the argument is a local file path, read it and base the output on that artifact.
- If the argument is empty or too vague, make reasonable assumptions and list open questions instead of blocking on clarification.

## Output Modes

### Quick Spec

Use this by default for most requests:

```md
# Specification: <Feature Name>
## 1. Goal
## 2. Scope
## 3. User / Business Flow
## 4. Requirements
## 5. Data And Validation
## 6. Integrations / API
## 7. Edge Cases
## 8. Acceptance Criteria
## 9. Open Questions
## 10. Assumptions
## 11. Developer Handoff
```

Remove sections that are clearly irrelevant. For example, skip `Integrations / API` when there is no external or internal service contract, and skip `Data And Validation` when there are no fields or structured data.

### Full Spec

Use this for large, cross-system, regulated, permission-heavy, audit-heavy, or high-risk work:

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
## 16. Developer Handoff
```

### Review Mode

Use this when the user asks to review, check, critique, complete, or improve an existing specification. Focus on:

- missing business decisions
- contradictions
- unclear actors, states, transitions, and ownership
- missing validations, permissions, API behavior, failure behavior, and edge cases
- assumptions that should become open questions
- requirements that are too broad to implement or test

## Gotchas

- Do not expand small requests into a full 15-section document. Use Quick Spec unless the risk or complexity justifies Full Spec.
- Do not treat assumptions as facts. If an assumption affects implementation, put the risk next to it and mirror it in Open Questions when needed.
- Do not write an integration or API section without source, target, trigger, payload, success behavior, and failure behavior.
- Do not write acceptance criteria that only restate the requirement. Each criterion must be testable by QA or a developer.
- Do not hide edge cases inside long prose. Pull state conflicts, retries, duplicates, permissions, empty data, and failed integrations into explicit bullets.

## Data Model

When data details matter, use a Markdown table with one row per field. Quick Spec needs only the fields developers need to implement form controls, storage/API shape, and validation:

| field_name | field_label | data_type | required | description | validation_rules |
|---|---|---|---:|---|---|
| `application_status` | `Application status` | `string` | `true` | Current processing status. | Required after submission. |

For Full Spec, use the expanded data model table in `references/spec-template.md`. Normalize user-provided data formats only as far as useful, and mention fields that cannot be mapped.

## Requirement Rules

Split create, edit, delete, approval, notification, and integration behavior into separate requirements. Use formal IDs only when they help traceability, review comments, or test cases:

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

## Business Rules

Use numbered business rules for Full Spec or when rules will be referenced by QA, API behavior, or configuration:

```md
BR-001: <Rule>.
```

For Quick Spec, bullets are acceptable. Clarify priority when rules conflict.

## Validations And Errors

For validation-heavy features, use a table:

| ID | Field/Action | Condition | Error Message | Blocking | Notes |
|---|---|---|---|---|---|
| `VAL-001` | `<field>` | `<invalid condition>` | `<message>` | `Yes/No` | `<notes>` |

Specify whether each error appears in UI, API response, logs, or monitoring.

In Quick Spec, combine data and validation into one section unless separating them improves readability.

## Edge Cases

Call out edge cases explicitly when they affect behavior, tests, permissions, integrations, data consistency, or user expectations. Do not bury them in long narrative text.

## Acceptance Criteria

Use scenario-based criteria when they add test value:

```md
AC-001: Given <context>, when <action>, then <expected result>.
```

For Quick Spec, use direct bullets when scenarios would be unnecessarily verbose.

## Developer Handoff

End with a short implementation-oriented handoff:

- what should be built
- affected screens, entities, services, APIs, jobs, reports, imports, or exports
- important implementation decisions already made
- decisions still blocked by open questions
- test focus areas

## Output And Artifacts

- Return the specification in the chat by default.
- Create or update a Markdown file by default when the user asks for a handoff artifact, provides an existing file to edit, requests a reusable spec, or the output is too long to be useful inline.
- If writing a file and no path is provided, use `spec-<feature-slug>.md` in the current workspace.
- End file-based work with a short summary of the artifact path and the remaining open questions.

## Quality Bar

Before finalizing a specification, check that:

- The document is no more formal than the task requires.
- Empty or irrelevant sections were removed.
- Data model columns are sufficient for the chosen output mode.
- Every important business action has at least one requirement.
- Every validation has an expected message or API behavior.
- Every integration names source, target, trigger, payload, and failure behavior.
- Important edge cases are explicit.
- Open questions are explicit and do not hide implementation-critical gaps.
- Assumptions are marked as assumptions, not facts.
