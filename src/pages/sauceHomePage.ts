import { Page, expect } from "@playwright/test";
import logger from "../utils/loggerUtil.ts";


export default class HomePage {
    private readonly homepageHeadingLocator = 'Swag Labs';
    private readonly openMenuButtonLocator = 'Open Menu';
    private readonly logoutLinkLocator = '[data-test="logout-sidebar-link"]';

    // Declare contructor
    constructor(private page: Page) { }

    // Method to verify Home Page Heading
    async expectHomepageHeadingToBeVisible() {
        await expect(this.page.getByText(this.homepageHeadingLocator)).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error(`Error in verifying homepage heading: ${error}`);
            throw error; // rethrow the error if needed
        }).then(() => logger.info("Verified homepage heading"));
    }

    // Method to open Menu options
    async navigateToMenu() {
        await this.page.getByRole('button', { name: this.openMenuButtonLocator }).click();
        logger.info('The Menu option is clicked');
    }

    // Method to click Logout Button
    async clickLogoutButton() {
        await this.page.locator(this.logoutLinkLocator).click();
        logger.info('User is logged out');
    }
}