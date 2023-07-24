
class About {

    elements ={
        aboutTitle: () => cy.get('h1').contains('About'),
        microAppSubtitle: () => cy.get('h2').contains('Microapp is an AI Code Development platform')
    }


    ValidateAboutPageIsOpen(){
        this.elements.aboutTitle().should('be.visible');
        this.elements.microAppSubtitle().should('be.visible');
    }
}

export default new About();