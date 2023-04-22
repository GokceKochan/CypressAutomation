describe('database deneme test table', () => {

    it('database 1', () => {


        cy.task('queryDb', 'Select * from `tester`').then(data => {

            cy.log(data)

        })

    });
    it.only('database 2', () => {


        cy.task('queryDb', "DELETE FROM tester WHERE `tester`.`userId` = 4").then(data => {

            cy.log(data)

        })

    });

})