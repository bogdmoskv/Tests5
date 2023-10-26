const ShopPage = require('../pages/shop.page')

describe('Task 2', () => {
    describe('Search item and add it to cart', () => {
        before(() => {
            cy.visit('http://demo-store.seleniumacademy.com/')
        })
        it('should search item', () => {
            ShopPage.searchField.type('Sweater')
            ShopPage.searchButton.click()
            ShopPage.firstItemTitle.contains('Sweater')
            ShopPage.firstItemViewButton.click()
            ShopPage.redColorPicker.click()
            ShopPage.sizePickerL.click()
            ShopPage.addToCartButton.click()
            ShopPage.successMessageAddToCart.contains('Sweater was added to your shopping cart')
        });
    });
    describe('Filters test', () => {
        before(() => {
            cy.visit('http://demo-store.seleniumacademy.com/accessories/shoes.html')
        })
        it('should filter items', () => {
            ShopPage.priceFilter.click()
            ShopPage.colorFilter.click()
            ShopPage.occasionFilter.click()
            ShopPage.typeFilter.click()
            ShopPage.clearAllButton.click()
        });
    });
});