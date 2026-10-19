import { expect, Page } from "@playwright/test";

export async function assertPageTitle(page: Page) {
    const pageTitle = page.getByRole('link', { 
      name: 'RESTful API' 
    })      
    await expect(pageTitle).toBeVisible();
}

export async function assertEndPointsButton(page: Page) {
    const viewEndpointsButton = page.getByRole('button', { 
        name: 'View Endpoints' 
    });
        
    await expect(viewEndpointsButton).toBeVisible();
    await viewEndpointsButton.click();
}

export async function assertEndPointsHeader(page: Page) {
    const availableEndpointsHeader = page.getByRole('heading', { 
        name: 'Available Endpoints' 
    });
    await expect(availableEndpointsHeader).toBeVisible();
}

export async function clickPublicButton(page: Page) {
    const publicButton = page.locator('button[value="public"]');
    await publicButton.click();
}

export async function assertGetAllObjPublicApi(page: Page) {
    const getObjectApiText = page.getByText('https://api.restful-api.dev/objects').first();
    await expect(getObjectApiText).toBeVisible();
}