describe('Weather Forecast', () => {
  it('should navigate to Saturday next week for a random city', () => {
    // Open the Wikipedia page with the list of cities in the United Kingdom
    cy.visit('https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities')

    // Find the table of cities and select 10 random cities from it
    const cityRows = cy.get('#mw-content-text .wikitable tbody tr')
    const cityNames = cityRows.then(rows => {
      const names = []
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * rows.length)
        const cityName = rows[randomIndex].children[0].innerText
        names.push(cityName)
      }
      return names
    })

    // Select a random city from the list
    const selectedCity = cityNames.then(names => {
      const randomIndex = Math.floor(Math.random() * names.length)
      return names[randomIndex]
    })
    cy.visit('https://bbc.co.uk/weather');

    // Navigate to the BBC Weather website
    cy.origin('https://www.bbc.co.uk', {args: {selectedCity}},({selectedCity}) => {
      cy.visit('/weather')

    // Find the search input field and enter the selected city
    cy.get('#ls-c-search__input-label').type(selectedCity).type('{enter}').click;


    // Find the location name and check that it matches the search query
    cy.get('#wr-location-name-id').should('have.text', selectedCity)

    // Find the date navigation bar and navigate to next week
    cy.get('.wr-date__nav .wr-date__nav__next').click()

    // Get the current date and calculate the date for next Saturday
    const currentDate = new Date()
    const currentDayOfWeek = currentDate.getDay()
    const daysUntilNextSaturday = currentDayOfWeek === 6 ? 7 : 6 - currentDayOfWeek
    const nextSaturday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysUntilNextSaturday)

    // Find the element for next Saturday and check that it matches the calculated date
    const expectedDate = `${nextSaturday.getDate()} ${nextSaturday.toLocaleString('default', { month: 'short' })} ${nextSaturday.getFullYear()}`
    cy.get(`.wr-date__time[data-day="${expectedDate}"]`).should('be.visible')
  })
})
})
