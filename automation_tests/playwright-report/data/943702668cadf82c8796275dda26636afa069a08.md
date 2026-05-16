# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\carlist\search.spec.js >> Verify search bar is visible and usable
- Location: tests\carlist\search.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "load" event fired
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "www.carlist.my" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - text: "Ray ID:"
        - code [ref=e16]: 9fc8f159e9ef032a
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e19] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e21] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | // Reuse the same helper approach as begenuin/utils/navigation.js
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | /**
  5  |  * Navigate to a URL and wait for the page to be ready.
  6  |  * Beginner-friendly helper used across UI tests.
  7  |  */
  8  | async function goToAndWait(page, url) {
  9  |   await page.goto(url, { waitUntil: 'domcontentloaded' });
> 10 |   await page.waitForLoadState('networkidle');
     |              ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  11 |   await page.waitForSelector('body');
  12 | }
  13 | 
  14 | /**
  15 |  * Scroll down a bit to trigger lazy-loaded / below-the-fold components.
  16 |  */
  17 | async function scrollDown(page, pixels = 800) {
  18 |   await page.evaluate((y) => window.scrollBy(0, y), pixels);
  19 | }
  20 | 
  21 | /**
  22 |  * Assert that at least one element for a set of locators is visible.
  23 |  * Useful when UI text may vary or content is dynamically rendered.
  24 |  */
  25 | async function expectOneVisible(locators, expectFn, options = {}) {
  26 |   const visibilityResults = await Promise.all(
  27 |     locators.map(async (locator) => {
  28 |       try {
  29 |         await expectFn(locator, { timeout: options.timeout ?? 10000 });
  30 |         return true;
  31 |       } catch {
  32 |         return false;
  33 |       }
  34 |     })
  35 |   );
  36 | 
  37 |   const anyVisible = visibilityResults.some(Boolean);
  38 |   if (!anyVisible) {
  39 |     throw new Error('None of the provided locators were visible');
  40 |   }
  41 | }
  42 | 
  43 | module.exports = {
  44 |   goToAndWait,
  45 |   scrollDown,
  46 |   expectOneVisible,
  47 | };
  48 | 
  49 | 
```