
class SignUp {

    elements ={
        userNameField: () => cy.get('[id=sign-username]'),
        passwordField: () => cy.get('[id=sign-password]'),
        signUpBtn: () => cy.get('button').contains('Sign up'),
        closeBtn: () => cy.get('[class=close]').eq(1)
    }

    fillSignUpData(){
       
            const uuid = () => Cypress._.random(0, 1e8)
            const id = uuid()
            const usernameuuid = `test${id}`
            cy.wait(1000);
            cy.get('h5').contains('Sign up').should('be.visible');
            this.elements.userNameField().type(usernameuuid);
            this.elements.passwordField().type('P@ssword1');
            this.elements.signUpBtn().click();
            cy.wait(2000);
    }

    fillSignUpDataExistingUser(){
        cy.wait(1000);
        cy.get('h5').contains('Sign up').should('be.visible');
        this.elements.userNameField().type('pretti@test.com');
        this.elements.passwordField().type('P@ssword1');
        this.elements.signUpBtn().click();
        this.elements.closeBtn().click({force: true});
        cy.wait(2000);
    }

    clearSignUpData(){
        cy.wait(1000);
        this.elements.userNameField().clear();
        this.elements.passwordField().clear();
        cy.wait(2000);
    }



}

export default new SignUp();