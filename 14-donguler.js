let sayilarim = [52, 78, 36, 96, 45]

for (let index = 0; index < sayilarim.length; index++) {
    console.log(sayilarim[index])
}
console.log("**********foreach***********")
sayilarim.forEach(function(element) {
    console.log(element)
});
console.log("******for in ***************")

// for in dongusu arrayin elemanları arasında gezinir
// key arrayin index dir
for (const key in sayilarim) {
    console.log(key, " . deger  = ", sayilarim[key])
}

let ogrenci = {
        adi: "melek",
        soyadi: "yildiz"
    }
    //console.log(ogrenci.adi)

// for in dongusu objelerde kullanılır
// key ad soyad dır
for (const key in ogrenci) {
    console.log(ogrenci[key])
}

console.log("********for of*************")
    // array de gezinir ve bize elamanı verir
    // for of dan farkı objelerde kullanılmaz
for (const eleman of sayilarim) {
    console.log(eleman)
}

console.log("*********************")

// 5 elamanlı bir arrayim olsun ve arraydeke degerler ekrana yazılsin
// eger eleman 90 dan buyuk ise ekran yazmasın
// dongu 36 degerini goror ise donguyu sonladırsın sonraki elemanlari ekrana yazmasın
sayilarim = [52, 78, 96, 36, 45, 95]

sayilarim.forEach(function(eleman) {
    if (eleman < 90) {
        console.log(eleman)
    }
})

// continue ve break foreach de kullanılmıyor
console.log("*********************")
for (const eleman of sayilarim) {
    if (eleman > 90) {
        continue
    }
    if (eleman === 36) {
        break
    }
    console.log(eleman)
}

console.log("*********while************")

let numara = 0

while (numara < 5) {
    console.log("numara = ", numara)
    numara++
}

console.log("dongu bitti")

console.log("*********do while************")
let sayac = 0
do {
    console.log(sayac)
    sayac++
} while (sayac < 5);

console.log("**************")

for (let index = 0; index < 5; index++) {
    console.log("ilk for index = ", index)
    for (let index2 = 0; index2 < 4; index2++) {
        console.log("    ikinci for index = ", index2)
    }
}