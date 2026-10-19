import { test, expect } from "@playwright/test";
import * as restFundamentalsPage from "../../src/pages/RestFundamentalsPage";

test('Go to Rest Fundamentals Page', async ({ page }) => {
    await page.goto('');
    await restFundamentalsPage.assertRestFundamentalsLink(page);
    await restFundamentalsPage.assertRestFundamentalsHeader(page);
});