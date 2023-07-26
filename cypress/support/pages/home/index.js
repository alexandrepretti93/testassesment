
class Home {
    
    elements ={
        signUpBtn: () => cy.get('#signin2'),
        cartBtn: () => cy.get('#cartur'),
        loginBtn: () => cy.get('#login2'),
        logoutBtn: () => cy.get('#logout2'),
        phonesBtn: () => cy.get('[onclick="byCat(\'phone\')"]'),
        laptopsBtn: () => cy.get('[onclick="byCat(\'notebook\')"]'),
        monitorsBtn: () => cy.get('[onclick="byCat(\'monitor\')"]'),
        homeBtn: () => cy.get('a').contains('Home'),
        categoriesTitle: () => cy.get('#cat'),
        previousBtn: () => cy.get('#prev2'),
        nextBtn: () => cy.get('#next2'),
        cardBlocksList: () => cy.get('[class="card h-100"]')
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