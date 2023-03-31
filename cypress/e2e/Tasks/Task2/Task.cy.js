import errors from '../../../fixtures/errors.json'

describe('task 2',() =>{

    beforeEach(()=>{

cy.visit("https://demoqa.com/buttons")
    });

it('test1', () => {
    cy.get(errors.doubleClick.webElementButton).dblclick()
    //should assertion
    cy.get(errors.doubleClick.webElementText)
    .should('have.text',errors.doubleClick.message)

    //bdd expect chai assertion
    cy.get(errors.doubleClick.message).invoke('text').then((input)=>{
        cy.expect(input).to.equal(errors.doubleClick.message)

    })
    
});

it('test2', () => {
    cy.get(errors.doubleClick.webElementButton).rightclick()
    //should assertion
    cy.get(errors.rightClick.webElementText)
    .should('have.text',errors.rightClick.message)

    //bdd expect chai assertion
    cy.get(errors.rightClick.message).invoke('text').then((input)=>{
        cy.expect(input).to.equal(errors.rightClick.message)

    })
    
});

it('test3', () => {
    cy.xpath(errors.singleClick.webElementButton).click()
    //should assertion
    cy.get(errors.singleClick.webElementText)
    .should('have.text',errors.singleClick.message)

    //bdd expect chai assertion
    cy.get(errors.singleClick.message).invoke('text').then((input)=>{
        cy.expect(input).to.equal(errors.singleClick.message)

    })
    
});




})


