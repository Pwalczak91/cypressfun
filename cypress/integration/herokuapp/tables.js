/// <reference types="Cypress" />

context('Tables tests', () => {

    const selectorFirstNameHeader = 'span.first-name'
    const selectorFirstNameSingleCell = 'td.first-name'

    const selectorLastNameHeader = 'span.last-name'
    const selectorLastNameSingleCell = 'td.last-name'

    const selectorDuesHeader = 'span.dues'
    const selectorDuesSingleCell = 'td.dues'

    const selectorEmailsHeader = 'span.email'
    const selectorEmailSingleCell = 'td.email'

    const selectorWebSiteHeader = 'span.web-site'
    const selectorWebSiteCell = 'td.web-site'

    before(() => {
        cy.visit('/tables')
    })

    it('Should do correct sorting for First name', function() {
        putColumnValuesIntoArray(selectorFirstNameHeader, selectorFirstNameSingleCell).then(listFirmNames=> {
             let actual = listFirmNames.slice()
             cy.wrap(actual).should('deep.equal', listFirmNames.sort())
         })
     })

     it('Should do correct sorting for Last name', function() {
        putColumnValuesIntoArray(selectorLastNameHeader, selectorLastNameSingleCell).then(listLastNames=> {
             let actual = listLastNames.slice()
             cy.wrap(actual).should('deep.equal', listLastNames.sort())
         })
     })
    
    it('Should do correct sorting for dues', function() {
       putColumnValuesIntoArray(selectorDuesHeader, selectorDuesSingleCell).then(listDues=> {
            let actual = listDues.slice()
            cy.wrap(actual).should('deep.equal', listDues.sort(function(a, b){ return a - b; }))
        })
    })

    it('Should do correct sorting for email', function() {
       putColumnValuesIntoArray(selectorEmailsHeader, selectorEmailSingleCell).then(columnTexts=> {
           let actual = columnTexts.slice()
           cy.wrap(actual).should('deep.equal', columnTexts.sort())
       })
    })

    it('Should do correct sorting for Web Site', function() {
        putColumnValuesIntoArray(selectorWebSiteHeader, selectorWebSiteCell).then(columnTexts=> {
            let actual = columnTexts.slice()
            cy.wrap(actual).should('deep.equal', columnTexts.sort())
        })
     })

    

    function putColumnValuesIntoArray(columnHeader, columnCell) {
        let listCellsText = [];
        cy.get(columnHeader).click()
        return new Cypress.Promise(resolve => {
             cy.get(columnCell).each(elements => {
             listCellsText.push(elements.text().replace('$', ''))
         })
         .then(() => resolve(listCellsText))
    })
    }
})

    
