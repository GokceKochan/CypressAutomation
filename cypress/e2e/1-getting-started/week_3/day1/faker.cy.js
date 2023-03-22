describe('faker kullanimi',()=>{
const faker=require('faker') //eski versiyon import sekli
//Faker faker=new Faker();
//import 
it('faker 1', () => {.       
   // faker.name.firstName()
    cy.writeFile('cypress/fixtures/fakeData.json',{

firstName:faker.name.firstName(),
lastName:faker.name.lastName(),
phoneNumber:faker.phone.phoneNumber()




})

    });
})