/// <reference types="Cypress" />
context('Login tests', () => {

    const CORRECT_LOGIN = 'tomsmith'
    const CORRECT_PASSWORD = 'SuperSecretPassword!'

    const WRONG_LOGIN = 'randomLogin'
    const WRONG_PASSWORD = 'randomPass'

    const SUCCESSFUL_HEADER_LOGIN_MSG = 'You logged into a secure area!'
    const FAILURE_HEADER_LOGIN_MSG = 'Your username is invalid!'
    const SUCCESSFUL_BODY_LOGIN_MSG = 'Welcome to the Secure Area. When you are done click logout below.'

    beforeEach(() => {
        cy.visit('/login')
    }) 
     

    it('Should login to the app when using correct user data', function() {
        cy.signIn(CORRECT_LOGIN, CORRECT_PASSWORD)
        assertSuccessfulLogin()

    })

    it('Should show error message when using incorect user data', function() {
        cy.signIn(WRONG_LOGIN, WRONG_PASSWORD)
        cy.assertTextInElement('#flash', FAILURE_HEADER_LOGIN_MSG)
    })

    function assertSuccessfulLogin() {
        cy.assertTextInElement('#flash', SUCCESSFUL_HEADER_LOGIN_MSG)
        cy.assertTextInElement('.subheader', SUCCESSFUL_BODY_LOGIN_MSG)
        cy.assertTextInElement('.button', 'Logout')
    }
})