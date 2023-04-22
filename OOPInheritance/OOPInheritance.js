class Personel {
    constructor(isim, soyIsim) {
        this.isim = isim;
        this.soyIsim = soyIsim;
    }

    setIsim(isim) {
        this.isim = isim;
    }
    setSoyIsim(soyIsim) {
        this.soyIsim = soyIsim;
    }
    getIsim() {
        return this.isim;
    }
    getSoyIsim() {
        return this.soyIsim;
    }
    goster() {
        // console.log("isim = ", this.isim)
        // console.log("soyIsim = ", this.soyIsim)
        console.log(`isim = ${this.isim}  soyIsim = ${this.soyIsim}`)
    }
    calis() {
        console.log("personel çalisti")
    }

}

let personel1 = new Personel("elif", "yazici")
console.log(personel1.getIsim())
personel1.goster()
console.log("***************")

class Mudur extends Personel { // superClass , BaseClass
    constructor(isim, soyIsim, sorumluOlduguKisiSayisi) {
        super(isim, soyIsim)
        this.sorumluOlduguKisiSayisi = sorumluOlduguKisiSayisi;
    }

    selamVer() {
        console.log("Mudur selam verdi")
    }
    calis() {
        super.calis()
        console.log("Mudur çalisti")
    }

}

let mudur1 = new Mudur("ali", "yilmaz", 5)
mudur1.selamVer()
console.log("isim = ", mudur1.isim)
console.log("***************")
mudur1.calis()

//personel1.selamVer()
console.log("***************")
let veri = [25, 45, 36, 78]

console.log(veri)
veri[2] = 3666
console.log(veri)