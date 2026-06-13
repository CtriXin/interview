---
name: interview
description: Lightweight elicitation gate for ambiguous tasks, plans, designs, and specs. Propose a vetoable plan first; ask only the few questions that change the outcome, offer defaults, and stop before the interview becomes heavy.
---

# Interview

Use this skill when the user's request would benefit from earlier thinking before execution: unclear goals, broad product ideas, design direction, planning, implementation scope, risky assumptions, or when the user asks to be interviewed, grilled, questioned, or helped clarify a plan.

## Core Idea

Interview is a light question gate. Its job is to get *just enough* clarity to proceed safely — never to run a workshop.

Two principles drive everything below:

- **Propose, don't interrogate.** Default to a vetoable proposal — "I will do A because X; veto or edit if wrong" — not an open-ended "what do you want?". The user stays the decision-maker: approve, edit, or redirect.
- **Every question is a cost.** The better the context you can read yourself (code, docs, prior decisions), the fewer questions you should ask. Inspect first; ask only what the available evidence cannot answer.

## Default Workflow

1. **Orient**
   - Restate the likely goal in one short sentence.
   - Identify what can be discovered locally from code, files, docs, or prior context.
   - Do that discovery before asking the user.

2. **Check Sources of Truth**
   - Compare the user request with nearby code, docs, rules, and prior context.
   - If sources conflict, name the conflict briefly.
   - Prefer the evidence-backed path when the risk is low.
   - Ask one smallest-possible decision question when the conflict changes scope, safety, or compatibility.

3. **Map Uncertainty**
   Rank open questions by whether they change:
   - success criteria or definition of done
   - scope boundaries and non-goals
   - architecture, data model, APIs, or dependencies
   - validation, rollout, migration, or risk
   - product value, target user, workflow, or tone
   - domain terminology, business rules, or decisions future agents should not rediscover

4. **Ask Lightly**
   - Prefer a vetoable proposal over a question: "I will do A because X; veto if wrong."
   - When you must ask, ask the highest-impact question first.
   - Batch 2-3 questions only when they are independent and easy to answer together.
   - Always provide a recommended default or a small set of options.
   - Let the user reply with `defaults` when the recommendations are acceptable.

5. **Parallelize When Useful**
   - While waiting for user answers, explore code/docs if tools or subagents are available.
   - For independent decision branches, ask them in one compact batch.
   - For dependent branches, ask one question at a time.
   - When domain relationships are vague, propose one concrete scenario or edge case to force precision.

6. **Close the Gate**
   Stop interviewing once the next step is safe. Summarize the working brief and proceed, or hand off to the relevant skill.

## Fatigue Escape

If the user says `defaults`, `你定`, `先做`, `快点`, `随便`, or otherwise signals impatience, stop questioning immediately.

Use the recommended defaults, state the assumptions in one short sentence, and proceed. Do not ask a follow-up unless the next step is destructive, irreversible, or high-risk.

## Question Budget

- Quick (default): 0 questions preferred — propose a vetoable plan; ask 1 only if an answer changes the outcome.
- Normal (answers change the outcome): 1-3 questions total.
- Non-trivial tasks: up to 2 rounds.
- High-risk work or explicit "grill me": continue branch-by-branch until major ambiguity is resolved.
- If the user shows fatigue, switch to assumptions plus defaults.

## Question Ledger

Use a tiny ledger only when the task spans multiple turns, multiple skills, or repeated ambiguity.

```markdown
Asked:
Defaulted:
Still unknown:
```

Keep each line short. The ledger prevents repeated questions; it is not a project plan.

## Question Format

Main path — a vetoable proposal (use this first):

```text
我准备 <action>，因为 <reason>。
[备选: <alt> — 没选因为 <why>]
默认这么做，除非你说停 / 改。
```

(English: "I'll do <action> because <reason>. [Alt: <alt> — skipped because <why>] Proceeding unless you stop or change it.")

When you must ask, use this compact format:

```text
我先卡住 N 个会改变方案的问题：

1. [Risk area] Question?
   Recommended: ...

2. [Risk area] Question?
   Recommended: ...

可以直接回复选项，或回复 `defaults` 用推荐值继续。
```

For English-only contexts, use:

```text
I have N plan-shaping questions:

1. [Risk area] Question?
   Recommended: ...

Reply with choices, or `defaults` to use the recommendations.
```

## Ask vs Assume

Ask when the answer affects implementation, sequencing, acceptance criteria, user experience, risk, compatibility, or irreversible choices.

Assume when the answer is low-risk, recoverable, conventional in the repo, discoverable locally, or already covered by a recommended default. State the assumption briefly.

Never ask:

- what files or docs already answer
- broad prompts like "what do you want?"
- preference questions that do not change the outcome
- more than 3 questions in one message
- another question after the user has accepted defaults, unless safety requires it

## Output Brief

When clarity is sufficient, produce a compact brief:

```markdown
Goal:
In scope:
Out of scope:
Key decisions:
Assumptions:
Success criteria:
Next step:
```

Keep the brief short. If implementation should start immediately, include the brief in working notes rather than making it the final answer.

## Modes

**Quick Interview**
Default for small or unclear tasks. Restate the goal, recommend the route, name key assumptions, then proceed unless vetoed — produce a vetoable proposal rather than open-ended questions. Ask 0-1 question only if an answer changes the outcome.

**Design Interview**
Clarify audience, workflow, visual direction, constraints, and success criteria. Avoid generic style questions; offer concrete directions.

**Engineering Interview**
Inspect repo patterns first. Ask only about constraints that code cannot answer: compatibility, rollout, acceptance, non-goals, and risk tolerance.

**Documented Interview**
Use when the interview resolves domain language or durable architectural/product decisions.

- If `CONTEXT-MAP.md` or `CONTEXT.md` exists, read it before asking terminology questions.
- If a project-specific term is resolved, suggest a tiny `CONTEXT.md` entry: canonical term, one-sentence definition, and avoided synonyms.
- Do not create documentation for generic terms, scratch ideas, or implementation details.
- Offer an ADR only when the decision is hard to reverse, surprising without the reason, and based on a real trade-off.
- Keep documentation optional unless the user asked for durable handoff or the repo already uses these docs.

**Grill Mode**
Use only when requested. Walk the decision tree branch-by-branch, recommend answers, and stop when the plan is testable.

## Done Criteria

The interview is complete when:

- success criteria are testable
- scope boundaries are explicit enough
- key assumptions are named
- source-of-truth conflicts are resolved or explicitly defaulted
- the next action is safe, reversible, or clearly approved
- remaining uncertainty is documented instead of blocking progress
