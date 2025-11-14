import { test as base, expect as defaultExpect } from "@playwright/test";
import SauceLoginPage from '../pages/sauceLoginPage.ts';
import { decrypt } from "../utils/CryptojsUtil";
import HomePage from "../pages/sauceHomePage.ts";

export const expect = defaultExpect;

type LoginFixture = {
    sauceHomePage: HomePage;
};

// Define a custom fixture with page
export const test = base.extend<LoginFixture>({
    sauceHomePage: async ({ page }, use) => {
        // Declare new page from sauceLoginPage 
        const sauceLogin = new SauceLoginPage(page);

        // Navigate to saucedemo.com
        await sauceLogin.navigateToLoginPage();
        // Enter user name
        await sauceLogin.fillUsername(decrypt(process.env.userid!));
        // Enter password
        await sauceLogin.fillPassword(decrypt(process.env.password!));
        // Click "Login" button
        await sauceLogin.clickLoginButton();

        // Declare homePage
        const homePage = new HomePage(page);
        // Use landingPage
        await use(homePage);

    }
})