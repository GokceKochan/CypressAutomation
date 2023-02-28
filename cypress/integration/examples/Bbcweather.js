describe('Weather Forecast Test', () => {

    const cities = ['London', 'Manchester', 'Bristol', 'Edinburgh', 'Cardiff', 'Leeds', 'Glasgow', 'Cambridge', 'Belfast', 'Newcastle upon Tyne'];
  
    it('checks the weather forecast for ten random cities', () => {
      cy.visit('https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities');
  
      // Get ten random cities from the table
      const randomCities = Cypress._.sampleSize(cities, 10);
  
      // Loop through the random cities and check the weather forecast
      cy.wrap(randomCities).each((city) => {
        cy.get('table.wikitable.sortable').contains(city).click();
  
        // Get the city name from the page
        cy.get('h1').should('contain', city);
  
        // Get the city's weather forecast for next Saturday

        cy.visit('https://bbc.co.uk/weather');

        cy.origin('https://www.bbc.co.uk', {args: {city}},({city}) => {
           cy.visit('/weather')

        cy.get('#ls-c-search__input-label').type(city).type('{enter}')
        cy.ge.click;
        cy.get(".wr-day__title wr-js-day-content-title")
  .contains("Saturday")
  .parentsUntil(".wr-calendar__day")
  .last()
  .find(".wr-date__time")
  .click();
  
        // Check that the weather forecast is displayed for the correct location
        cy.get('#wr-location-name-id').should('contain', city);
      });
    });
  
    it('checks the weather forecast for one random city', () => {
      cy.visit('https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities');
  
      // Get a random city from the table
      const randomCity = Cypress._.sample(cities);
  
      // Check the weather forecast for the random city
      cy.get('table.wikitable.sortable').contains(randomCity).click();
  
      // Get the city name from the page
      cy.get('h1').should('contain', randomCity);
  
      // Get the city's weather forecast for next Saturday
      //cy.visit('https://bbc.co.uk/weather');
      cy.origin('https://www.bbc.co.uk', {args: {randomCity}},({randomCity}) => {
        cy.visit('/weather')
      cy.get('#ls-c-search__input-label').type(randomCity).type('{enter}');
      cy.get(".wr-date")
      .contains("Saturday")
      .parentsUntil(".wr-calendar__day")
      .last()
      .find(".wr-date__time")
      .click();
  
      // Check that the weather forecast is displayed for the correct location
      cy.get('#wr-location-name-id').should('contain', randomCity);
    });
  });
})
})