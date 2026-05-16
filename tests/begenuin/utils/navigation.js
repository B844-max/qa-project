const { expect } = require('@playwright/test');

/**
 * Navigate to a URL and wait for the page to be ready.
 * Beginner-friendly helper used across UI tests.
 */
async function goToAndWait(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('body');
}

/**
 * Scroll down a bit to trigger lazy-loaded / below-the-fold components.
 */
async function scrollDown(page, pixels = 800) {
  await page.evaluate((y) => window.scrollBy(0, y), pixels);
}

/**
 * Assert that at least one element for a set of locators is visible.
 * Useful when UI text may vary or content is dynamically rendered.
 */
async function expectOneVisible(locators, expectFn, options = {}) {
  const visibilityResults = await Promise.all(
    locators.map(async (locator) => {
      try {
        await expectFn(locator, { timeout: options.timeout ?? 10000 });
        return true;
      } catch {
        return false;
      }
    })
  );

  const anyVisible = visibilityResults.some(Boolean);
  if (!anyVisible) {
    throw new Error('None of the provided locators were visible');
  }
}

module.exports = {
  goToAndWait,
  scrollDown,
  expectOneVisible,
};

