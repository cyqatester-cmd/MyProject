import test, { expect } from "@playwright/test";
import * as supportUsPage from "../../src/pages/SupportUsPage";

test('Go to Support Us Page', async ({ page }) => {
    await page.goto('');
    await supportUsPage.assertSupportUsLink(page);
    await supportUsPage.assertSupportUsHeader(page);
});