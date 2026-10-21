import { test } from "@playwright/test";
import { RestFundamentalsPage } from "../../src/pages/RestFundamentalsPage";
import { MainPage } from "../../src/pages/MainPage";

test("Go to Rest Fundamentals Page", { tag: '@desktop' } , async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.page.goto("/");
  await restPage.openFromHome();
  await restPage.expectHeading("Rest Fundamentals");
});

test("Go to Rest Fundamentals Page - Mobile", { tag: '@mobile' } , async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  const mainPage = new MainPage(page);
  await restPage.page.goto("/");
  await mainPage.selectHamburgerIconMobile();
  await restPage.openFromHome();
  await restPage.expectHeading("Rest Fundamentals");
});

test("Go to REST API Fundamentals", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("rest-fundamentals");
  await restPage.expectHeading("Rest Fundamentals");
});

test("Go to REST API History", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("rest-api-history");
  await restPage.expectHeading("REST API History");
});

test("Go to Send a GET request in Java", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("send-a-get-request-java");
  await restPage.expectHeading("Send a GET request in Java");
});

test("Go to Send a POST request in Java", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("send-a-post-request-java");
  await restPage.expectHeading("Send a POST request in Java");
});

test("Go to Send a PUT request in Java", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("send-a-put-request-java");
  await restPage.expectHeading("Send a PUT request in Java");
});

test("Go to Send a PATCH request in Java", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("send-a-patch-request-java");
  await restPage.expectHeading("Send a PATCH request in Java");
});

test("Go to Send a DELETE request in Java", async ({ page }) => {
  const restPage = new RestFundamentalsPage(page);
  await restPage.goto("send-a-delete-request-java");
  await restPage.expectHeading("SEND A DELETE REQUEST IN JAVA");
});
