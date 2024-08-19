import { expect, Page } from '@playwright/test';
import { config } from '@config/index';

export class HomePage {
  private page: Page;
  private url: string = config.HOST + '/accounts'

  constructor(page: Page) {
    this.page = page;
  }

  /** navigate function */
  async navigate() {
    await this.page.goto(this.url);
  }
}
