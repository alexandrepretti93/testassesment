
class Phones {

    elements ={
        galaxyS6Title: () => cy.get('a').contains('Samsung galaxy s6'),
        nexus6Title: () => cy.get('a').contains('Nexus 6'),
        addToCartcloseBtn: () => cy.get('a').contains('Add to cart')
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



}

export default new Phones();