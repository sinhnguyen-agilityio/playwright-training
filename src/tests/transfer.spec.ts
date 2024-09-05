import { test } from '@playwright/test';
import { PageManager } from '@pages/pageManager';

test.describe('Transfer Page', () => {
  test.use({
    storageState: '.auth/user.json',
  });

  test('Verify user is able to transfer the money', async ({ page }) => {
    /**
     * Initialize the expected page.
     */
    const pm = new PageManager(page);

    await pm.onNavigationPage().navigateTo('Transfer');
    await pm.onTransferPage().transfer('Kash Savings', 'Kash Checking', 10, 'Instant');
  });
});
