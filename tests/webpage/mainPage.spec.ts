import { test, expect } from "@playwright/test";
import * as mainPage from "../../src/pages/MainPage";

test('Go to Restful-api.dev site', async ({ page }) => {
    await page.goto('');
    await mainPage.assertPageTitle(page);
});

test('Go to View Endpoints', async ({ page }) => {
    await page.goto('');

    //endpoint button
    await mainPage.assertEndPointsButton(page);
    await mainPage.assertEndPointsHeader(page);
});

test('Select Public Endpoints', async ({ page }) => {
    await page.goto('');

    //endpoint button
    await mainPage.assertEndPointsButton(page);
    await mainPage.clickPublicButton(page);
    await mainPage.assertGetAllObjPublicApi(page);
});