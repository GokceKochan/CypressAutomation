///<reference types="cypress"/>


describe('My First Test Suite', function() {
  it('My First test Case',function()  {

  
    
    cy.visit("https://en.wikipedia.org/wiki/List_of_cities_in_the_United_Kingdom#List_of_cities");
    cy.get('table.wikitable tbody tr').then((rows) => {
      const cities = Cypress._.sampleSize(rows, 10).map((row) => {
        return Cypress.$(row).find('td:nth-child(2)').text();
      });
      // Select a random city from the list
      let selectedCity = Cypress._.sample(cities);
      
      // Go to the BBC weather website
      cy.visit('https://bbc.co.uk/weather');
      
      // Search for the location

cy.origin('https://www.bbc.co.uk', () => {

cy.get('#ls-c-search__input-label').type("London,Greater London").type('{enter}');
       
// Go to Saturday at least a week from today
       cy.wait(4000);
       cy.get(':nth-child(1) > .ls-o-location > .gel-long-primer').click();
       cy.get('#wr-day__content wr-day__content--temp7to8 wr-js-day-content').click();

       cy.get('.wr-time-slot-list__time-slot--day0').then(($timeSlots) => {

         // Check if the weather will be sunny and at least 10C
         const matchingSlots = Cypress._.filter($timeSlots, ($slot) => {
           const temperature = Cypress.$($slot).find('.wr-value--temperature--c').text();
           const weather = Cypress.$($slot).find('.wr-value--weather-type').text();
           return weather === 'Sunny' && parseFloat(temperature) >= 10;
         });
         
         if (matchingSlots.length === 0) {
           // No matching weather was found, send a message to the other inbox
           const message = `Sorry, couldn't find any sunny and warm places in the UK for next Saturday.`;
           cy.task('sendEmail', { from: 'first@example.com', to: 'second@example.com', subject: 'UK Weather Report', message: message });
         } else {
           // Matching weather was found, send a message to the other inbox
           const location = Cypress.$('.wr-location-name__name').text();
           const message = `The weather in ${location} will be sunny and at least 10C next Saturday.`;
           cy.task('sendEmail', { from: 'first@example.com', to: 'second@example.com', subject: 'UK Weather Report', message: message });
         }
       });
     });

})
     
     
    
    // Log in to the second inbox and verify the message
    cy.visit('https://example.com/email-client');
    cy.get('#username').type('second@example.com');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.get('.inbox').contains('UK Weather Report').click();
    cy.get('.message-body').then(($body) => {
      const message = $body.text();
      // Verify that the message contains the correct information
      // ...
    });
    
  })
})
