# DL Skills

Codex skills for designing and implementing dense B2B interfaces with Ant Design.

## Skills

- `dl-designer`: creates reviewable mini-project prototypes and handoff documentation for dense Ant Design B2B interfaces.
- `dl-design-implementer`: implements approved `dl-designer` handoffs inside an existing React application.
- `analytic-spec-writer`: creates uniform developer-ready business analysis specifications with mandatory data model tables.

## Install

Install all skills from this repository:

```powershell
python path\to\install-skill-from-github.py --repo ilteblick/dl-skills --path skills/dl-designer skills/dl-design-implementer skills/analytic-spec-writer
```

Or install a single skill:

```powershell
python path\to\install-skill-from-github.py --repo ilteblick/dl-skills --path skills/dl-designer
python path\to\install-skill-from-github.py --repo ilteblick/dl-skills --path skills/dl-design-implementer
python path\to\install-skill-from-github.py --repo ilteblick/dl-skills --path skills/analytic-spec-writer
```

Restart Codex after installation so the new skills are discovered.

## Usage

```text
Use $dl-designer to create a dense Ant Design B2B interface mockup project.
```

```text
Use $dl-design-implementer to implement a DL Designer mockup in the host application.
```

```text
Use $analytic-spec-writer to create a structured developer-ready business analysis specification.
```

## Structure

```text
skills/
  dl-designer/
    SKILL.md
    agents/openai.yaml
    references/
  dl-design-implementer/
    SKILL.md
    agents/openai.yaml
    prompts/
    references/
  analytic-spec-writer/
    SKILL.md
    agents/openai.yaml
    references/
```

## Validation

Validate each skill with the Codex `skill-creator` helper:

```powershell
python path\to\quick_validate.py skills/dl-designer
python path\to\quick_validate.py skills/dl-design-implementer
python path\to\quick_validate.py skills/analytic-spec-writer
```
