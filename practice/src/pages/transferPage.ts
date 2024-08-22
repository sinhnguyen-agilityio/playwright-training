import { expect, Locator, Page } from '@playwright/test';

export class TransferPage {
  private page: Page;
  private title: Locator;
  private subTitle: Locator;
  private fromAccountDropdown: Locator;
  private toAccountDropdown: Locator;
  private amountInput: Locator;
  private methodDropdown: Locator;
  private clearAllBtn: Locator;
  private continueTransferBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByRole('heading', {
      name: 'Transfer',
      exact: true,
    });
    this.subTitle = this.page.getByText('Between your Kash Consumer');
    this.fromAccountDropdown = this.page
      .getByTestId('dropbox-dropdown')
      .locator('div', { hasText: 'From Account' })
      .getByText('Select');
    this.toAccountDropdown = this.page
      .getByTestId('dropbox-dropdown')
      .locator('div', { hasText: 'To Account' })
      .getByText('Select');
    this.amountInput = this.page.getByTestId('amount-input');
    this.methodDropdown = this.page.getByPlaceholder('----Select----');
    this.clearAllBtn = this.page.getByRole('button', { name: 'Clear All' });
    this.continueTransferBtn = this.page.getByRole('button', {
      name: 'Continue Transfer',
    });
  }

  async transfer(
    fromAccount: string,
    toAccount: string,
    amount: number,
    method: string
  ): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.subTitle).toBeVisible();

    // Select fromAccount
    await this.fromAccountDropdown.click();
    await this.page
      .getByTestId('select-option')
      .filter({ hasText: fromAccount })
      .click();

    // Select toAccount
    await this.toAccountDropdown.click();
    await this.page
      .getByTestId('select-option')
      .filter({ hasText: toAccount })
      .click();

    // Input amount
    await this.amountInput.fill(amount.toString());

    // Select method
    const methodDropdownState = await this.methodDropdown.isEnabled();

    if (methodDropdownState) {
      await this.methodDropdown.click();
      await this.page.locator('div').filter({ hasText: method });
    }

    // Transfer money
    await this.continueTransferBtn.click();
    await this.page.waitForURL(
      'https://dev-consumer-banking.agility.codes/transfer/transfer-stack'
    );

    await expect(
      this.page.getByRole('heading', { name: 'Review Transfer' })
    ).toBeVisible();
  }
}
