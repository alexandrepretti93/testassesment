import home from '../support/pages/home'
import signup from '../support/pages/signup'
import login from '../support/pages/login'
import products from '../support/pages/products'
import cart from '../support/pages/cart'

describe('Home buttons', () => {
  beforeEach(() => {
      home.goToHomePage()
    })
    
  
  it('Test 1', () => {
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

  it('Test 2', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    products.clickOnGalaxyS6()
    products.clickAddToCart()
    home.clickHomeBtn()
    home.goToPhones()
    products.clickOnNexus6()
    products.clickAddToCart()
    home.goToCart()
    cart.deleteRandomFromList()
    cart.clickPlaceOrderBtn()
    cart.fillOrderData()
    cart.clickOnPurchaseBtn()
    cart.clickOkAfterPurchase()
})

  it('Test 3', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    products.clickOnGalaxyS6()
    products.clickAddToCart()
    home.clickHomeBtn()
    home.goToPhones()
    products.clickOnNexus6()
    products.clickAddToCart()
    home.goToCart()
    cart.deleteRandomFromList()
    cart.clickPlaceOrderBtn()
    cart.fillOrderData()
    cart.clickOnPurchaseBtn()
    cart.ValidatePurchaseInfo()
    cart.clickOkAfterPurchase()
  })
  
  it('Test 4', () => {
    home.clickLogInBtn()
    login.fillLoginData()
    home.goToPhones()
    products.validatePhonesItems()
    home.goToLaptops()
    products.validateLaptopsItems()
    home.goToMonitors()
    products.validateMonitorsItems()
  })


})

