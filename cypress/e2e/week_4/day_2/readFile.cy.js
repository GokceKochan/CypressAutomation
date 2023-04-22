describe('read file', () => {
    it('read 1', () => {
        cy.readFile('cypress/fixtures/fakeData.json')
            .its('firstName')
            .should('equal', 'Hettie')
    });



    it('write and read', () => {

        const email = "omer"
        const password = "ali"

        cy.writeFile('cypress/downloads/data.json', {
            userName: email,
            userPassword: password
        })



    });


    it('only read', () => {

        cy.readFile('cypress/downloads/data.json').then(data => {

            cy.log(`username ${data.userName} password ${data.userPassword}`)
        })
    });





})

