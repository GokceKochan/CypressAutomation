import errors from '../../../fixtures/errors.json'
describe('task 2', () => {



    beforeEach(() => {
        cy.visit("https://demoqa.com/")
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click()
    });


    it.only('test 1', () => {

        cy.get(errors.doubleClick.webElementButton).dblclick()

        // should assertion
        cy.get(errors.doubleClick.webElementText)
            .should('have.text', errors.doubleClick.message)

    
        // bdd expect chai assertion 
        cy.get(errors.doubleClick.webElementText).invoke('text').then(($input)=>{
            cy.expect($input).to.equal(errors.doubleClick.message)
        })
        

    });

    it('test 2', () => {

        cy.get(errors.rightClick.webElementButton).rightclick()

        // should assertion
        cy.get(errors.rightClick.webElementText)
            .should('have.text', errors.rightClick.message)

    
        // bdd expect chai assertion 
        cy.get(errors.rightClick.webElementText).invoke('text').then(($input)=>{
            cy.expect($input).to.equal(errors.rightClick.message)
        })
        

    });

    it('test 3', () => {

        cy.xpath(errors.singleClick.webElementButton).click()

        // should assertion
        cy.get(errors.singleClick.webElementText)
            .should('have.text', errors.singleClick.message)

    
        // bdd expect chai assertion 
        cy.get(errors.singleClick.webElementText).invoke('text').then(($input)=>{
            cy.expect($input).to.equal(errors.singleClick.message)
        })
        

    });
})


