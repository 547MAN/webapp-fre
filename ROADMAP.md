# Roadmap - Task 7

The backend and API modules are complete, so all work can be done independently. Keep the plain starter available until the replacement route/page works.

## Checkpoint 0 - Inspect the product and data contracts

Run the stack and inspect:

- user returned by `authApi`;
- quiz summaries and quiz details;
- game attempt state and answer result;
- progress, history and leaderboard data.

Data flow:

```text
User action -> React page -> API module -> ASP.NET Core -> DTO -> React state -> rendered feedback
```

React owns presentation state. The backend owns authoritative game state.

## Checkpoint 1 - Define the UX structure

Create a navigation map with:

- authentication;
- dashboard/quest map;
- published quiz discovery;
- my quizzes;
- quiz editor;
- battle;
- progress;
- history;
- leaderboard.

For each screen write the user's goal, primary action, empty state, error state and route back. Use one general User role: the same person can create and play.

## Checkpoint 2 - Create the visual system

In `styles/app.css`, define reusable variables for:

- background and panel colours;
- readable foreground/muted text;
- accent, success, warning and danger;
- spacing scale;
- border radius and line colour;
- heading/body type;
- focus indicator.

Build mobile-first. Check contrast and visible keyboard focus before decorative effects.

## Checkpoint 3 - Build the application shell

Create reusable components:

- `AppShell`: brand, navigation, user summary and logout;
- `PageHeader`: title, context and optional action;
- `LoadingState`, `EmptyState`, `ErrorState`;
- `QuizCard`: status, topic, question count, boss indicator and actions.

`App.jsx` should coordinate the active screen; components should not contain endpoint URLs.

## Checkpoint 4 - Authentication and dashboard

Authentication:

- clear login/register modes;
- correct labels and browser input types;
- inline safe error feedback;
- disabled submit while pending;
- demo credentials explained only for local development.

Dashboard:

- make quiz discovery and quiz creation obvious;
- explain the learning loop;
- avoid presenting hard-coded progress as real user data.

## Checkpoint 5 - Quiz discovery and CRUD

Published list:

- searchable title/topic;
- cards with play action and optional boss indicator;
- loading, empty and error states.

My quizzes:

- create, edit, play and delete actions;
- clear published/draft status;
- confirmation before destructive delete.

Editor:

- grouped basic settings, optional boss settings and questions;
- boss fields appear only when enabled;
- radio choice for exactly one correct answer;
- add/remove question controls;
- visible validation and saving state;
- mobile-friendly controls.

Keep `QuizInput` field names aligned with the backend DTO.

## Checkpoint 6 - Design the battle flow

Use `gameApi.start`, `state` and `answer`.

Display:

- current question and answer choices;
- player HP and score;
- immediate correct/wrong feedback and explanation;
- in boss phase only: boss name/HP and three-step streak indicator;
- win, loss or normal completion result.

Disable answers during submission. Request fresh state after feedback. Never reveal `isCorrect` before the response and never calculate official damage locally.

## Checkpoint 7 - Progress and history

Progress should prioritize total XP, completed quizzes, defeated bosses and accuracy. History should use a scannable table or responsive list. Leaderboard should make rank and XP easy to compare without humiliating low-ranked users.

Use semantic headings and table markup. Provide text alternatives to colour-only status.

## Checkpoint 8 - Responsive and accessibility review

Verify at approximately 360 px, 768 px and desktop width:

- no horizontal overflow;
- touch targets are comfortable;
- navigation remains usable;
- forms and battle answers stack logically;
- text is readable at browser zoom;
- keyboard order follows visual order;
- focus is always visible;
- alerts are understandable without colour.

## Checkpoint 9 - User testing

Use `USER-TEST-PLAN.md` with at least three representative tasks:

1. Find and complete a quiz.
2. Create and publish a quiz with optional boss mode.
3. Find progress and explain what the numbers mean.

Observe without coaching. Record completion, errors, comments and time. Prioritize findings by severity, make changes, and document before/after evidence.

## Checkpoint 10 - Handoff

Run the frontend build and repeat the critical user journey. Copy the completed `App.jsx`, pages, components, CSS and user-testing report to the shared repository. Note any API assumptions, but do not copy backend files.
