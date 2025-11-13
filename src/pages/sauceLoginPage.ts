import { Page, expect } from "@playwright/test";
import HomePage from "./sauceHomePage";

export default class LoginPage {
    private readonly usernameInputSelector = '[data-test="username"]';
    private readonly passwordInputSelector = '[data-test="password"]';
    private readonly loginButtonSelector = '[data-test="login-button"]';

    // Declare constructor
    constructor(private page: Page) { }

    // Method to open Base URL
    async navigateToLoginPage() {
        await this.page.goto("/");
    }

    // Method to enter user name
    async fillUsername(username: string) {
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    // Method to enter password
    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    // Method to click Login button
    async clickLoginButton() {
        await this.page
            .locator(this.loginButtonSelector)
            .click()
            .catch((error) => {
                throw error; // rethrow the error if needed
            });

        // Declare homePage
        const homePage = new HomePage(this.page);
        return homePage;
    }
}