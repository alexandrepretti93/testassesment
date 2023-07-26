
class Cart {

    elements ={
        productsTitle: () => cy.get('h2').contains('Products'),
        placeOrderBtn: () => cy.get('button').contains('Place Order'),
        deleteBtnList: () => cy.get('td').find('a'),
        nameFieldOrderModal: () => cy.get('[id=name]'),
        countryFieldOrderModal: () => cy.get('[id=country]'),
        cityFieldOrderModal: () => cy.get('[id=city]'),
        creditCardFieldOrderModal: () => cy.get('[id=card]'),
        monthFieldOrderModal: () => cy.get('[id=month]'),
        yearFieldOrderModal: () => cy.get('[id=year]'),
        purchaseBtn: () => cy.get('button').contains('Purchase'),
        okBtn: () => cy.get('button').contains('OK'),
        purchasedData: () => cy.get('[class="lead text-muted "]')
    }

    deleteRandomFromList(){
        this.elements.deleteBtnList().should('be.visible')
        .and('have.length', 2)
        .its('length')
        .then((n) => Cypress._.random(0, n - 1))
        .then((k) => {
          cy.log(`picked random index ${k}`)
          this.elements.deleteBtnList().eq(k).click()
          this.elements.deleteBtnList().should('have.length', 1)
        })
    }

    fillOrderData(){
        cy.wait(2000)
        this.elements.nameFieldOrderModal().type('Test Name');
        this.elements.countryFieldOrderModal().type('United States');
        this.elements.cityFieldOrderModal().type('New York');
        this.elements.creditCardFieldOrderModal().type('4915285453842307');
        this.elements.monthFieldOrderModal().type('November');
        this.elements.yearFieldOrderModal().type('2025');
    }

    clickOnPurchaseBtn(){
        this.elements.purchaseBtn().click();
        cy.get('h2', { timeout: 10000 }).contains('Thank you for your purchase!').should('be.visible')
        //this.elements.okBtn().click();
    }

    clickPlaceOrderBtn(){
        this.elements.placeOrderBtn().click();
        cy.get('h5', { timeout: 10000 }).contains('Place order').should('be.visible')
    }

    ValidatePurchaseInfo(){
        this.elements.purchasedData()
        .contains('Amount:')
        .contains('Card Number: 4915285453842307')
        .contains('Name: Test Name')
        .contains('Date: 26/6/2023')
    }



}

export default new Cart();