import { Page } from '@playwright/test';
import { NavigationItem } from '@utils/types';
import { config } from '@config/index';

export class NavigationPage {
  private page: Page;
  private homeUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.homeUrl = config.HOST + '/accounts';
  }

  /**
   * navigate function
   * */
  async navigateTo(name: NavigationItem) {
    this.page.goto(this.homeUrl);
    const item = this.page.getByText(name);

    await item.click();
  }
}
