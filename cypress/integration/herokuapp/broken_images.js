/// <reference types="Cypress" />

describe('The broken image tests', function() {

    const REGEX_NOT_ZERO = /[^0]+/
    const SUCCESS_CODE = 200

    before(() => {
        cy.visit('/broken_images')
    })

    // This test cheks two things:
    // 1. If image is 'working' it's naturalHeight prop should not be 0.
    // 2. Additionally, opening it based on it's src url, should be successful. 

    it('Check if images are not broken.', function() {
        cy.get('.example').find('img').each(el => {
            expect(el).to.have.prop('naturalHeight').match(REGEX_NOT_ZERO)
            cy.wrap(el).invoke('attr', 'src').then(src => {
                cy.request(src).should((response) => {
                   expect(response.status).to.eq(SUCCESS_CODE)
                })
            })
        })
    })
})




