import { expect, Locator, Page } from '@playwright/test';
import { config } from 'src/config/index';

export class LoginPage {
  private page: Page;
  private loginUrl: string;
  private homeUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.loginUrl = config.HOST + '/login';
    this.homeUrl = config.HOST + '/accounts';
  }

  /** navigate function */
  async navigate() {
    await this.page.goto(this.loginUrl);
  }

  async login(phoneNumber: string) {
    // Find locator
    const phoneInput = this.page.getByPlaceholder('(555) 555-5555');
    const loginBtn = this.page.getByRole('button', {
      name: 'Login',
    });
    const warningMsg = this.page.getByText('This field is required.');
    const statusMsg = this.page.getByText(
      'Please use a number that can receive SMS.'
    );

    await expect(statusMsg).toBeVisible();
    await phoneInput.click();
    await loginBtn.click({
      force: true,
    });
    await expect(warningMsg).toBeVisible();

    // Handle the action
    phoneInput.fill(phoneNumber);

    // Assert the result and status
    await expect(loginBtn).toBeEnabled();
    await expect(statusMsg).toBeVisible();

    await loginBtn.click();
  }

  async verifyUserNotFound() {
    const loginBtn = this.page.getByRole('button', {
      name: 'Login',
    });
    const warningMsg = this.page.getByText('User not found in the system. Please check again.');

     // Assert the result and status
     await expect(warningMsg).toBeVisible();
     await expect(loginBtn).toBeEnabled({enabled: false});
  }

  async inputOtp(otp: string) {
    const nextBtn: Locator = this.page.getByRole('button', {
      name: 'next',
    });
    const welcomeBackLabel: Locator = this.page.getByText('Welcome back!');
    const otpInput0: Locator = this.page.getByTestId('input-0');

    await expect(nextBtn).toBeEnabled({
      enabled: false,
    });

    await otpInput0.pressSequentially(otp);

    await this.page.waitForURL(this.homeUrl);

    await expect(welcomeBackLabel).toBeVisible();
  }
}
