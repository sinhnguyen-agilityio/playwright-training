import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { HomePage } from './homePage';
import { NavigationPage } from './navigationPage';
import { TransferPage } from './transferPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;
  private readonly transferPage: TransferPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
    this.transferPage = new TransferPage(this.page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onHomePage() {
    return this.homePage;
  }

  onNavigationPage() {
    return this.navigationPage;
  }

  onTransferPage() {
    return this.transferPage;
  }
}
