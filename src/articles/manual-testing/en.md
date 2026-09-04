# How AI Made Manual Testing Valuable Again

In my previous [article](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/) ("My Experience with AI Tools to Help Create a Mid-Grade Web App"), I briefly mentioned that I fired my automated QA subagent. Now, I'm ready to share the full story of what happened, why it happened, and how I shifted my workflow from automated AI testing to manual human testing.

My journey toward building this web app on my own started with a traditional foundation: the standard Agile SDLC. Agile typically follows a linear pipeline:

> Business Owner has an idea → PM writes a PRD → Developer writes code → QA tests features against documentation.

This means bringing a raw idea to life requires completing each step sequentially; the next stage cannot start until the previous one is done. For years, this setup was my daily work routine. I adopted the same model when building my web app, and early on, everything seemed fine. However, it only remained acceptable until I took a closer look at the logs of each subagent.

Upon inspecting those logs, I realized my QA agent wasn't doing its job as expected. For instance, after I described a feature and the developer agent implemented it, the QA agent would run all the test suites. But if an existing test failed—one unrelated to the new feature—the QA agent simply assumed it wasn't its responsibility to investigate further. It ignored the failure and gave the main orchestrator agent a green light, confirming the app was "stable."

I only caught this because of my own background in the field. As a responsible engineer, if even a single test fails, you have to investigate and make a call. Once you find the failing test and debug it, you generally face three options:

1.  **Update the test:** The logic is outdated and needs a refresh.
2.  **Report a bug:** The test caught a real regression that needs fixing.
3.  **Delete the test:** The feature was intentionally removed or replaced.

The QA agent ignoring these failures was the first red flag. I didn't fire it immediately, hoping it was just a rare hallucination. So, I gave it a second chance.

That second chance backfired. The agent did something completely mind-boggling: it deleted 7 test suites. It left no explanation in the logs, and worse, it didn't bother reporting the deletion. Since the auto-QA agent was running autonomously on its server, I had no choice but to terminate it. I instructed my primary agent to remove all references to the QA subagent, keep the Playwright setup intact, and hand off Playwright to the frontend agent for debugging failed features instead.

Three weeks have passed since then, and my development pace hasn't slowed down at all. As always, my primary focus remains on my "builder bees": the developer agents.

One interesting realization came out of this: orchestrating developer subagents doesn't actually require reading their code line-by-line—it only requires verifying the results once the work is done. The indicators are usually obvious and done manually:

-   **Database:** If storage bloats from a small amount of data, you either have duplicate entries or need schema normalization.
-   **Backend:** If responses are slow, you refactor, switch frameworks, or optimize the language layer.
-   **Frontend:** It's the simplest to verify—the UI must be functional, intuitive, and visually sound.

Does this mean AI testing is useless? Not at all. But there's a catch: automated tests produce no direct output for the end-user and have zero intrinsic user value. Test suites are merely indicators. When the app works fine, they pass silently; when they fail, they demand immediate investigation. To figure out why a test failed, you have to compare the test spec against the PRD. Doing that effectively requires high domain expertise. When an AI hallucinate or misses hidden bugs beneath the surface, those silent failures can cause massive issues for real users.

---

*Read the original article on LinkedIn: [How AI Made Manual Testing Valuable Again](https://www.linkedin.com/pulse/how-ai-made-manual-testing-valuable-again-ilnur-gabitov-ohh9f/)*