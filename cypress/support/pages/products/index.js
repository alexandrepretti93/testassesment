
class Products {

    elements ={
        galaxyS6Title: () => cy.get('a').contains('Samsung galaxy s6'),
        nexus6Title: () => cy.get('a').contains('Nexus 6'),
        addToCartcloseBtn: () => cy.get('a').contains('Add to cart'),
        categoriesTitle: () => cy.get('[id=cat]'),
        previousBtn: () => cy.get('[id=prev2]'),
        nextBtn: () => cy.get('[id=next2]'),
        cardBlocksList: () => cy.get('[class="card h-100"]')
    }

    clickOnGalaxyS6(){
        this.elements.galaxyS6Title().click();
        cy.wait(1000);
        cy.get('h2').contains('Samsung galaxy s6').should('be.visible');
    }

    clickOnNexus6(){
        this.elements.nexus6Title().click();
        cy.wait(1000);
        cy.get('h2').contains('Nexus 6').should('be.visible');
    }

    clickAddToCart(){
        this.elements.addToCartcloseBtn().click();
        cy.wait(1000);
    }

    validatePhonesItems(){
        
        this.elements.previousBtn().should('be.visible');
        this.elements.nextBtn().should('be.visible');
        this.elements.cardBlocksList().should('have.lengthOf', 7)
    }

    validateLaptopsItems(){
        
        this.elements.previousBtn().should('be.visible');
        this.elements.nextBtn().should('be.visible');
        this.elements.cardBlocksList().should('have.lengthOf', 6)
    }

    validateMonitorsItems(){
        
        this.elements.previousBtn().should('be.visible');
        this.elements.nextBtn().should('be.visible');
        this.elements.cardBlocksList().should('have.lengthOf', 2)
    }



}

export default new Products();