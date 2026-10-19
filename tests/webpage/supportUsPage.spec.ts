import test, { expect } from "@playwright/test";

test('Go to Support Us Page', async ({ page }) => {
    await page.goto('');

    const supportUs = page.getByRole('link', { 
        name: 'Support Us' 
    });
    
    await expect(supportUs).toBeVisible();
    await supportUs.click();

     const supportUsHeader = page.getByRole('heading', { 
        name: 'Support Us' 
    });
    await expect(supportUsHeader).toBeVisible();   
});