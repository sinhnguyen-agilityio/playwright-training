import { expect, Page } from '@playwright/test';
import { config } from '@config/index';

export class LoginPage {
  private page: Page;
  loginUrl = config.HOST + '/login';
  homeUrl = config.HOST + '/accounts'

  constructor(page: Page) {
    this.page = page;
  }

  /** navigate function */
  async navigate() {
    await this.page.goto(this.loginUrl);
  }

  async login(phoneNumber: string) {
    // Find locator
    const phoneInput = this.page.getByPlaceholder('(555) 555-5555');
    const loginBtn = this.page.getByRole('button', { name: 'Login' });
    const warningMsg = this.page.getByText('This field is required.');
    const statusMsg = this.page.getByText('Please use a number that can receive SMS.');

    await expect(statusMsg).toBeVisible();
    await phoneInput.click();
    await loginBtn.click({ force: true });
    await expect(warningMsg).toBeVisible();

    // Handle the action
    phoneInput.fill(phoneNumber);

    // Assert the result and status
    await expect(loginBtn).toBeEnabled();
    await expect(statusMsg).toBeVisible();

    await loginBtn.click();
  }

  async inputOtp(otp: string) {
    const verifyOtpPopup = this.page.getByLabel('modal-title-pin-modal');
    const nextBtn = this.page.getByRole('button', {name: 'next'} );
    const welcomeBackLabel = this.page.getByText('Welcome back!');
    const otpInput0 = this.page.getByTestId('input-0')

    await expect(verifyOtpPopup).toBeVisible();
    await expect(nextBtn).toBeEnabled({enabled: false});

    await otpInput0.pressSequentially('123456');
    await expect(nextBtn).toBeEnabled();

    await this.page.waitForURL(this.homeUrl);

    await expect(welcomeBackLabel).toBeVisible();
  }
}
