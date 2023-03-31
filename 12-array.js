console.log('hello')
let isim = "mert"

let listem = ["ali", "merve", "mehmet", "zeynep"]
console.log(listem)
listem[1] = "aylin"
console.log(listem)
    // arrayin sonuna eleman ekler
listem.push("kaya")
console.log(listem)
    // arrayin basındaki elemanı siler
listem.shift()
console.log(listem)
    // arrayıin sonundaki elamanı siler
listem.pop()
console.log(listem)
    // arrayın basına elaman ekler
listem.unshift("yildiz")
console.log(listem)
console.log("********for************")

let isimler = ["melis", "burhan", "asli", "cetin"]
console.log(isimler)

console.log(isimler.length)

for (let index = 0; index < isimler.length; index++) {
    console.log(isimler[index])
}

console.log("********forEach************")
isimler.forEach(function(eleman) {
    if (eleman == "melis") {
        console.log("selam ", eleman)
    } else {
        console.log(eleman)
    }
});
console.log("********forEach************")
isimler.forEach(function(eleman, index) {
    console.log(index, ". elaman = ", eleman)
});
console.log("********includes*********")
    //includes parametredeki deger arrayde varmı dıye sorar
isimler = ["melis", "burhan", "asli", "cetin"]
console.log("isimler.includes() = ", isimler.includes("melis"))
console.log("isimler.includes() = ", isimler.includes("leyla"))

console.log("********filter*********")
let sayilar = [5, 8, 78, 36, 85, 63];
let yirmiBesdenBuyukler = sayilar.filter(function(elaman) {
    if (elaman > 25) { return elaman; }
})
console.log("yirmiBesdenBuyukler = ", yirmiBesdenBuyukler)

// sayilardaki tek sayıları tekSayilar arrayine cift sayilar çift sayilar arryine atayın
let tekSayilar = sayilar.filter(function(elaman) {
    if ((elaman % 2) == 1) { return elaman; }
})
console.log("tek sayilar = ", tekSayilar)
let ciftSayilar = sayilar.filter(function(elaman) {

    if ((elaman % 2) == 0) { return elaman; }
})
console.log("cift sayilar = ", ciftSayilar)

console.log("********map*********")
sayilar = [5, 8, 78, 36, 85, 63];
let yeniSayilarForeach = [];
sayilar.forEach(elaman => {
    let deger = elaman * 2
    yeniSayilarForeach.push(deger)
});
console.log("sayilar = ", sayilar)
console.log("yeniSayilarForeach = ", yeniSayilarForeach)

let yeniSayilarMap = sayilar.map(function(elaman) {
    return elaman * 2
})
console.log("yeniSayilarMap = ", yeniSayilarMap)

console.log("*********some*************")
sayilar = [5, 8, 78, 36, 85, 63];
// some arrayde bir  eleman kosulu saglamarda true degeri verir
let ondanBuyukVarmi = sayilar.some(function(elaman) {
    return elaman > 10
})
console.log("ondanBuyukVarmi  some= ", ondanBuyukVarmi)

// every arraydeki her eleman kosulu saglamarsa true degeri verir
console.log("*********every*************")
sayilar = [5, 8, 78, 36, 85, 63];
ondanBuyukVarmi = sayilar.every(function(elaman) {
    return elaman > 54
})
console.log("ondanBuyukVarmi every = ", ondanBuyukVarmi)

console.log("*********sort*************")
sayilar = [5, 8, 78, 36, 85, 63];

/*
console.log("sayilar       = ", sayilar)
// eksi yazım farklı duzenleme yapmak gerek
sayilar.sort()
console.log("sayilarSirali = ", sayilar)
*/
sayilar.sort(function(a, b) {
    return a - b
})
console.log("sayilar       = ", sayilar)
console.log("KucuktenBuyugeSayilar = ", sayilar)
console.log("***********")
sayilar.sort(function(a, b) {
    return b - a
})

console.log("BuyuktenKucugeSayilar = ", sayilar)

console.log("*****************reduce***********")