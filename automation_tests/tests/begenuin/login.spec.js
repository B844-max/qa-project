const { test, expect } = require('@playwright/test');

const { goToAndWait } = require('./utils/navigation');

test('Verify Login button navigation', async ({ page }) => {
  await goToAndWait(page, 'https://begenuin.com');

  const loginButton = page.getByRole('link', { name: /log in/i }).first();
  await expect(loginButton).toBeVisible({ timeout: 20000 });
  await loginButton.click();

  await expect(page).toHaveURL(/login/i);
});


