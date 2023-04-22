let deger = "15"

// stringdegeri number a cevirme

let intDeger1 = Number(deger)
let intDeger2 = parseInt(deger)
let intDeger3 = +deger
    // tek ~ negatif deger verir cift ~~ pozitif number degerine parse eder
let intDeger4 = ~~deger
console.log(intDeger1, " ", typeof intDeger1)
console.log(intDeger2, " ", typeof intDeger2)
console.log(intDeger3, " ", typeof intDeger3)
console.log(intDeger4, " ", typeof intDeger4)

// number degeri stringe cevirme
console.log("******")
let value = 25
let boolDeger = true

let stringValue1 = String(value)
let stringValue2 = value.toString()
let stringValue3 = value + ""
let stringValue4 = boolDeger.toString()



console.log(value, " ", typeof value)
console.log(stringValue1, " ", typeof stringValue1)
console.log(stringValue2, " ", typeof stringValue2)
console.log(stringValue3, " ", typeof stringValue3)
console.log(stringValue4, " ", typeof stringValue4)

console.log("**********")

/// objeyi( json ve array) stringe çevirme

let ogrenci1 = {
    ad: "ali",
    soyadi: "zan"
}
let stringOgrenci = JSON.stringify(ogrenci1)
console.log(typeof ogrenci1, "ogrenci", ogrenci1)
console.log(typeof stringOgrenci, "ogrenci", stringOgrenci)
console.log("************")
let sayiListem = [25, 14, 36, 78]
let stringSayiListem = JSON.stringify(sayiListem)

console.log(typeof sayiListem, "sayiListem", sayiListem)
console.log(typeof stringSayiListem, "stringSayiListem", stringSayiListem)

/// stringi objeye( json ve array)  çevirme
console.log("************")

let listem = "[14,78,36]"

let arrayListem = JSON.parse(listem)

console.log(typeof listem, " ", listem)
console.log(typeof arrayListem, " ", arrayListem)
console.log("*****************")

let ogrenci2 = '{"ad":"ahmet", "soyad":"mert"}'
let objeOgrenci2 = JSON.parse(ogrenci2)
    //console.log(objeOgrenci2.ad)
console.log(typeof ogrenci2, " ", ogrenci2)
console.log(typeof objeOgrenci2, " ", objeOgrenci2)

console.log("************")