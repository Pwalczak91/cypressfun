/// <reference types="Cypress" />


context('Geolocation tests', () => {

    const LATITUDE = '51.1004721'
    const LONGITUIDE = '17.0369858'

    before(() => {
        cy.visit('/geolocation', fakeLocation(LATITUDE, LONGITUIDE))
    }) 
    
    it('Test if Google maps link contains correct geo cords', function() {
        cy.get('button').click()
        cy.get('#map-link > a').invoke('attr','href').then((hrefUrl) => {
            expect(hrefUrl).contain(LATITUDE + ',' + LONGITUIDE)
        })
    })

    // This is a workaround to fake user cords.
    // I've seen a github discussion that it is impossible to allow location by popup.
    function fakeLocation(latitude, longitude) {
        return {
          onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
              if (latitude && longitude) {
                return cb({ coords: { latitude, longitude } });
              }
              throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
            });
          }
        };
      }


    
})