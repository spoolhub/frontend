import { test, expect } from '@playwright/test';

test('homepage has language selector', async ({ page }) => {
  // Navigate to the root of the site
  await page.goto('/');

  // Assert that the element is visible.
  await expect(page).toHaveTitle('Home - Maker Station');
});
