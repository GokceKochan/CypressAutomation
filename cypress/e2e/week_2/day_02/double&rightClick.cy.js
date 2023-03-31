describe('',()=>{


    it('double click', () => {

        cy.get('a#nav1').dblclick() 
    })

    it('right click ',()=>{
        cy.get('a#nav1').rightclick() 
    })
})