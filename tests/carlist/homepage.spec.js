const { test, expect } = require('@playwright/test');
const { goToAndWait } = require('../utils/navigation');

test('Verify homepage loads successfully + title contains Carlist', async ({ page }) => {
  await goToAndWait(page, 'https://www.carlist.my');

  // Verify page title contains "Carlist" (case-insensitive)
  await expect(page).toHaveTitle(/carlist/i);

  // Verify search bar visibility
  // Using role-based locator first (more stable than CSS)
  const searchInput = page.getByRole('searchbox').first();
  await expect(searchInput).toBeVisible({ timeout: 20000 });
});

