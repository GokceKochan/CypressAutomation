// paremetra almayan function
// herhange deger donmuyor
function selamVer() {
    console.log("Selam JavaScript")
}
// paremetra almayan function
//  deger donuyor
function tarihVer() {
    return new Date()
}
// paremetre alan 
// herhangi bir deger donmeyen function
function toplama(sayi1, sayi2) {
    console.log(sayi1 + sayi2)
}
// parametre alan 
// deger donduren funtion
function cikarma(sayi1, sayi2) {
    let sonuc = sayi1 - sayi2
    return sonuc;
}

selamVer()
toplama(7, 9)
let kalan = cikarma(10, 8)
console.log(kalan)
let tarih = tarihVer()
console.log("tarih", tarih)