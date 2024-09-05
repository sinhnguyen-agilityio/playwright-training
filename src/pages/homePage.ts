import { expect, Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async viewAccounts() {
    const savingAccountEl = this.page.getByRole('heading', { name: 'Kash Savings' });
    await expect(savingAccountEl).toBeVisible({timeout: 10000});
  }

  async viewCards() {
    const physicalCardEl = this.page.getByText('Physical Card');
    await expect(physicalCardEl).toBeVisible();
  }
}
