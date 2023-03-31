describe('Task 3', () => {

    it('test 1', () => {
        cy.visit('https://www.automationteststore.com/')


        // Has offsetHeight 
        // more than 30 
        // less than 40
        // has class called product


        // background-color is rgb(0, 161, 203)
        // bdd assetion 
        cy.get("[title='Add to Cart']")
//@@ -47,12 +39,5 @@ describe('Task 3', () => {
        cy.get("[title='Add to Cart']")
            .eq(0)
            .should('have.class', 'productcart')



        // has class called product
        cy.get("[title='Add to Cart']")
            .eq(0)
            .should('have.class', 'productcart')
    });
});
