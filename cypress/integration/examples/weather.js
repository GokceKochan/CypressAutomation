describe('Weather forecast for a random city in the UK', () => {
    it('should display weather forecast for a random city in the UK on a future Saturday', () => {
      // Visit the Wikipedia page and select ten random cities from the table
      cy.visit('https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities')
      cy.get('#mw-content-text table.wikitable tbody tr td:first-child a')
        .then($cities => {
          const cityLinks = $cities.toArray().map(city => city.href)
          const randomCities = Cypress._.sampleSize(cityLinks, 10)
  
          // Select one random city from the previously selected list
          const randomCityLink = Cypress._.sample(randomCities)
          const cityName = randomCityLink.split('/').pop().replace(/_/g, ' ')
  
          // Go to the BBC weather website and search for the city
         
        
         

          cy.origin('https://www.bbc.co.uk', {args: {cityName}},({cityName})=> {
            cy.visit('/weather')

          cy.get('#ls-c-search__input-label').type(cityName).click()
          

          // Go to Saturday at least a week from today
        
          cy.wait(5000);
         const today = new Date()
        const nextSaturday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000))
        const nextSaturdayString = nextSaturday.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
         
        cy.get(`.day-carousel-tabs[data-day="${nextSaturdayString}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click()
        cy.get(`.day-carousel-tabs[data-day="${nextSaturdayString}"]`).click()
  
        //Verify that the weather forecast for the selected city is displayed
      
        cy.get('.wr-location-name').should('contain', cityName)
        });
        
    });
    })
  })
