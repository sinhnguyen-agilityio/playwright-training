import { expect, Locator, Page } from '@playwright/test';

export class ReviewTransferPage {
  private page: Page;
  private title: Locator;
  private confirmBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByRole('heading', {
      name: 'Review Transfer',
      exact: true,
    });
    this.confirmBtn = this.page.getByRole('button', {
      name: 'Confirm Transfer',
      exact: true,
    })
  }

  async confirmTransfer(): Promise<void> {
    await expect(this.title).toBeVisible();

    await this.confirmBtn.click()
  }
}
