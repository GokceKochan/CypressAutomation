const firstName = 'omer'
const lastName = 'ali'
// beforeEach(() => {
//     cy.visit('https://demoqa.com/', { timeout: 30000 })
//     cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
//     cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
// })


it('assertions cypress should and', () => {
    cy.visit('https://demoqa.com/', { timeout: 30000 })
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()

    cy.get('#firstName').type(firstName, { delay: 100 })
        .should('be.visible')
        .should('have.value', firstName)

    // cy.get('#firstName').then((val) => {

    //    cy. expect(val).to.equal(firstName)

    // })


    cy.get('#lastName').type(lastName)
        .should('exist')
        .and('have.value', lastName)
        .and('contain.value', 'li')
        .and('not.have.value', firstName)


});


it.only('length assertion', () => {
    cy.visit('https://demoqa.com/', { timeout: 30000 })
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()



    cy.get('.element-list.collapse.show>ul>li').should('have.length', 9)
    .should('be.greaterThan', 5)
    .should('be.at.least', 10)
    .should('be.lessThan', 10)
    .should('be.within', 5, 10)
});