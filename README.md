# Become a Wizzard - Freyr's independent workspace

This repository is a runnable learning environment for **Freyr Terje Borg**.

## Your responsibility

- **Task 7:** user-interface design, user-experience design, user testing and related writing.

The ASP.NET Core API, SQLite database, authentication, business rules and AJAX modules are supplied. The polished interface is deliberately absent. A plain functional starter demonstrates the available data without solving your design task.

## Run the complete dependency stack

Terminal 1:

```bash
dotnet run --project server/BecomeAWizzard.Api
```

Terminal 2:

```bash
cd client
npm ci
npm run dev
```

Open `http://localhost:5173` and use:

- E-mail: `demo@wizard.local`
- Password: `Wizard123!`

## Start here

Read [ROADMAP.md](ROADMAP.md) and [USER-TEST-PLAN.md](USER-TEST-PLAN.md). Build pages in `client/src/pages/`, reusable elements in `components/`, and the visual system in `styles/app.css`.

## Important boundaries

- Use React with JavaScript/JSX, Vite, React Bootstrap and Bootstrap only.
- Consume data through the supplied modules in `client/src/api/`.
- Do not calculate official score, HP, correctness or boss damage in React.
- Boss mode must appear only when enabled by quiz data.
- Preserve loading, empty, success and error states on every data-driven page.
- Design for desktop and mobile keyboard/touch use.

## Definition of done

- Registration/login and global navigation are clear.
- Users can discover, search, create, edit, publish and delete quizzes.
- Optional boss settings are understandable in the editor.
- Battle feedback explains correct/wrong answers, HP, score and streak.
- Progress, history and leaderboard are readable.
- Responsive and keyboard behaviour is verified.
- At least one planned user-test round is documented with findings and resulting changes.
