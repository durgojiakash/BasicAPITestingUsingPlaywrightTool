import { Page, expect } from '@playwright/test'
import { homePageLoc } from '../Locators/homePageLoc';

export class homePageFunc {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addItemToCartAndCheckout(productName) {
        await this.navigateBackToHomePage();
        await this.searchAProduct(productName);
        await this.addItemsToCart();
        await this.checkoutItems();
    }

    async navigateBackToHomePage() {
        await homePageLoc.navigateToHomePage(this.page).click();
        await expect(this.page).toHaveTitle("A place to practice your automation skills!")
        await this.page.waitForLoadState('networkidle')
    }

    async searchAProduct(productName) {

        await homePageLoc.searchField(this.page).fill(productName);
        await this.page.keyboard.down('Enter');
        await this.page.keyboard.up('Enter');
        await this.page.waitForLoadState('networkidle')
    }

    async addItemsToCart() {
        await this.page.waitForTimeout(2000)
        const ItemAddToCartCount = await homePageLoc.isAddToCartVisible(this.page).count();

        for (let i = 0; i <= ItemAddToCartCount - 1; i++) {

            let IsAddToCartVisible = await homePageLoc.isAddToCartVisible(this.page).nth(i)
            if (await IsAddToCartVisible.isVisible() == true) {

                await homePageLoc.isAddToCartVisible(this.page).nth(i).click({ force: true })
                await this.page.waitForLoadState('networkidle')
                await this.page.waitForTimeout(700)
                await homePageLoc.addToCartCTA(this.page).click();
                await this.page.waitForLoadState('networkidle')
                await this.page.goBack();
                await this.page.waitForLoadState('networkidle')
                await this.page.goBack();
                await this.page.waitForLoadState('networkidle')

            }
        }
    }

    async navigateToCart() {
        await homePageLoc.navigateToCart(this.page).click();
        await this.page.waitForTimeout(700)
        await expect(this.page).toHaveTitle("Shopping Cart")
        await this.page.waitForLoadState('networkidle')
    }

    async checkoutItems() {
        await this.navigateToCart();
        await homePageLoc.checkoutCTA(this.page).click();
        await homePageLoc.confirmOrderCTA(this.page).click({ force: true });
        await this.page.waitForTimeout(2000);
        expect(await homePageLoc.orderConfirmationMessage(this.page).isVisible()).toBeTruthy();
        const success = await homePageLoc.orderConfirmationMessage(this.page).textContent();
    }

}