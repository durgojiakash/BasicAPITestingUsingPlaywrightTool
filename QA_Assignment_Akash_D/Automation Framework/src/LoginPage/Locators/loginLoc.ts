import { Page } from "@playwright/test";

export const LoginLoc = {

    navigateToRegistrationOrLoginPage: (page: Page) => {
        return page.locator("//a[normalize-space()='Login or register']")
    },

    loginName: (page: Page) => {
        return page.locator("//input[@id='loginFrm_loginname']")
    },

    password: (page: Page) => {
        return page.locator("//input[@id='loginFrm_password']")
    },

    loginCTA: (page: Page) => {
        return page.locator("//button[normalize-space()='Login']")
    },


}