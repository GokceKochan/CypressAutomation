let toplama = (a, b, c, d) => a + b + c + d

let sonuc = toplama(3, 7, 8, 2)
console.log(sonuc)
console.log("********spread birinc kullanin yeri******************")
let sayilar = [3, 8, 9, 15, 85, 78, 36]

let sonuc2 = toplama(sayilar[0], sayilar[1], sayilar[2], sayilar[3])
console.log(sonuc2)
console.log("**************************")
let sonuc3 = toplama(...sayilar)
console.log(sonuc3)
console.log("******array oldugu gibi********************")
console.log(sayilar)
console.log("******** array spread ile ******************")
console.log(...sayilar)
console.log("**************************")

let sayiListesi1 = [25, 15, 36]
let sayiListesi2 = sayiListesi1;

console.log("sayiListesi1 = ", sayiListesi1)
console.log("sayiListesi2 = ", sayiListesi2)

sayiListesi1.push(98)
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi2 = ", sayiListesi2)
console.log("*********yontem 1*********")
let sayiListesi3 = []
sayiListesi1.forEach(element => {
    sayiListesi3.push(element)
});
sayiListesi3.push(72)
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi2 = ", sayiListesi2)
console.log("YenisayiListesi3 = ", sayiListesi3)
console.log("********yontem 2**********")

let sayiListesi4 = sayiListesi1.concat()
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi2 = ", sayiListesi2)
console.log("YenisayiListesi3 = ", sayiListesi3)
console.log("YenisayiListesi4 = ", sayiListesi4)
sayiListesi4.push(34)
console.log("**********************")
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi2 = ", sayiListesi2)
console.log("YenisayiListesi3 = ", sayiListesi3)
console.log("YenisayiListesi4 = ", sayiListesi4)
console.log("*********yontem 3 spread operatoru (spread ikinci kullanin yeri)*********")

let sayiListesi5 = [...sayiListesi1]
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi5 = ", sayiListesi5)
console.log("**********************")
sayiListesi5.push(42)
console.log("YenisayiListesi1 = ", sayiListesi1)
console.log("YenisayiListesi5 = ", sayiListesi5)

console.log("*********spread ucunce kullanin yeri*************")

let numaralar1 = [232, 36, 78]
let numaralar2 = [13, 7, 20]
    /// iki arrayi birleştirmek istiyrouz
console.log("******** yontem 1 for dongusu **********")

let numaralar3 = []
numaralar1.forEach(element => {
    numaralar3.push(element)
});
numaralar2.forEach(element => {
    numaralar3.push(element)
});
console.log(numaralar3)

console.log("******** yontem 2 concat **********")

let numaralar4 = numaralar1.concat(numaralar2)
console.log(numaralar4)

console.log("******** yontem 3 spread **********")

let numaralar5 = [...numaralar1, ...numaralar2]
console.log(numaralar5)

let numaralar6 = [...numaralar1, ...numaralar2]
console.log(numaralar6)
console.log("**********************************")
    // yeni bir array olacak arrayin içine 9,8 ve numaral1 ve numaralar2 degerlerin eklenecek

let numaralar7 = numaralar1.concat(numaralar2)
numaralar7.push(9)
numaralar7.push(8)
console.log(numaralar7)
console.log("*****************")
let numaralar8 = [...numaralar1, ...numaralar2, 9, 8]
console.log(numaralar8)

console.log("**********************************")

let deger1 = [15, 25, 9]
let deger2 = [5, 3, 9]
let deger3 = [...deger1, ...deger2]
console.log(deger3)
console.log("**********************************")

let personel1 = {
    isim: "ali",
    yas: 27,
    egitim: "lisans"
}
console.log(personel1)
console.log("******************")
let personel2 = {...personel1 }
console.log(personel1)
console.log(personel2)

console.log("******************")

let ogrenci1 = {
    isim: "Ahmet",
    soyIsim: "Mert",
    cinsiyet: "erkek"
}
console.log(ogrenci1)
let ogrenci2 = {
    isim: "Yildiz",
    soyIsim: "Korkamaz",
    egitim: "Lise"
}
let ogrenci3 = {...ogrenci1, ...ogrenci2 }
let ogrenci4 = {...ogrenci2, ...ogrenci1 }
console.log(ogrenci3)
console.log(ogrenci4)