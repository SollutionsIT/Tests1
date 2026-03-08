import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  // Локаторы, специфичные только для главной страницы fylpi.at
  readonly mainHeader: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page); // Передаем page в родительский класс BasePage
    
    // Инициализируем локаторы. 
    // Замени эти селекторы на реальные, когда накликаешь их через панель Playwright!
    this.mainHeader = page.locator('h1');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
  }

  // Метод: открыть именно главную страницу (URL подтянется из конфига)
  async open() {
    await this.visit('/');
  }

  // Метод: кликнуть на логин
  async goToLogin() {
    await this.loginButton.click();
  }
}