import home from '../support/pages/home'
import signup from '../support/pages/signup'
import login from '../support/pages/login'
import phones from '../support/pages/phones'

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

  it('Test 2', () => {
    //home.clickLogInBtn()
    //login.fillLoginData()
    home.goToPhones()
    phones.clickOnFirstPhoneOnTheList()
})

  


})

