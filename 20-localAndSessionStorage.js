localStorage.setItem("ad", "Melis")
localStorage.setItem("soyad", "can")

let isim = localStorage.getItem("ad")
let soyIsim = localStorage.getItem("soyad")
console.log(localStorage.key(0))
console.log("isim = ", isim)
console.log("soyIsim = ", soyIsim)

console.log("******removeItem parametre olarak key degeri verilen elemanı siler********")
localStorage.removeItem("ad")
localStorage.removeItem("soyad")
console.log("isim = ", isim)

localStorage.setItem("yas", 36)
localStorage.setItem("meslek", "IT")
console.log("*********clear localStoragedeki tum degerleri siler********")
localStorage.clear()

console.log("************SessionStorage*********************")

sessionStorage.setItem("isim", "aydin")
sessionStorage.setItem("soyad", "kilic")
console.log(sessionStorage.getItem("isim"))
console.log(sessionStorage.getItem("soyad"))
console.log("******removeItem parametre olarak key degeri verilen elemanı siler********")

sessionStorage.removeItem("isim")
console.log("*********clear sesisonLocalStorage tum degerleri siler********")

sessionStorage.clear()

console.log("*******************")

let sayiListem = [15, 45, 36]
    /*
    localStorage.setItem("listem", sayiListem)
    let getSayiListem1 = localStorage.getItem("listem")
    console.log(typeof getSayiListem1, "listem = ", getSayiListem1)
    */
let stringSayiListem = JSON.stringify(sayiListem)
localStorage.setItem("listem", stringSayiListem)
let getSayiListem1 = localStorage.getItem("listem")
let arraySayiListem = JSON.parse(getSayiListem1)
console.log(arraySayiListem)

console.log("***************")
let ogrenci = {
    ad: "ali",
    soyadi: "zan"
}
let stringOgrenci = JSON.stringify(ogrenci)

localStorage.setItem("ogrenci", stringOgrenci)
let getOgrenci = localStorage.getItem("ogrenci")
let objeOgrenci = JSON.parse(getOgrenci)
console.log(typeof objeOgrenci, " ", objeOgrenci)

console.log("***************")