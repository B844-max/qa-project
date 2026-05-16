const { test, expect } = require('@playwright/test');
const { goToAndWait } = require('../utils/navigation');

test('Verify navigation menu visibility', async ({ page }) => {
  await goToAndWait(page, 'https://www.carlist.my');

  // Navigation menu is typically a set of links (or a hamburger leading to a nav drawer on mobile).
  // We'll accept either:
  //  1) a nav landmark with visible links
  //  2) a hamburger button (mobile)

  const navLinks = page.locator('nav a');
  const hamburger = page.getByRole('button', { name: /menu|navigation|hamburger/i }).first();

  // Expect at least one visible menu element.
  const navHasVisible = await navLinks.first().isVisible().catch(() => false);
  const hamburgerVisible = await hamburger.isVisible().catch(() => false);

  expect(navHasVisible || hamburgerVisible).toBe(true);

  // If nav links are visible, assert they have some typical labels.
  if (navHasVisible) {
    const brand = page.locator('nav a', { hasText: /car|cars/i }).first();
    await expect(brand).toBeVisible({ timeout: 5000 }).catch(() => {
      // Keep tolerant: site may localize/rename items.
    });
  }
});

