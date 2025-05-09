import { test as setup } from '../Base/base'
import LoginCred from '../test-Data/LoginData/LoginCred.json' assert { type: "json" };


setup("Login Functionality", async ({ page, loginPage }) => {

    await page.goto("https://automationteststore.com");
    await page.waitForLoadState('networkidle');

    await loginPage.login(LoginCred.username, LoginCred.password)

    await page.context().storageState({ path: "LoginCookies.json" })

    await page.close();

})