import {Locator, Page} from "@playwright/test";
import * as app from '../app';
import * as assert from "assert";
import config from "../config";
import {env} from 'process';

export class LoginPage {

    readonly homePage: Page;
    readonly logInPane: Locator;
    readonly selectLogInOption: Locator;
    readonly username: Locator;
    readonly usernameNextButton: Locator;
    readonly password: Locator;
    readonly clickLogIn: Locator;
    readonly passExpired: Locator;
    user = "nitishsachdeva39@gmail.com";
    pass = "Abcd@001";

    constructor(homePage: Page) {
        this.homePage = homePage;
        this.logInPane = homePage.locator('text = "Log in"');
        this.selectLogInOption = homePage.locator('text="Continue with email"');
        this.username = homePage.locator('#__a11yId79');
        this.usernameNextButton = homePage.locator('text="Continue"').last();
        this.password = homePage.locator('#__a11yId81');
        this.clickLogIn = homePage.locator('//*[@class="_1QoxDw Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w ubW6qw cwOZMg zQlusQ uRvRjQ ogth8A"]');
        this.passExpired = homePage.locator('#callback_2');
    }

    async login() {
        try {
            await this.homePage.goto(config.use.baseURL, {
                timeout: app.config.timeouts.pageLoad,
                waitUntil: "load"
            });
            await this.openLoginWindowPane();
            await this.enterUsernameAndPassword();
        } catch (e) {
            console.log("Exception in login to app " + e.toString());
            assert.fail("Unable to Login into app " + e.toString());
        }
    }

    async openLoginWindowPane() {
        try {
            await this.logInPane.nth(0).click();
        } catch (e) {
            console.log("Exception in opening login window " + e.toString());
            assert.fail("Unable to Login window" + e.toString());
        }
    }

    async enterUsernameAndPassword() {
        try {
            await this.selectLogInOption.click();
            // await this.username.type(env.WEB_APP_USER);
            await this.username.type(this.user);
            await this.usernameNextButton.click();
            // await this.password.type(env.WEB_APP_PASS);
            await this.password.type(this.pass);
            await this.clickLogIn.click();
        } catch (e) {
            console.log("Exception in entering username and password " + e.toString());
            assert.fail("Unable to enter username and password " + e.toString());
        }
    }

    async waitForLandingPage() {
        try {
            let timeout = app.config.timeouts.pageLoad;
            while (timeout > 0) {
                if (!(this.homePage.url().includes(config.use.baseURL))) {
                    await this.homePage.waitForTimeout(app.config.sleep.short);
                    timeout = timeout - app.config.sleep.short;
                } else {
                    break;
                }
                if (timeout === 0) {
                    console.log("Application not loaded: ");
                }
            }
        } catch (e) {
            console.log("Exception in waiting for landing page: " + e.toString());
            assert.fail("Application not loaded: " + e.toString());
        }
    }

    // by using skip login method , we can use this method for login
    async navigateToApp() {
        try {
            await this.homePage.goto(config.use.baseURL, {
                timeout: app.config.timeouts.pageLoad,
                waitUntil: "load"
            });
            await this.waitForLandingPage();
        } catch (e) {
            console.log("Exception in navigating to app : " + e.toString());
            assert.fail(" url is not loaded : " + e.toString());
        }
    }

    async verifyLoginStatus() {
        try {
            if (await this.passExpired.isEnabled()) {
                console.log("Login was unsuccessful");
                return await this.passExpired.innerText();
            }
        } catch (e) {
            console.log("Login was successful");
            return "null";
        }
        return "null";
    }
}



