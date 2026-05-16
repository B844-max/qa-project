const { test, expect } = require('@playwright/test');

test('Basic API status validation', async ({ request }) => {
  const response = await request.get('https://begenuin.com');
  expect(response.status()).toBe(200);
});

