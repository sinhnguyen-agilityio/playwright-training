import { expect, Locator, Page } from '@playwright/test';

export class TransferStatusPage {
  private page: Page;
  private title: Locator;
  private returnHomeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByRole('heading', {
      name: 'Transfer Successful.',
      exact: true,
    });
    this.returnHomeBtn = this.page.getByRole('button', {
      name: 'Return Home',
      exact: true,
    })
  }

  async returnHome() {
    await expect(this.title).toBeVisible();

    await this.returnHomeBtn.click()
  }
}
