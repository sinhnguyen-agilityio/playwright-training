import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { HomePage } from './homePage';
import { NavigationPage } from './navigationPage';
import { TransferPage } from './transferPage';
import { ReviewTransferPage } from './reviewTransferPage';
import { TransferStatusPage } from './transferStatusPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;
  private readonly transferPage: TransferPage;
  private readonly reviewTransferPage: ReviewTransferPage;
  private readonly transferStatusPage: TransferStatusPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
    this.transferPage = new TransferPage(this.page);
    this.reviewTransferPage = new ReviewTransferPage(this.page);
    this.transferStatusPage = new TransferStatusPage(this.page);
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

  onReviewTransferPage() {
    return this.reviewTransferPage;
  }

  onTransferStatusPage() {
    return this.transferStatusPage;
  }
}
