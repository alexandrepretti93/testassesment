
class Login {

    elements ={
        userNameField: () => cy.get('[id=loginusername]'),
        passwordField: () => cy.get('[id=loginpassword]'),
        loginBtn: () => cy.get('button').contains('Log in'),
        closeBtn: () => cy.get('button').contains('Close')
    }

    fillLoginData(){

            cy.wait(1000)
            this.elements.userNameField().type('pretti@test.com');
            this.elements.passwordField().type('P@ssword1');
            this.elements.loginBtn().click();
            cy.get('a').contains('Welcome').should('be.visible');
    }

    fillLoginInvalidData(){

        cy.wait(1000)
        this.elements.userNameField().type('pretti@test.com');
        this.elements.passwordField().type('P@ssword2');
        this.elements.loginBtn().click();
        cy.wait(2000);
}

}

export default new Login();