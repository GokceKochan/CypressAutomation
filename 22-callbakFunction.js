function toplama(num1, num2) {
    let toplam = num1 + num2
    return toplam
}
let cikarma = (num1, num2) => num1 - num2
let sonuc = toplama(25, 85)
console.log("toplam = ", sonuc)

let kalan = cikarma(25, 6)
console.log("fark = ", kalan)


function hesaplama(sayi1, sayi2) {
    // 2 sayının carpının karesini dunsun
    let sonuc = sayi1 * sayi2
    sonuc = Math.pow(sonuc, 2)
    console.log("sonuc= ", sonuc)
}

function hesaplamaCallBack(sayi1, sayi2, callback) {
    // 2 sayının carpının karesini dunsun
    let sonuc = sayi1 * sayi2
    sonuc = Math.pow(sonuc, 2)
    callback(sonuc)

}

function goster(deger) {
    console.log(deger)
}
hesaplama(3, 4)

console.log("**********")
hesaplamaCallBack(4, 3, goster)

console.log("**********")

function kontrol(sayi1, callback) {
    let sonuc = callback(sayi1)
    console.log("sonuc", sonuc)
}

function arttir(sayi1) {
    return sayi1 + 3
}

kontrol(3, arttir)

console.log("*********************")

function goster1() {
    setTimeout(() => {
        console.log("goste1 calisti")
    }, 1000);
}

function goster2() {
    setTimeout(() => {
        console.log("goste2 calisti")
    }, 5000);
}

function goster3() {
    setTimeout(() => {
        console.log("goste3 calisti")
    }, 3000);
}
/*
goster1()
goster2()
goster3()
*/
/*
async function yazdir() {
    await goster1();
    await goster2();
    await goster3();

}

yazdir()
*/