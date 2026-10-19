import { expect, Page } from "@playwright/test";

export async function assertRestFundamentalsLink(page: Page) {
    const restFundamentals = page.getByRole('link', { 
        name: 'Rest Fundamentals' 
    });
    
    await expect(restFundamentals).toBeVisible();
    await restFundamentals.click();
}

export async function assertRestFundamentalsHeader(page: Page) {
    const restFundamentalsHeader = page.getByRole('heading', { 
        name: 'Rest Fundamentals' 
    });
    await expect(restFundamentalsHeader).toBeVisible();
}