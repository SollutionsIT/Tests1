import { defineConfig, devices } from '@playwright/test';

  // Добавляем поддержку переменных окружения из файла .env для хранения конфиденциальных данных, таких как учетные данные для тестирования.
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  // Папка, где лежат все наши тесты
  testDir: './tests',
  
  // Запускать ли тесты параллельно в одном файле (true ускоряет прогон)
  fullyParallel: false,
  
  // Запрещаем использовать test.only на CI/CD, чтобы случайно не пропустить остальные тесты
  forbidOnly: !!process.env.CI,
  
  // Количество перезапусков упавшего теста (0 локально, 2 раза на CI/CD сервере)
  retries: process.env.CI ? 2 : 0,
  
  // Количество потоков (workers). На CI используем 1 для стабильности, локально - максимум.
  workers: process.env.CI ? 1 : undefined,
  
  // Настройка красивых отчетов. Генерируем HTML и список в терминале.
  reporter: [
    ['html'],
    ['list']
  ],
  
  // Глобальные настройки для всех тестов
  use: {
    // Базовый URL. Теперь в тестах мы будем писать просто page.goto('/login')
    baseURL: 'https://test.fylpi.at',

    // Сбор трейсов (логов, скриншотов и видео) ТОЛЬКО при падении теста. 
    // Экономит место, но дает всю инфу для дебага.
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
 
    // Автоматическое ожидание элементов (увеличим до 10 секунд для надежности)
    actionTimeout: 10000,
    launchOptions: {
      // Замедляет КАЖДОЕ действие Playwright на 500 миллисекунд (полсекунды)
      slowMo: 500,
  }
}
  ,

  // Настройка браузеров, в которых будем гонять тесты
  projects: [
  {
    name: 'setup',
    testMatch: 'tests/setup/auth.setup.ts', // Точный путь к нашему файлу
  },
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      storageState: '.auth/user.json', // Путь к сохраненному состоянию
    },
    dependencies: ['setup'],
  },
],
    // Пока закомментируем Firefox и Safari для ускорения разработки. 
    // Раскомментируешь позже, когда тесты будут стабильны.
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
 
});