/*
let sayi3
let sayi4
*/
let sayi1, sayi2, sayi3
let sayiListesi1 = [15, 75, 36]

sayi1 = sayiListesi1[0]
sayi2 = sayiListesi1[1]
sayi3 = sayiListesi1[2]

console.log("sayi1 = ", sayi1)
console.log("sayi2 = ", sayi2)
console.log("sayi3 = ", sayi3)
console.log("********************")
let sayi4, sayi5, sayi6

    [sayi4, sayi5, sayi6] = sayiListesi1[sayi4, sayi5, sayi6] = [15, 75, 36]

console.log("sayi4 = ", sayi4)
console.log("sayi5 = ", sayi5)
console.log("sayi6 = ", sayi6)
console.log("********************")
let sayiListesi2 = [25, 7, 96, 23, 72]
let sayi7, sayi8, sayi9

    [sayi7, sayi8, sayi9] = sayiListesi2

console.log("sayi7 = ", sayi7)
console.log("sayi8 = ", sayi8)
console.log("sayi9 = ", sayi9)
console.log("********************")
let sayi10, sayi11, tamami

    [sayi10, sayi11, ...tamami] = sayiListesi2
console.log("sayi10 = ", sayi10)
console.log("sayi11 = ", sayi11)
console.log("tamami = ", tamami)

console.log("********************")

let personel = {
    ad: "mehmet",
    meslek: "It",
    soyad: "kilic"
}
let isim = personel.ad
let soyIsim = personel.soyad
console.log(isim)
console.log(soyIsim)
let ad, soyad

    ({ ad, soyad } = personel)

console.log("ad = ", ad)
console.log("soyad = ", soyad)

console.log("********************")

let deger1 = 15
let deger2 = 25

// deger1 = 25 olacak deger2 = 15

let temp = deger1
deger1 = deger2
deger2 = temp
console.log(deger1)
console.log(deger2)
console.log("********************")

let a = 15
let b = 25;

[a, b] = [b, a]

console.log(a)
console.log(b)