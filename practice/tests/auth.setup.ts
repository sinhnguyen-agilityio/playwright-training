import { test as setup } from '@playwright/test';
import { config } from '@config/index';
import { PageManager } from '@pages/pageManager';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps.
  const pm = new PageManager(page);
  await pm.onLoginPage().navigate();

  await pm.onLoginPage().login(config.VALID_PHONE);
  await pm.onLoginPage().inputOtp(config.VALID_OTP);

  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});
