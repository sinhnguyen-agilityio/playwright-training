'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LoginPage = void 0;
const test_1 = require('@playwright/test');
const config_1 = require('../config');
class LoginPage {
  page;
  url = config_1.config.HOST + '/login';
  constructor(page) {
    this.page = page;
  }
  /** navigate function */
  async navigate() {
    await this.page.goto(this.url);
  }
  async login(phoneNumber) {
    // Find locator
    const phoneInput = this.page.getByPlaceholder('(555) 555-5555');
    const loginBtn = this.page.getByRole('button', {
      name: 'Login',
    });
    const warningMsg = this.page.getByText('This field is required.');
    const statusMsg = this.page.getByText(
      'Please use a number that can receive SMS.'
    );
    // await expect(warningMsg).toBeAttached();
    // Handle the action
    phoneInput.fill(phoneNumber);
    // Assert the result and status
    await (0, test_1.expect)(loginBtn).toBeEnabled();
    // await expect(warningMsg).toBeVisible({ visible: false });
    // await expect(statusMsg).toBeVisible();
    loginBtn.click();
  }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=loginPage.js.map
