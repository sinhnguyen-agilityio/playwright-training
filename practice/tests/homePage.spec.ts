import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/homePage';

test.describe('Verify home page', () => {
  test('Verify home page information!', async ({ page }) => {
    /**
     * Initialize the expected page.
     */
    const homePage = new HomePage(page);
    await homePage.navigate();

    const welcomeBackLabel = page.getByText('Welcome back!');

    await expect(welcomeBackLabel).toBeVisible();
  });
});
