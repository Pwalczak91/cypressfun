/// <reference types="Cypress" />

describe('Slider testing', function() {


    before(() => {
        cy.visit('/horizontal_slider')
        cy.get('input').as('inputSlider')
    })

    // With array of supported values, we are checking if after change, the text with value updates.
    it('Check if slider changes the value', function() {
        let valuesSlider = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
        let index
        for (index = 0; index < valuesSlider.length; ++index) {
            cy.get('@inputSlider').invoke('val', valuesSlider[index]).trigger('change')
            cy.assertTextInElement('#range', valuesSlider[index])
        }
    })
})




