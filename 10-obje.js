let isim ="mert"
//referans veri tipleri
let isimler=["ali","veli","merve",52]
console.log(isim)
console.log(isimler)
console.log("isimler",isimler[0])
console.log("isim",isim[0])
console.log("isim.charAt(0)",isim.charAt(0))

console.log("isim veri tipi ",typeof isim)
console.log("isimler veri tipi ",typeof isimler)

console.log("----------------------")

let personel = {
     isim:"melis",
     soyIsim:"kilic",
     maas:2500

}
console.log(personel)
console.log("personel.isim=",personel.isim)
console.log(personel.maas)

console.log("----------------------")

let ogrenci = {
isim : "Leyla",
soyIsim : "Akin",
basarilari: ["Java","Product Owner","Tester"]

}
console.log("ogrenci =",ogrenci)
console.log(ogrenci.isim)
console.log(ogrenci.isim,ogrenci.soyIsim)
console.log(ogrenci.basarilari[0])

console.log("----------------------")

let isci ={

    sicilNo:123456,
    birimi:"teknik servis",
    uzmanlik:["ag yonetimi","It"]

}
console.log("isci = ",isci)
//Destructuring
let {sicilNo}=isci
console.log(sicilNo)

//date

let bugun =new Date();
console.log(bugun)
console.log(bugun.getDate())
console.log(bugun.getFullYear())
console.log(bugun.getMonth())
console.log("--------------------")
const tarih=new Date("25 January 2023")
console.log("ay: ",tarih.getMonth())//aylar "0" baslar ,mevuct ay icin her zaman 1 eklemelisin

console.log(tarih)
console.log(tarih.getDate())
console.log(tarih.getFullYear())
console.log(tarih.getMonth())


console.log("--------degistirilmis hali------------")
tarih.setFullYear(2025)
tarih.setHours(22,15)
console.log(tarih)
console.log("gun:",tarih.getDate())
console.log("yil:", tarih.getFullYear())
console.log("ay:",tarih.getMonth())
console.log("saat:",tarih.getHours())
console.log("dakika:",tarih.getMinutes())

console.log(tarih.getTimezoneOffset())

const date1 = new Date('August 19,1975 23:15:30 GMT +07:00');
const date2 = new Date('August 19,1975 23:15:30 GMT -02:00');

console.log(date1.getTimezoneOffset()===date2.getTimezoneOffset())