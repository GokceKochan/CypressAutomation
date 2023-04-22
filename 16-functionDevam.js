function selam() {
    return "selam Arkadaşlar"
}

console.log(selam())

let giris = function() {
    return "siteye girişiniz başarili"

}
console.log(giris())

let selamVer = () => {
    return "arrrow function selam verdi"
}
console.log(selamVer())

let selamVerSite = () => "arrrow function ile siteye giris yapildi"

console.log(selamVerSite())

let isimYaz = (isim) => "selam " + isim

console.log(isimYaz("leyla"))


let soyIsimYaz = soyIsim => "selam  soyisim " + soyIsim

console.log(soyIsimYaz("Yildiz"))