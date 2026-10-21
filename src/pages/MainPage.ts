import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly viewEndpointsButton: Locator;
  readonly availableEndpointsHeading: Locator;
  readonly publicButton: Locator;
  readonly getAllObjectsEndpoint: Locator;
  readonly hamburgeIconMobile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteTitle = page.getByRole("link", { name: "RESTful API" });
    this.viewEndpointsButton = page.getByRole("button", { name: "View Endpoints" });
    this.availableEndpointsHeading = page.getByRole("heading", { name: "Available Endpoints" });
    this.publicButton = page.locator('button[value="public"]');
    this.getAllObjectsEndpoint = page.getByText("https://api.restful-api.dev/objects").first();
    this.hamburgeIconMobile = page.locator('path[d*="M3"]');
  }

  async goto() {
    await this.page.goto("/");
  }

  async expectLoaded() {
    await expect(this.siteTitle).toBeVisible();
  }

  async openEndpoints() {
    await this.viewEndpointsButton.click();
    await expect(this.availableEndpointsHeading).toBeVisible();
  }

  async selectPublicEndpoints() {
    await this.publicButton.click();
    await expect(this.getAllObjectsEndpoint).toBeVisible();
  }

  async selectHamburgerIconMobile() {
    await this.hamburgeIconMobile.click();
    await expect(this.hamburgeIconMobile).toBeVisible();
  }
}
