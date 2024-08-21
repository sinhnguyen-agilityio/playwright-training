import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { HomePage } from './homePage';
import { NavigationPage } from './navigationPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onHomePage() {
    console.log('123d12345678901234567890123456789012345678901234567890123456789gdsgdfsgffffffffdfdsafdsfasfsfsadsssssssssss345678904567895678956789678967')
    return this.homePage;
  }

  onNavigationPage() {
    return this.navigationPage;
  }
}
