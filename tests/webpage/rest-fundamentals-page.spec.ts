import { test, expect } from "@playwright/test";
import * as restFundamentalsPage from "../../src/pages/RestFundamentalsPage";

test('Go to Rest Fundamentals Page', async ({ page }) => {
    await page.goto('');
    await restFundamentalsPage.assertRestFundamentalsLink(page);
    await restFundamentalsPage.assertHeader(page, 'Rest Fundamentals');
});

test('Go to REST API Fundamentals', async ({ page }) => {
    await page.goto('rest-fundamentals');
    await restFundamentalsPage.assertHeader(page, 'Rest Fundamentals');
});

test('Go to Rest APi History', async ({ page }) => {
    await page.goto('rest-api-history');
    await restFundamentalsPage.assertHeader(page, 'REST API History');
});

test('Go to Send a GET request in Java', async ({ page }) => {
    await page.goto('send-a-get-request-java');
    await restFundamentalsPage.assertHeader(page, 'Send a GET request in Java');
});

test('Go to Send a POST request in Java', async ({ page }) => {
    await page.goto('send-a-post-request-java');
    await restFundamentalsPage.assertHeader(page, 'Send a POST request in Java');
});

test('Go to Send a PUT request in Java', async ({ page }) => {
    await page.goto('send-a-put-request-java');
    await restFundamentalsPage.assertHeader(page, 'Send a PUT request in Java');
});

test('Go to Send a PATCH request in Java', async ({ page }) => {
    await page.goto('send-a-patch-request-java');
    await restFundamentalsPage.assertHeader(page, 'Send a PATCH request in Java');
});

test('Go to Send a DELETE request in Java', async ({ page }) => {
    await page.goto('send-a-delete-request-java');
    await restFundamentalsPage.assertHeader(page, 'SEND A DELETE REQUEST IN JAVA');
});