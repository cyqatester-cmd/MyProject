import { expect, Page } from "@playwright/test";

export async function assertSupportUsLink(page: Page) {
    const supportUs = page.getByRole('link', { 
        name: 'Support Us' 
    });
    
    await expect(supportUs).toBeVisible();
    await supportUs.click();
}

export async function assertSupportUsHeader(page: Page) {
    const supportUsHeader = page.getByRole('heading', { 
        name: 'Support Us' 
    });
    await expect(supportUsHeader).toBeVisible();
}