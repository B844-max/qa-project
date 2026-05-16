# QA Automation Project (Playwright - JS)

This project contains Playwright tests for **BeGenuin** and **Carlist** websites.

## Prerequisites
- Node.js >= 18
- Run once:
  ```bash
  npm install
  npx playwright install
  ```

## Run tests
- Run all tests:
  ```bash
  npx playwright test
  ```

- Run a single file:
  ```bash
  npx playwright test tests/getapp.spec.js
  ```

## Reports (HTML)
Playwright generates an HTML report automatically.
- After running tests you’ll see a line like:
  `Serving HTML report at http://localhost:xxxx`

## Screenshots / Videos on failure
Configured in `playwright.config.js`:
- `screenshot: 'only-on-failure'`
- `video: 'retain-on-failure'`

Artifacts are stored under `test-results/` (and `playwright-report/`).

## Recommended folder structure
```text
qa-automation-project/
  tests/
    api.spec.js
    getapp.spec.js
    login.spec.js
    creatorbadge.spec.js
    repost.spec.js
    utils/
      navigation.js
  playwright.config.js
  README.md
```

## Debugging tips
- Use `npx playwright test --headed` to see the browser.
- Use `page.pause()` inside a test for interactive debugging.
- Print DOM text when selectors fail:
  `console.log(await page.textContent('body'))`

