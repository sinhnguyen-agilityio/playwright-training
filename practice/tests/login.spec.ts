import { LoginPage } from '@pages/loginPage'
import { test } from '@playwright/test';
import { config } from '@config/index'

test.describe('Verify login feature', () => {
  /**
   * Check the Login functionality.
   * Can the user log in with a valid phone number?
   * What happens when an invalid phone or OTP?
   * What happens when a valid phone and OTP are entered?
   * What happens when an invalid phone or OTP are entered?
   * What happens when the phone are blank and the Login button is clicked?
   * Is the Forgot password? Is the option working as expected?
   * Is every link on the page functioning as expected?
   */
  test('Verify user login success!', async ({ page }) => {
    /**
     * Initialize the expected page.
     */
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    // Hardcode the valid phone number for now
    await loginPage.login(config.VALID_PHONE);
    await loginPage.inputOtp(config.VALID_OTP);
  });
});
