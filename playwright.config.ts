import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }], ["github"]],
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: "https://restful-api.dev/",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "api-tests",
      testDir: "./tests/api",
      use: {
        baseURL: "https://api.restful-api.dev",
        extraHTTPHeaders: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    },
    {
      name: "chromium-desktop",
      testDir: "./tests/webpage",
      grepInvert: /@mobile/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      testDir: "./tests/webpage",
      grepInvert: /@desktop/,
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "mobile-safari",
      testDir: "./tests/webpage",
      grepInvert: /@desktop/,
      use: { ...devices["iPhone 13"] },
    },
  ],
});
