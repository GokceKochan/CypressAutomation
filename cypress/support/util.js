import faker from 'faker'

// way 1
// ES6 oncesi
export function generateFakerData2() {

    cy.writeFile('cypress/fixtures/fakeData.json', {

        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber('##########')

    })
}

// way 2
// ES6 sonrasi
const generateFakerData = () => {

    cy.writeFile('cypress/fixtures/fakeData.json', {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber('##########')
    })
}

const login = (username,password)=>{
    // username
    //password
}

export default {
    generateFakerData,
    login
}