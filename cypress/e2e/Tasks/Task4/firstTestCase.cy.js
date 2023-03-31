/// <reference types="cypress" />
import FirstTestCasePage from "../../../pages/FirstTestCasePage";

describe('first test case', () => {
    const _quntity = 2
    let unit_float;
    let total_float;
    let _subtotal;
    let _flat
    let _finalTotal
    const automationteststore = new FirstTestCasePage
    it.skip('way 1', () => {
        // sayfaya gittik
        automationteststore.goToMainPage()
        // click first product
        automationteststore.firstProduct_click()

        // quantity temizlendi ve yeni degeri gonderildi
        automationteststore.unitQuantity().clear().type(_quntity);

        // zaman gecirmek icin kullandim
        automationteststore.unitPrice().click();

        automationteststore.unitPrice()
            .invoke('text')
            .then($unitPrice => {
                unit_float = parseFloat($unitPrice.replace('$', ''));
                //cy.log("unit price then ici: " + unit_float)

                automationteststore.unitTotalPrice()
                    .invoke('text')
                    .then($totalPrice => {
                        total_float = parseFloat($totalPrice.replace('$', ''));

                        // assertion 1
                        expect($unitPrice * _quntity == $totalPrice).to.be.true
                        // assertion 2
                        expect(unit_float * _quntity).to.equal(total_float)
                    })
            })



    });

    context('2. yol contex', () => {

        beforeEach(() => {
            // sayfaya gittik
            automationteststore.goToMainPage()
            // click first product
            automationteststore.firstProduct_click()

            // quantity temizlendi ve yeni degeri gonderildi
            automationteststore.unitQuantity().clear().type(_quntity)

            // zaman gecirmek icin kullandim
            automationteststore.unitPrice().click()

            // click add to cart
            automationteststore.addToProduct_click()


            // subtotal
            automationteststore.subtotal().invoke('text').then($subtotal => {
                _subtotal = parseFloat($subtotal.replace('$', ''))
            })
            // flat
            automationteststore.flat().invoke('text').then($flat => {
                _flat = parseFloat($flat.replace('$', ''))
            })
            // flat
            automationteststore.finalPrice().invoke('text').then($finalPrice => {
                _finalTotal = parseFloat($finalPrice.replace('$', ''))
            })

        })

        it('way 2', () => {

            cy.log(`subtotal ${_subtotal} , flat ${_flat} , final ${_finalTotal}  `)


            expect(_finalTotal).to.equal(_flat + _subtotal)


        });

    })




})