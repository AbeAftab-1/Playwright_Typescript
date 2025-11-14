// importing combined login fixture
import { test, expect } from '../fixtures/sauceLoginFixture';


test('Test Login using Fixture', async ({ sauceHomePage }) => {

    // Verify Home Page Heading
    await sauceHomePage.expectHomepageHeadingToBeVisible();

    // Open Menu option
    await sauceHomePage.navigateToMenu();
    // Click Logout option
    await sauceHomePage.clickLogoutButton();

});