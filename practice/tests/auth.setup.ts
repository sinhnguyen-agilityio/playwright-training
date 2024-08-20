import { test as setup } from '@playwright/test';
import { config } from '@config/index';
import { LoginPage } from '@pages/loginPage';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps.
  // Replace these actions with your own.
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  // Hardcode the valid phone number for now
  await loginPage.login(config.VALID_PHONE);
  await loginPage.inputOtp(config.VALID_OTP);

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
