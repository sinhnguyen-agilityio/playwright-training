import { test } from '@playwright/test';
import { config } from '@config/index'
import { PageManager } from '@pages/pageManager';

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
    const pm = new PageManager(page);
    
    await pm.onLoginPage().navigate();
    await pm.onLoginPage().login(config.VALID_PHONE);
    await pm.onLoginPage().inputOtp(config.VALID_OTP);
  });
});
