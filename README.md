# Playwright Framework — GitHub Actions by cyqatester

A web UI test automation framework built with **TypeScript, Playwright, Google Chrome, and the Page Object Model (POM)**. Supports desktop and mobile testing, integrated with GitHub Actions for continuous integration (CI).

## Tech Stack

* **TypeScript** — Test scripting
* **Playwright** — End-to-end UI automation
* **Page Object Model (POM)** — Reusable test architecture
* **Google Chrome** — Desktop browser testing
* **Mobile Emulation** — Responsive UI testing
* **GitHub Actions** — Automated CI test execution

## Prerequisites

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/) or another IDE
* **Playwright dependencies and browsers** — Required packages, browser binaries, and system dependencies for test execution.

## CI/CD with GitHub Actions

The `playwright.yml` workflow automates test execution on configured events, such as pushes and pull requests. It can run desktop and mobile tests and publish test reports as CI artifacts.