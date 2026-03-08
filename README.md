# 🚀 Example - E2E Test Automation Framework | fylpi.at

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📌 About
This repository is a modern framework for end-to-end (E2E) automated testing of the **fylpi.at** web application. The project demonstrates Middle QA Automation approaches using rigorous architecture, design patterns, and continuous integration.

## 🛠 Technology stack
* **Framework:** Playwright
* **Language:** TypeScript
* **Design pattern:** Page Object Model (POM)
* **Data generation:** @faker-js/faker (dynamic test data)
* **Environment configuration:** dotenv (secure credential storage)
* **CI/CD:** GitHub Actions (automatic runs and report publishing)

## 🏗 Project architecture
The project is divided into logical layers for ease of maintenance and scaling:
* `tests/ui/` — UI auto-tests written in readable and understandable language.
* `pages/` — Page Object classes (encapsulation of locators and interaction methods).
* `utils/` — auxiliary functions (data generators, helpers).
* `playwright.config.ts` — global configuration (timeouts, retries, parallelism).

## 🚀 How to run locally
Ensure that you have [Node.js](https://nodejs.org/) (version 18+) installed.
Clone the repository and install dependencies:
```bash
git clone [https://github.com/ТВОЙ_ЛОГИН/fylpi-auto-tests.git](https://github.com/ТВОЙ_ЛОГИН/fylpi-auto-tests.git)
cd fylpi-auto-tests
npm install
npx playwright install --with-deps

#Run all tests (Headless mode):
npx playwright test

#Run with UI:
npx playwright test --ui

#View HTML Report:
npx playwright show-report


# 🚀 Example - E2E Test Automation Framework | fylpi.at

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📌 About
Данный репозиторий представляет собой современный фреймворк для сквозного (E2E) автоматизированного тестирования веб-приложения **fylpi.at**. Проект демонстрирует подходы уровня Middle QA Automation с использованием строгой архитектуры, паттернов проектирования и непрерывной интеграции.

## 🛠 Технологический стек
* **Фреймворк:** Playwright
* **Язык:** TypeScript
* **Паттерн проектирования:** Page Object Model (POM)
* **Генерация данных:** @faker-js/faker (динамические тестовые данные)
* **Конфигурация среды:** dotenv (безопасное хранение кредов)
* **CI/CD:** GitHub Actions (автоматические прогоны и публикация отчетов)

## 🏗 Архитектура проекта
Проект разделен на логические слои для удобства поддержки и масштабирования:
* `tests/ui/` — UI автотесты, написанные читаемым и понятным языком.
* `pages/` — классы Page Object (инкапсуляция локаторов и методов взаимодействия).
* `utils/` — вспомогательные функции (генераторы данных, хелперы).
* `playwright.config.ts` — глобальная конфигурация (таймауты, ретраи, параллельность).

## 🚀 Как запустить локально
Убедитесь, что у вас установлен [Node.js](https://nodejs.org/) (версия 18+).
Склонируйте репозиторий и установите зависимости:
```bash
git clone [https://github.com/ТВОЙ_ЛОГИН/fylpi-auto-tests.git](https://github.com/ТВОЙ_ЛОГИН/fylpi-auto-tests.git)
cd fylpi-auto-tests
npm install
npx playwright install --with-deps


#Запуск всех тестов (Headless mode):
npx playwright test

#Запуск с UI (визуальный режим):
npx playwright test --ui

#Просмотр HTML-отчета после прогона:
npx playwright show-report
