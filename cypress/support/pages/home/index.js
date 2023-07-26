
class Home {
    
    elements ={
        signUpBtn: () => cy.get('[id=signin2]'),
        cartBtn: () => cy.get('[id=cartur]'),
        loginBtn: () => cy.get('[id=login2]'),
        logoutBtn: () => cy.get('[id=logout2]'),
        phonesBtn: () => cy.get('a').contains('Phones'),
        laptopsBtn: () => cy.get('a').contains('Laptops'),
        monitorsBtn: () => cy.get('a').contains('Monitors'),
        homeBtn: () => cy.get('a').contains('Home')
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

    clickHomeBtn(){
        
        this.elements.homeBtn().click();
    }

    goToCart(){
        
        this.elements.cartBtn().click();
        cy.get('h2', { timeout: 12000 }).contains('Products').should('be.visible')
    }
    
}

export default new Home();