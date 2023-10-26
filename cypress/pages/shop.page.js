class ShopPage {
    get searchField() {
        return cy.get('input#search')
    }

    get searchButton() {
        return cy.get('button.search-button')
    }

    get firstItemTitle() {
        return cy.get('.item:nth-child(1) .product-name  > a')
    }

    get firstItemViewButton() {
        return cy.get('.item:nth-child(1) .actions > a')
    }

    get redColorPicker() {
        return cy.get('.option-red .swatch-label:nth-child(1)')
    }

    get sizePickerL() {
        return cy.get('#swatch78 > span.swatch-label')
    }

    get addToCartButton() {
        return cy.get('button[title="Add to Cart"]:nth-child(1)')
    }

    get successMessageAddToCart() {
        return cy.get('.success-msg span')
    }

    get priceFilter() {
        return cy.get('a[href="http://demo-store.seleniumacademy.com/accessories/shoes.html?price=300-400"]')
    }

    get colorFilter() {
        return cy.get('span.swatch-label img[title="Blue"]')
    }

    get occasionFilter() {
        return cy.get('#narrow-by-list > dd:nth-child(2) > ol > li > a')
    }

    get typeFilter() {
        return cy.get('#narrow-by-list > dd.last.even > ol > li > a')
    }

    get clearAllButton() {
        return cy.get('div.col-left.sidebar.col-left-first > div > div.block-content.toggle-content > div.actions > a')
    }

}

module.exports = new ShopPage()