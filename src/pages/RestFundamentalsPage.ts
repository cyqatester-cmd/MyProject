import { expect, Page } from "@playwright/test";

export async function assertRestFundamentalsLink(page: Page) {
    const restFundamentals = page.getByRole('link', { 
        name: 'Rest Fundamentals' 
    });
    
    await expect(restFundamentals).toBeVisible();
    await restFundamentals.click();
}

export async function assertHeader(page: Page, headerName: string) {
    const header = page.getByRole('heading', { 
        name: headerName,
        level: 1,
        exact: true 
    });
    await expect(header).toBeVisible();
}