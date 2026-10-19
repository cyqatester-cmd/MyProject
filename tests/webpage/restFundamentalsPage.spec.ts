import { test, expect } from "@playwright/test";

test('Go to Rest Fundamentals Page', async ({ page }) => {
    await page.goto('');

    const restFundamentals = page.getByRole('link', { 
        name: 'Rest Fundamentals' 
    });
    
    await expect(restFundamentals).toBeVisible();
    await restFundamentals.click();

     const restFundamentalsHeader = page.getByRole('heading', { 
        name: 'Rest Fundamentals' 
    });
    await expect(restFundamentalsHeader).toBeVisible();   
});