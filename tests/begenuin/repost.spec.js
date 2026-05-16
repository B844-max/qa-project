const { test, expect } = require('@playwright/test');

const { goToAndWait, scrollDown } = require('./utils/navigation');

test('Verify Repost button exists', async ({ page }) => {
  await goToAndWait(page, 'https://begenuin.com');

  await scrollDown(page, 1500);

  // Sometimes repost is a link or button; accept either.
  const repostByText = page.locator('text=/repost/i');
  await expect(repostByText.first()).toBeVisible({ timeout: 20000 });
});


