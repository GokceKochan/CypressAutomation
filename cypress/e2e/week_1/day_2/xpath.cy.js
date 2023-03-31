describe('xpath kullanimi',()=>{
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
    })


    it('xpah kullanimi', () => {
        cy.xpath("//input[@type='tel']").type('124587866')
        .should('have.value','124587866')
    });


})