import { expect, Page } from '@playwright/test';
import { config } from '@config/index';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async viewAccounts() {
    const savingAccountEl = this.page.locator('div').filter({ hasText: 'Savings'});

    await expect(savingAccountEl).toBeVisible();
  }

  async viewCards() {
    const physicalCardEl = this.page.locator('div').filter({ hasText: 'Physical Card'});

    await expect(physicalCardEl).toBeVisible();
  }
}
