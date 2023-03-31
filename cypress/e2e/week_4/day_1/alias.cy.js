import FirstTestCasePage from "../../pages/FirstTestCasePage";

describe('alias kullanimi', () => {
    const automationteststore = new FirstTestCasePage
    context('2. yol contex', () => {

        beforeEach(() => {
            // sayfaya gittik
            automationteststore.goToMainPage()
            // click first product
            automationteststore.firstProduct_click()

            // quantity temizlendi ve yeni degeri gonderildi
            automationteststore.unitQuantity().clear().type('2')

            // zaman gecirmek icin kullandim
            automationteststore.unitPrice().click()

            // click add to cart
            automationteststore.addToProduct_click()


            // subtotal
            automationteststore.subtotal().invoke('text').as('subtotal')
            // flat
            automationteststore.flat().invoke('text').as('flat')
            // flat
            automationteststore.finalPrice().invoke('text').as('final')

        })

        it('alias this kullanimi', function(){

            cy.log(`subtotal ${this.subtotal} , flat ${this.flat} , final ${this.final}  `)


         //   expect(_finalTotal).to.equal(_flat + _subtotal)


        });

    })
})