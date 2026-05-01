# Prompt: Implement Design Handoff

Use this prompt when a developer wants to implement a `dl-designer` handoff in a production project.

```text
Use $dl-design-implementer.

Implement production UI from this design handoff:
<path-to-dl-designer-handoff>

Mode: production implementation.

Task context:
- Change type: <new feature | existing feature update>
- Target screen/area: <page, widget, route, menu item>
- User workflow: <short workflow>

What to preserve from the design:
- layout, density, and block order
- Ant Design components and states
- tables, filters, forms, and actions
- empty/loading/error/disabled/success states
- behavior around a 1400px viewport

Technical contract:
- DTO/model: <fields or changed model>
- endpoint/data source: <endpoint, selector, props, existing data source, or "unknown yet">
- important enum/status/date rules: <rules>
- integration target: <existing folder/component/page if known>

Constraints:
- Do not copy mock data into production.
- Do not copy the standalone prototype structure.
- Do not invent API/state architecture when the contract is unclear.
- If data is missing, implement the UI with clear props/types and list the missing data contract.
- Follow the host project's AGENTS.md and existing local patterns.

Acceptance criteria:
- UI matches `design-spec.md` and `handoff.md`.
- Implementation lives in the production codebase, not inside the prototype folder.
- Core UI states are implemented.
- UI is checked around a 1400px viewport.
- Final response lists changed files, differences from the prototype, and remaining integration gaps.
```

## Example: New Feature

```text
Use $dl-design-implementer.

Implement production UI from this design handoff:
C:\work\handoffs\payment-calendar-design

Mode: production implementation.

Task context:
- Change type: new feature
- Target screen/area: new menu item "Payment Calendar", route /payment-calendar
- User workflow: open payment list, filter by period/status/company, identify overdue payments, open the related deal

What to preserve from the design:
- compact list layout
- table and column order from design-spec.md
- filters in the top panel
- status tags
- loading/empty/error states
- density for a 1400px viewport

Technical contract:
- DTO:
  PaymentCalendarItemDto {
    id: number;
    dealId: number;
    companyName: string;
    plannedDate: string;
    amount: number;
    currency: string;
    status: "planned" | "overdue" | "paid";
  }
- endpoint/data source: GET /payment-calendar/filter
- important enum/status/date rules: plannedDate arrives from the backend as a string; do not store raw backend date strings in the store/view model if the host project has date conversion rules
- integration target: find the existing layout/menu/router pattern and add the new section next to similar list pages

Constraints:
- Do not edit translation json/generated typings unless the host project explicitly requires it.
- Do not copy mock data into production.
- Follow the host project's AGENTS.md.

Acceptance criteria:
- New screen exists with menu/route integration.
- Table and filters match the handoff.
- API/state layer follows host project patterns.
- Build/lint are checked where possible.
```

## Example: Existing Feature Update

```text
Use $dl-design-implementer.

Implement production UI from this design handoff:
C:\work\handoffs\deal-risk-flags-design

Mode: production implementation.

Task context:
- Change type: existing feature update
- Target screen/area: DealPage, deal risk flags block
- User workflow: see critical and warning risks for the deal, quickly understand reason and creation date

What to preserve from the design:
- risk flags block placement from design-spec.md
- compact status tags
- critical risks sorted above warnings
- empty state when there are no risks
- overflow behavior for long descriptions

Technical contract:
- DealDto now includes:
  riskFlags: Array<{
    id: number;
    type: "payment" | "documents" | "deadline";
    title: string;
    severity: "warning" | "critical";
    createdAt: string;
  }>;
- endpoint/data source: field arrives inside the existing deal load and long-poll update
- important enum/status/date rules: convert createdAt in the converter; do not store raw backend strings in the store
- integration target: existing DealPage; choose exact placement from the current page structure and handoff

Constraints:
- Do not change long-poll mechanics unless necessary.
- Do not add fake requests.
- Do not edit translation json/generated typings unless the host project explicitly requires it.
- Follow the host project's AGENTS.md.

Acceptance criteria:
- DTO/model/converter are updated.
- Risk flags render on DealPage according to the design.
- Full deal replacement from long-poll does not break display.
- Build/lint are checked where possible.
```
