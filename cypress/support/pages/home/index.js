
class Home {
    
    elements ={
        signUpBtn: () => cy.get('[id=signin2]'),
        cartBtn: () => cy.get('[id=cartur]'),
        loginBtn: () => cy.get('[id=login2]'),
        logoutBtn: () => cy.get('[id=logout2]'),
        phonesBtn: () => cy.get('a').contains('Phones'),
        laptopsBtn: () => cy.get('a').contains('Laptops'),
        monitorsBtn: () => cy.get('a').contains('Monitors'),
    }

    goToHomePage(){
        cy.visit('/')
    }

    clickSignUpBtn(){
        
        this.elements.signUpBtn().click();
    }

    clickLogInBtn(){
        
        this.elements.loginBtn().click();
    }

    clickLogOutBtn(){
        
        this.elements.logoutBtn().click();
    }

    goToPhones(){
        
        this.elements.phonesBtn().click();
    }

    goToLaptops(){
        
        this.elements.laptopsBtn().click();
    }

    goToMonitors(){
        
        this.elements.monitorsBtn().click();
    }
    
}

export default new Home();