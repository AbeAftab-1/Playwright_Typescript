// importing combined login fixture
import { test, expect } from '../fixtures/sauceLoginFixture';
// importing sort order data from sauceProductSort.json
import pdata from "../data/sauceProductSort.json";

test('Test Sorting using data from JSON file', async ({ sauceHomePage }) => {

    // Verify Home Page Heading
    await sauceHomePage.expectHomepageHeadingToBeVisible();

    // Sorting products respectively by Z to A, Low to Hi, Hi to Low and A to Z
    for (const prodSort of pdata) {
        await sauceHomePage.sortProduct(prodSort.sortorder);
    }

    // Open Menu option
    await sauceHomePage.navigateToMenu();
    // Click Logout option
    await sauceHomePage.clickLogoutButton();

});