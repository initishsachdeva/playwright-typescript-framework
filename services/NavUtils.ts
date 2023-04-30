import {Page} from "@playwright/test";
import * as assert from "assert";

export class NavUtils {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to list items displayed in Header
     *
     */
    async navigateTo(header: string) {
        try {
            switch (header) {
                case "Home":
                    await this.page.locator('//*[@class = "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq"]').locator('a').first().click();
                    break;
                case "Watch":
                    await this.page.locator('//*[@class = "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq"]').locator('a').nth(1).click();
                    break;
                case "Marketplace":
                    await this.page.locator('//*[@class = "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq"]').locator('a').nth(2).click();
                    break;
                case "Groups":
                    await this.page.locator('//*[@class = "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq"]').locator('a').nth(3).click();
                    break;
                case "Gaming":
                    await this.page.locator('//*[@class = "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq"]').locator('a').nth(4).click();
                    break;
                default:
                    console.log("No such Header section available");
            }
        } catch (e) {
            console.log("Exception in Navigating :" + header + e.toString());
            assert.fail("Exception in Navigating :" + header + e.toString());
        }
    }

    /**
     * Navigate to list items displayed in RHS
     *
     */
    async navigateToRHSItems(header: string) {
        try {
            switch (header) {
                case "Profile":
                    await this.page.locator('//*[@class="x1iyjqo2"]').locator('a').first().click();
                    break;
                case "Friends":
                    await this.page.locator('//*[@class = "x1iyjqo2"]').locator('a').nth(1).click();
                    break;
                case "Groups":
                    await this.page.locator('//*[@class = "x1iyjqo2"]').locator('a').nth(2).click();
                    break;
                case "Most Recent":
                    await this.page.locator('//*[@class = "x1iyjqo2"]').locator('a').nth(3).click();
                    break;
                case "Marketplace":
                    await this.page.locator('//*[@class = "x1iyjqo2"]').locator('a').nth(4).click();
                    break;
                case "Watch":
                    await this.page.locator('//*[@class = "x1iyjqo2"]').locator('a').nth(5).click();
                    break;
                default:
                    console.log("No such Header section available");
            }
        } catch (e) {
            console.log("Exception in Navigating :" + header + e.toString());
            assert.fail("Exception in Navigating :" + header + e.toString());
        }
    }


    /**
     * Selects Tab on respective sheet.
     */
    async clickBackToHome(tabName: string) {
        try {
            await this.page.locator('text="Back to Home"').click();
        } catch (e) {
            console.log("Exception in selecting tab back to home " + e.toString());
            assert.fail("Unable to switch tab  " + e.toString());
        }
    }

}
