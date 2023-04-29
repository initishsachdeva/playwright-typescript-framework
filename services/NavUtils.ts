import {Page} from "@playwright/test";
import * as assert from "assert";

export class NavUtils {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(header: string,) {
        try {
            switch (header) {
                case "Projects":
                    await this.page.locator('//*[@class = "c1xWOg"]').locator('a').nth(1).click();
                    break;
                case "Templates":
                    await this.page.locator('//*[@class = "c1xWOg"]').locator('a').nth(2).click();
                    break;
                case "Brand Hub":
                    await this.page.locator('//*[@class = "c1xWOg"]').locator('a').nth(3).click();
                    break;
                case "Apps":
                    await this.page.locator('//*[@class = "c1xWOg"]').locator('a').nth(4).click();
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
