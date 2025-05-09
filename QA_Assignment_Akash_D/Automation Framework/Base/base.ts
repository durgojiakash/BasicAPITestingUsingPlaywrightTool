
import { test as base } from '@playwright/test'
import { loginPageFunc } from '../src/LoginPage/BusinessKeywords/loginPageFunc';
import { homePageFunc } from '../src/HomePage/BusinessKeywords/homePageFunc';

type MyFixtures = {
    loginPage: loginPageFunc,
    homePage: homePageFunc
}

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new loginPageFunc(page);
        use(loginPage)
    },

    homePage: async ({ page }, use) => {

        const homePage = new homePageFunc(page);
        use(homePage);
    }
})