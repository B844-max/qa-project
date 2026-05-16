const { test, expect } = require('@playwright/test');

const { goToAndWait, scrollDown } = require('./utils/navigation');

test('Verify Get App button visibility', async ({ page }) => {
  await goToAndWait(page, 'https://begenuin.com');

  // The site header is usually above-the-fold, but some CTAs may appear after rendering/scroll.
  await expect(page.getByRole('link', { name: /get app/i })).toBeVisible({ timeout: 20000 });
});


