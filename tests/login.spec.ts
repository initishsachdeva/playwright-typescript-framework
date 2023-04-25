import {expect, Page, test} from '@playwright/test'
import {InitializeBrowser} from "../services/InitializeBrowser";
import {LoginPage} from "../pageObjects/LoginPage";
import {Utils} from "../services/Utils";
import {NavUtils} from "../services/NavUtils";

test.describe('Login Test', () => {

    let page: Page;
    let utils: Utils;
    let loginPage: LoginPage;
    let navUtils: NavUtils;


    test.beforeAll(async () => {
        page = await InitializeBrowser.getPage();
        loginPage = new LoginPage(page);
        //await loginPage.navigateToApp();
        utils = new Utils(page)
        navUtils = new NavUtils(page);
    })

    /**
     * Verify the login is successfully
     */
    let specId_0 = "ri_analysis_account_0";
    test(specId_0, async () => {
        await page.pause();
        await loginPage.login();
        await navUtils.navigateTo('Brand Hub');
    })

    test.beforeEach(async () => {
        await utils.printConsoleErrorLogs();
    })
});