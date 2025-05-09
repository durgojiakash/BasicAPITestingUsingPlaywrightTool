import { Page, expect } from '@playwright/test'
import { LoginLoc } from '../Locators/loginLoc';

export class loginPageFunc {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username, password) {

        await LoginLoc.navigateToRegistrationOrLoginPage(this.page).click();
        await expect(this.page).toHaveTitle("Account Login")
        await LoginLoc.loginName(this.page).fill(username);
        await LoginLoc.password(this.page).fill(password);
        await LoginLoc.loginCTA(this.page).click();
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveTitle("My Account")

    }

}