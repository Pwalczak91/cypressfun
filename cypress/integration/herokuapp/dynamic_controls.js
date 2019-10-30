/// <reference types="Cypress" />

const CHECKBOX_PRESENT_MSG = 'It\'s back!'
const CHECKBOX_GONE_MSG = 'It\'s gone!'

context('Dynamic controls tests', () => {

    before(() => {
        cy.visit('/dynamic_controls')
        cy.get('form#checkbox-example').find('button').as('checkboxAddRemoveButton')
        cy.get('#checkbox').as('checkbox')
    }) 
    
    it('Check if adding / deleting checkbox works', function() {
        cy.get('@checkboxAddRemoveButton').click()
        cy.get('@checkboxAddRemoveButton').should('have.attr', 'disabled', 'disabled')
        assertMsg(CHECKBOX_GONE_MSG)
        cy.get('@checkbox').should('not.exist')
        cy.get('@checkboxAddRemoveButton').click()
        assertMsg(CHECKBOX_PRESENT_MSG)
        cy.get('@checkbox').should('be.visible')
    })

    function assertMsg(msg) {
        cy.assertTextInElement('#message', msg)
    }
    
})