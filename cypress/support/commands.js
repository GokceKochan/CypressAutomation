// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

import 'cypress-iframe';
import {commonPage} from '../pages/CommonPages';
//type definitions for custom commands like "createDefaultTodos"

import 'cypress-file-upload';

// ------------  utils ------  
import  utils from './util'  

Cypress.Commands.add('generateFakerData',utils.generateFakerData)

Cypress.Commands.add('iframe', utils.iframe)


Cypress.Commands.add('login', (email, password) => {



    commonPage.getLinks().goToLoginPage()
    commonPage.getLoginPage().typeUserName(email)
    commonPage.getLoginPage().typePassword(password)
    commonPage.getRegisterPage().clickSubmit()


})
