import home from '../support/pages/home'
import signup from '../support/pages/signup'
import login from '../support/pages/login'
import phones from '../support/pages/phones'
import cart from '../support/pages/cart'

describe('Home buttons', () => {
  beforeEach(() => {
      home.goToHomePage()
    })
    
  
  xit('Test 1', () => {
        home.clickSignUpBtn()
        signup.fillSignUpData()
        home.clickSignUpBtn()
        signup.clearSignUpData()
        signup.fillSignUpDataExistingUser()
        home.clickLogInBtn()
        login.fillLoginData()
        home.clickLogOutBtn()
        home.clickLogInBtn()
        login.fillLoginInvalidData()
  })

  xit('Test 2', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    phones.clickOnGalaxyS6()
    phones.clickAddToCart()
    home.clickHomeBtn()
    home.goToPhones()
    phones.clickOnNexus6()
    phones.clickAddToCart()
    home.goToCart()
    cart.deleteRandomFromList()
    cart.clickPlaceOrderBtn()
    cart.fillOrderData()
    cart.clickOnPurchaseBtn()
})

  xit('Test 3', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    phones.clickOnGalaxyS6()
    phones.clickAddToCart()
    home.clickHomeBtn()
    home.goToPhones()
    phones.clickOnNexus6()
    phones.clickAddToCart()
    home.goToCart()
    cart.deleteRandomFromList()
    cart.clickPlaceOrderBtn()
    cart.fillOrderData()
    cart.clickOnPurchaseBtn()
    cart.ValidatePurchaseInfo()
  })
  
  it('Test 4', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    home.goToLaptops()
    home.goToMonitors()
  })


})

