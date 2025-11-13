import { test, expect } from '@playwright/test';
import LoginPage from '../pages/sauceLoginPage';

import { decrypt } from "../utils/cryptojsUtil.ts";

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
    // Open Menu option
    await homePage.navigateToMenu();
    // Click Logout option
    await homePage.clickLogoutButton();

});