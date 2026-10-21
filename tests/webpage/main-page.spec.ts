import { test } from "@playwright/test";
import { MainPage } from "../../src/pages/MainPage";

test("Go to Restful-api.dev site", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.expectLoaded();
});

test("Go to View Endpoints", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.openEndpoints();
});

test("Select Public Endpoints", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.openEndpoints();
  await mainPage.selectPublicEndpoints();
});
