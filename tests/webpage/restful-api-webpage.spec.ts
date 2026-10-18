import { test, expect } from "@playwright/test";

test('Go to Restful-api.dev site', async ({ page }) => {
    await page.goto('');

    const pageTitle = page.getByRole('link', { 
      name: 'RESTful API' 
    })      
    await expect(pageTitle).not.toBeVisible();
});

test('Go to View Endpoints', async ({ page }) => {
    await page.goto('');

    const viewEndpointsButton = page.getByRole('button', { 
        name: 'View Endpoints' 
    });
    
    await expect(viewEndpointsButton).toBeVisible();
    await viewEndpointsButton.click();

    const availableEndpointsHeader = page.getByRole('heading', { 
        name: 'Available Endpoints' 
    });
    await expect(availableEndpointsHeader).toBeVisible();
});

test('Select Public Endpoints', async ({ page }) => {
    await page.goto('');

    const viewEndpointsButton = page.getByRole('button', { 
        name: 'View Endpoints' 
    });
    
    await expect(viewEndpointsButton).toBeVisible();
    await viewEndpointsButton.click();

    const publicButton = page.locator('button[value="public"]');
    await publicButton.click();

    const getObjectApiText = page.getByText('https://api.restful-api.dev/objects').first();
    await expect(getObjectApiText).toBeVisible();
});

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