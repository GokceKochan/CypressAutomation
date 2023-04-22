describe('navbar task 6', () => {

    const navbar = "[class^='Navbar_textLink__f6_Al mr-']"
    const expectedNav = [ 'blog', 'explore', 'about', 'contact-us', 'login', 'register' ]

    it('for loop ile cozumu', () => {

        cy.visit('https://test.urbanicfarm.com/')

        for (let i = 0; i < expectedNav.length; i++) {
            cy.get(navbar).eq(i).click()
            cy.url().should('contain', expectedNav[ i ])
            cy.go('back')
            cy.wait(1000)
        }
    });


    it('for in ile cozumu', () => {

        cy.visit('https://test.urbanicfarm.com/')

        for (const i in expectedNav) {
            cy.get(navbar).eq(i).click()
            cy.url().should('contain', expectedNav[ i ])
            cy.go('back')
            cy.wait(1000)
        }

    });




    it('for of ile cozumu', () => {

        cy.visit('https://test.urbanicfarm.com/')
        let count = 0
        for (const i of expectedNav) {
            cy.get(navbar).eq(count).click()
            cy.url().should('contain', i)
            cy.go('back')
            cy.wait(1000)
            count++
        }
    });


})