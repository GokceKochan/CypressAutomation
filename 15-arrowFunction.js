let sayilarim = [78, 36, 45, 23, 85, 72, 38, 25, 96]

// sayilarim arrayinde 3 tam bolunenleri ekrana yazan function yazınız
// sayilarim arrayinde 5 tam bolunenleri ekrana yazan function yazınız

function ucBulunenler(sayiListesi) {
    for (const eleman of sayiListesi) {
        if ((eleman % 3) == 0) {
            console.log(eleman)
        }
    }
}

let ucBulunenlerArrow = (sayiListesi) => {
    for (const eleman of sayiListesi) {
        if ((eleman % 3) == 0) {
            console.log(eleman)
        }
    }
}

function besBulunenler(sayiListesi) {
    for (const index in sayiListesi) {
        let eleman = sayiListesi[index]
        if ((eleman % 5) == 0) {
            console.log(eleman)
        }
    }
}

console.log("uce tam bolunenler")
ucBulunenler(sayilarim)

console.log("bes tam bolunenler")
besBulunenler(sayilarim)



console.log("uce tam bolunenler arrow function ile")
ucBulunenlerArrow(sayilarim)

let ekranaYaz = () => {
    console.log("selam JAvaScript")

}
ekranaYaz()
console.log("******************")

function enesBakkal(para) {
    console.log("enes 20 liraya cikalaralea aldi")
    paraUstu = para - 20;
    console.log(paraUstu)
    return paraUstu
}

let kalanPara = enesBakkal(50)
console.log("kalan para = ", kalanPara)

sayilarim.forEach(element => {
    console.log(element)
});
console.log("***********************")
sayilarim.forEach(function(eleman) {
    console.log(eleman)
});

// spread operatoru

let numaralar = [1, 2, 3, 4]
let notlar = [5, 6, 7, 8]

let newArr = numaralar.concat(notlar)

let yanideger = [...numaralar, ...notlar]
console.log(newArr)
console.log(yanideger)

let arrayBirles = []
numaralar.forEach((eleman) => {
    arrayBirles.push(eleman)
})
notlar.forEach((eleman) => {
    arrayBirles.push(eleman)
})

console.log("arrayBirles")
console.log(arrayBirles)

console.log("*************")