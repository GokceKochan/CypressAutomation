class Ogrenci {
    constructor(isim, soyIsim) {
        this.isim = isim;
        this.soyIsim = soyIsim
    }
    selamVer() {
        console.log("selam ", this.isim)
    }

}

let ogrenci1 = new Ogrenci("merve", "korkmaz")
ogrenci1.selamVer()
let ogrenci2 = new Ogrenci("Yeliz", "korkmaz")
ogrenci2.selamVer()

class Masa {

    constructor(renk, cinsi, ayakSayisi, boyutu) {
        this.renk = renk;
        this.cinsi = cinsi
        this.ayakSayisi = ayakSayisi
        this.boyutu = boyutu
    }
    setRenk(renk) {
        this.renk = renk;
    }
    setCinsi(cinsi) {
        this.cinsi = cinsi
    }
    setAyakSayisi(ayakSayisi) {
        this.ayakSayisi = ayakSayisi
    }
    setBoyut(boyutu) {
        this.boyutu = boyutu
    }

    goster() {
        console.log("masanin rengi = ", this.renk)
        console.log("masanin cinsi = ", this.cinsi)
        console.log("masanin ayakSayisi = ", this.ayakSayisi)
        console.log("masanin boyutu = ", this.boyutu)
    }
}
console.log("************")

let masa1 = new Masa("kahverengi", "cam", "4", "2m*3m")
masa1.goster()
console.log("************")
let masa2 = new Masa("siyah", "metal", "tek", "1m*2m")
masa2.goster()
console.log("************")
let masa3 = new Masa("kirmizi")
masa3.setAyakSayisi(6)
masa3.goster()
console.log("************")
masa2.setRenk("kahverengi")
masa2.goster()