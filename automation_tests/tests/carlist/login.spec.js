const { test, expect } = require('@playwright/test');
const { goToAndWait } = require('../utils/navigation');

test('Verify login button navigation', async ({ page }) => {
  await goToAndWait(page, 'https://www.carlist.my');

  // Login link/button usually appears as a top-right auth entry.
  // Role-based approach is generally robust across minor DOM changes.
  const loginLink = page
    .getByRole('link', { name: /log in|login|sign in/i })
    .first();

  await expect(loginLink).toBeVisible({ timeout: 20000 });
  await loginLink.click();

  // Assertion: URL should include login/auth keywords (tolerant to exact path)
  await expect(page).toHaveURL(/login|sign-in|signin|auth/i);
});

