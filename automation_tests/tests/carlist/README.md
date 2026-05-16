# Carlist Malaysia - Playwright (JS)

## Files
- `homepage.spec.js` - homepage loads, title contains **Carlist**, search bar visible
- `search.spec.js` - search bar visible and simple typing check
- `login.spec.js` - login link/button navigates to auth page
- `navigation.spec.js` - navigation menu (or hamburger) is visible

## Run only Carlist tests
From project root:
```bash
npx playwright test tests/carlist
```

## Generate HTML report
After running tests:
```bash
npx playwright show-report
```

(Report output is under the Playwright default `playwright-report/` folder.)

## Debug failed selectors
- Run headed:
  ```bash
  npx playwright test tests/carlist --headed --project=chromium
  ```
- Add temporary logging / pause:
  - `await page.pause();`
  - `console.log(await page.textContent('body'));`
- Check artifacts in:
  - `test-results/` (screenshots, videos, error-context)

