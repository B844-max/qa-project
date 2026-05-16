const { test, expect } = require('@playwright/test');

const { goToAndWait, scrollDown } = require('./utils/navigation');

test('Verify Become Creator badge visibility', async ({ page }) => {
  await goToAndWait(page, 'https://begenuin.com');

  // Scroll to trigger any below-the-fold CTA/badge.
  await scrollDown(page, 1000);

  // UI may vary; keep flexible text matcher.
  const badge = page.locator('text=/become a creator/i');
  await expect(badge.first()).toBeVisible({ timeout: 20000 });
});


