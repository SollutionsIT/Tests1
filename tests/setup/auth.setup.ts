import { test as setup, expect } from '@playwright/test';
import path from 'path';

// Импортируем ваши Page Objects
// (Пути указаны с учетом того, что auth.setup.ts лежит в папке tests)
import { MainPage } from '../../pages/MainPage';
// Если у вас есть отдельный класс для страницы авторизации, импортируйте и его:
// import { LoginPage } from '../pages/LoginPage';

// Указываем путь для сохранения слепка авторизации в корне проекта
const authFile = path.join(__dirname, '../../.auth/user.json');

setup('Глобальная авторизация и принятие куки', async ({ page }) => {
  // Инициализируем страницы
  const mainPage = new MainPage(page);
  // const loginPage = new LoginPage(page); // раскомментируйте, если есть такой класс

  // 1. Открываем главную страницу
  await mainPage.visit('/'); 

  // 2. Принимаем куки
  const acceptCookiesBtn = page.getByRole('button', { name: 'Alle akzeptieren' });
  // Добавляем ожидание видимости, так как баннеры часто "выезжают" с анимацией
  await acceptCookiesBtn.waitFor({ state: 'visible' }); 
  await acceptCookiesBtn.click();

 // 3. Переходим на страницу логина
  await mainPage.goToLogin();

 // 4. Проходим авторизацию
  // Ищем поле Email по его плейсхолдеру
  await page.getByPlaceholder('johnsmith@email.at').fill(process.env.TEST_USER_EMAIL!);
  
  // Поле пароля почти всегда имеет правильный тип, так что оставляем его
  await page.locator('input[type="password"]').fill(process.env.TEST_USER_PASSWORD!);
  
  // Нажимаем кнопку Anmelden
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // 5. ОЖИДАНИЕ УСПЕШНОГО ВХОДА (ОЧЕНЬ ВАЖНО!)
  // Замените 'Sign out' на реальное название кнопки выхода, которая появится после логина
   await expect(page.getByRole('button', { name: 'Abmeldung' })).toBeVisible();

  // 6. Сохраняем состояние (куки и токены) в файл
  await page.context().storageState({ path: authFile });
});