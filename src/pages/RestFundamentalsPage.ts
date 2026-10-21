import { expect, Locator, Page } from "@playwright/test";

export class RestFundamentalsPage {
  readonly page: Page;
  readonly restFundamentalsLink: Locator;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.restFundamentalsLink = page.getByRole("link", { name: "Rest Fundamentals" });
    this.mainHeading = page.locator("h1");
  }

  async goto(path = "rest-fundamentals") {
    await this.page.goto(path);
  }

  async openFromHome() {
    await this.restFundamentalsLink.click();
  }

  async expectHeading(name: string) {
    await expect(this.mainHeading).toHaveText(name, { ignoreCase: true });
  }
}
