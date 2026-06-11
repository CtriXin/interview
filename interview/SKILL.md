---
name: interview
description: Lightweight elicitation gate for ambiguous tasks, plans, designs, and specs. Ask high-impact questions early, batch independent questions when useful, offer defaults, and stop before the interview becomes heavy.
---

# Interview

Use this skill when the user's request would benefit from earlier thinking before execution: unclear goals, broad product ideas, design direction, planning, implementation scope, risky assumptions, or when the user asks to be interviewed, grilled, questioned, or helped clarify a plan.

## Core Idea

Interview is a light question gate. It borrows the best parts of:

- `grill-me`: stress-test the decision tree.
- `ask-plan-questions`: ask only questions that change the plan.
- `requirements-discovery`: clarify users, value, scope, and acceptance criteria.
- `clarification`: inspect available context in parallel instead of asking what the repo can answer.

Do not turn every task into a workshop. The goal is to get enough clarity to proceed safely.

## Default Workflow

1. **Orient**
   - Restate the likely goal in one short sentence.
   - Identify what can be discovered locally from code, files, docs, or prior context.
   - Do that discovery before asking the user.

2. **Map Uncertainty**
   Rank open questions by whether they change:
   - success criteria or definition of done
   - scope boundaries and non-goals
   - architecture, data model, APIs, or dependencies
   - validation, rollout, migration, or risk
   - product value, target user, workflow, or tone

3. **Ask Lightly**
   - Ask the highest-impact question first.
   - Batch 2-3 questions only when they are independent and easy to answer together.
   - Always provide a recommended default or a small set of options.
   - Let the user reply with `defaults` when the recommendations are acceptable.

4. **Parallelize When Useful**
   - While waiting for user answers, explore code/docs if tools or subagents are available.
   - For independent decision branches, ask them in one compact batch.
   - For dependent branches, ask one question at a time.

5. **Close the Gate**
   Stop interviewing once the next step is safe. Summarize the working brief and proceed, or hand off to the relevant skill.

## Question Budget

- Default: 1-3 questions total.
- Non-trivial tasks: up to 2 rounds.
- High-risk work or explicit "grill me": continue branch-by-branch until major ambiguity is resolved.
- If the user shows fatigue, switch to assumptions plus defaults.

## Question Format

Use this compact format:

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

Ask when the answer affects implementation, sequencing, acceptance criteria, user experience, risk, or irreversible choices.

Assume when the answer is low-risk, recoverable, conventional in the repo, or discoverable locally. State the assumption briefly.

Never ask:

- what files or docs already answer
- broad prompts like "what do you want?"
- preference questions that do not change the outcome
- more than 3 questions in one message

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
Use for small unclear tasks. Ask 1-2 questions or choose defaults.

**Design Interview**
Clarify audience, workflow, visual direction, constraints, and success criteria. Avoid generic style questions; offer concrete directions.

**Engineering Interview**
Inspect repo patterns first. Ask only about constraints that code cannot answer: compatibility, rollout, acceptance, non-goals, and risk tolerance.

**Grill Mode**
Use only when requested. Walk the decision tree branch-by-branch, recommend answers, and stop when the plan is testable.

## Done Criteria

The interview is complete when:

- success criteria are testable
- scope boundaries are explicit enough
- key assumptions are named
- the next action is safe, reversible, or clearly approved
- remaining uncertainty is documented instead of blocking progress
