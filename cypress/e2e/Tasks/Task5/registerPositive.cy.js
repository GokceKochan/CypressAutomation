import HomePage from "../../../pages/HomePage";
import LoginPage from "../../../pages/LoginPage";
import { productPage } from "../../../pages/ProductsPage";
import { registerPage } from "../../../pages/RegisterPage";
import data from '../../../fixtures/fakeData.json'
/// <reference types="cypress" />


describe('register posivite', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage

    beforeEach(() => {

        cy.generateFakerData()
    })


    it('register 1', () => {
        /**
         * Create fakeData.json which has following fields
        firstName
        middleName
        lastName
        email
        password
        Go to https://test.urbanicfarm.com/
        Click on register button on home page
        Fill all necessary information
        Submit form
        Assert toast message seen and it is “Welcome!” and its background colour is “rgb(7,188,12)”
        Assert url contains “home”
        Click on Logout button
        Assert url doesn’t contain “home”
        Click on Login Button on home page
        Assert url contains login
        Fiil the form by using fakeData.json
        Submit the form
        Assert url contains “home”
        
         */
        cy.visit('https://test.urbanicfarm.com/')
        homePage.click_register()

        // kullanici bilgileri girdik
        registerPage.typeFirstName().type(data.firstName,{force: true}).should('have.value', data.firstName)
        registerPage.typeMiddleName(data.middleName)
        registerPage.typeLastName(data.lastName)
        registerPage.typeEmail(data.email)
        registerPage.typePassword(data.password)
        registerPage.typeConfirmPassword(data.password)
        // submit ettik
        registerPage.clickSubmit()
        //toast
        productPage.assertToastMessage('Welcome!', 'rgb(7, 188, 12)')
        // url contains home
        cy.url().should('contain', 'home')
        //logout button a tikla
        productPage.click_logout()
        //Assert url doesn’t contain “home”
        cy.url().should('not.contain', 'home')
        //Click on Login Button on home page
        homePage.click_login()
        // Assert url contains login
        cy.url().should('contain', 'login')
        // Fiil the form by using fakeData.json
        loginPage.typeUserName(data.email)
        loginPage.typePassword(data.password)
        registerPage.clickSubmit()
        // url contains home
        cy.url().should('contain', 'home')



    });
})