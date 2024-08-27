import { test, expect } from '@playwright/test';
import { PageManager } from '@pages/pageManager';

test.describe('Verify home page', () => {
  test.use({
    storageState: '.auth/user.json',
  });

  test('Verify home page information!', async ({ page }) => {
    /**
     * Initialize the expected page.
     */
    const pm = new PageManager(page);
    await pm.onNavigationPage().navigateTo('Home');

    const welcomeBackLabel = page.getByText('Welcome back!');

    await expect(welcomeBackLabel).toBeVisible();

    await pm.onHomePage().viewCards();
    await pm.onHomePage().viewAccounts();
  });
});
