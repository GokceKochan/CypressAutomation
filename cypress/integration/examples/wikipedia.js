describe('Weather test', () => {
  it('should display weather for a random city on Saturday at least a week away', () => {
    // Select 10 random cities from the list of cities on Wikipedia
    cy.visit('https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities')
    cy.get('#mw-content-text table.wikitable tbody tr td:first-child a')
      .then($cities => {
        const cityLinks = $cities.toArray().map(city => city.href)
        const cities = Cypress._.sampleSize(cityLinks, 10)

    // Select one random city from the list
    const cityName = cities[Math.floor(Math.random() * cities.length)];

    // Navigate to the BBC weather website for the selected city and click on the weather forecast for next Saturday
    cy.visit('https://www.bbc.co.uk/weather');

    cy.origin('https://www.bbc.co.uk', {args: {cityName}},({cityName}) => {
     
    cy.get('#ls-c-search__input-label')
      .type(cityName)
      .type('{enter}').click;
    cy.get('.ls-c-locations-list li a')
      .first()
      .click();
    cy.contains('.wr-day__name', 'Saturday')
      .parentsUntil('.wr-calendar__day')
      .last()
      .find('.wr-date__time')
      .click();
  });
})
})
})
