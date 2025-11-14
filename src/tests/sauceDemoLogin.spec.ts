import { test, expect } from '@playwright/test';
import LoginPage from '../pages/sauceLoginPage';
// Importing crytojs util to decrypt user name and password
import { decrypt } from "../utils/cryptojsUtil.ts";
// Axe-Code Playwright for Accessiblity checks
const AxeBuilder = require('@axe-core/playwright').default;

test('test', async ({ page }) => {
    // Declare loginPage
    const loginPage = new LoginPage(page);

    // Navigate to login page using BaseURL
    await loginPage.navigateToLoginPage();
    // Enter user name from src/config folder based on NODE_ENV value
    await loginPage.fillUsername(decrypt(process.env.userid!));
    // Enter password from src/config folder based on NODE_ENV value
    await loginPage.fillPassword(decrypt(process.env.password!));

    // Declare homePage 
    const homePage = await loginPage.clickLoginButton();
    // Verify Home Page Heading
    await homePage.expectHomepageHeadingToBeVisible();

    await test.step('Check Accessibility', async () => {
        const makeAxeBuilder = () => new AxeBuilder({ page })
            .withTags(['wcag21a', 'wcag21aa', 'wcag21aaa'])
            .analyze();
        const accessibilityScanResults = await makeAxeBuilder();
        // Assertion
        expect(accessibilityScanResults.violations).toEqual([]);
    })



    // Open Menu option
    await homePage.navigateToMenu();
    // Click Logout option
    await homePage.clickLogoutButton();

});