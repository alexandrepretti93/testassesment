
class Phones {

    elements ={
        galaxyS6: () => cy.get('a').contains('Samsung galaxy s6')
    }

    clickOnFirstPhoneOnTheList(){
        this.elements.galaxyS6().click();
        cy.wait(1000);
        cy.get('h2').contains('Samsung galaxy s6').should('be.visible');
    }



}

export default new Phones();