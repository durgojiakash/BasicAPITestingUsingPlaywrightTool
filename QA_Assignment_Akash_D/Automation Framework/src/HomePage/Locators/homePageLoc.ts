import { Page } from "@playwright/test";

export const homePageLoc = {

    navigateToHomePage: (page: Page) => {
        return page.locator("//img[@title='Automation Test Store']")
    },

    searchField: (page: Page) => {
        return page.locator("//input[@id='filter_keyword']")
    },

    navigateToCart: (page: Page) => {
        return page.locator("//ul[@id='main_menu_top']//a[@class='top nobackground']")
    },

    itemCount: (page: Page) => {
        return page.locator("//div[contains(@class,'col-md-3 col-sm-6')]")
    },

    isAddToCartVisible: (page: Page) => {
        return page.locator("//div[contains(@class,'col-md-3 col-sm-6')]/descendant::a[@class='productcart']")
    },

    addToCartCTA: (page: Page) => {
        return page.locator("//a[normalize-space()='Add to Cart']")
    },

    checkoutCTA: (page: Page) => {
        return page.locator("//a[@id='cart_checkout2']")
    },

    confirmOrderCTA: (page: Page) => {
        return page.locator("//button[@id='checkout_btn']")
    },

    orderConfirmationMessage: (page: Page) => {
        return page.locator("//h1[@class='heading1']/descendant::i/..")
    },
}