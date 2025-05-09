import { test } from '../Base/base'

test("End to End Testcase Functionality", async ({ page, homePage }) => {

    await page.goto("https://automationteststore.com");
    await page.waitForLoadState('networkidle');

    await homePage.addItemToCartAndCheckout('Shirt');

})