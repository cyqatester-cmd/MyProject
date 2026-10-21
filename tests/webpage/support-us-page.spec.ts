import { test } from "@playwright/test";
import { SupportUsPage } from "../../src/pages/SupportUsPage";
import { MainPage } from "../../src/pages/MainPage";

test("Go to Support Us Page", { tag: '@desktop' } , async ({ page }) => {
  await page.goto("/");
  const supportPage = new SupportUsPage(page);
  await supportPage.openFromHome();
  await supportPage.expectLoaded();
});

test("Go to Support Us Page - Mobile", { tag: '@mobile' } , async ({ page }) => {
  await page.goto("/");
  const supportPage = new SupportUsPage(page);
  const mainPage = new MainPage(page);
  await mainPage.selectHamburgerIconMobile();
  await supportPage.openFromHome();
  await supportPage.expectLoaded();
});
