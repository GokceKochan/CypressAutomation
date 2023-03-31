//1.yol
//describe("first Day",()=>{

//})

//2.yol
describe('first Day',() => {

context('first group',()=> {
    before(() =>{

})//hepsinden once bir defa calisir

after(() =>{

})//hepsinden. sonra bir defa calisie

// hepsinden sonra bir defa calisir
beforeEach(() => {

}) // her it blogundan once calisir
afterEach(() => {

})//her it blogundan sonra calisir

it('visit calismasi', () => {
    cy.visit('https://demo.automationtesting.in/Register.html')

    const firstName='kesif danismanlik'
    const lastName='cypress batch 1'

    cy.get("[ng-model='FirstName']")
    .type(firstName)
    .should('have.value',firstName)
    .and('contain.value','kesif')
    .and('be.visible')
    .and('exist');

    cy.get("input[placeholder='Last Name']")
    .type(lastName)
    .should('have.value',lastName)
    
})



})


context('group 2',() =>{

})



})