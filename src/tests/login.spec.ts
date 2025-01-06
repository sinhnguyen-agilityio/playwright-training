import { test } from '@playwright/test';
import { config } from 'src/config/index';
import { PageManager } from '@pages/pageManager';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onLoginPage().navigate();
    await pm.onLoginPage().login(config.VALID_PHONE);
    await pm.onLoginPage().inputOtp(config.VALID_OTP);
  });
});
