import { expect, Locator, Page } from "@playwright/test";

export class SupportUsPage {
  readonly page: Page;
  readonly supportUsLink: Locator;
  readonly supportUsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.supportUsLink = page.getByRole("link", { name: "Support Us" });
    this.supportUsHeading = page.getByRole("heading", { name: "Support Us" });
  }

  async openFromHome() {
    await this.supportUsLink.click();
  }

  async expectLoaded() {
    await expect(this.supportUsHeading).toBeVisible();
  }
}