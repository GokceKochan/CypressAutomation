console.log("---toplama---")
//toplama +
let sayi1=15;
let sayi2=5;
console.log("sayilarin toplami = ",sayi1+sayi2)

console.log("---cikarma---")
//cikarma "-"
console.log("sayilarin farki = ",sayi1-sayi2)

console.log("---bolme---")
//bolme "/"
console.log("sayilarin farki = ",sayi1/sayi2)

console.log("---carpma---")
//carpma *
console.log("sayilarin carpimi = ",sayi1*sayi2)

let sayi3=15/6
console.log(sayi3)

let value=parseInt(sayi3)
console.log(value)

console.log("-----kalani bulma-----")
// % operatoru bir sayinin diger sayiya kalanini verir
console.log(25%3)
let durum=true

// < operatoru bir sayinin baska bir sayidan kucuk olup olmadigini kontrol eder
console.log("24<99",24<99)
console.log("15<5",15<5)
console.log("10<10",10<10)

// > operatoru bir sayinin baska bir sayidan buyuk olup olmadigini kontrol eder
console.log("23>8",23>8)
console.log("12>78",12>78)
console.log("5>5",5>5)

console.log("---------------------")

// <= operatoru bir sayinin bir sayiya kucuk veya esit olup olmadigini kontrol eder
console.log("24<=99",24<=99)
console.log("15<=5",15<=5)
console.log("5<=5",5<=5)

// >= operatoru bir sayinin bir sayidan buyuk veya esit olup olmadigini kontrol eder
console.log("25>=8",25>=8)
console.log("12>=78",12>=78)
console.log("10>=10",10>=10)

// == kiyaslama operatoru ,bir degerin digerine esit olup olmadigini gosterir
// == operatoru sadece degeri karsilastirir veri tiplerine bakmaz
console.log("5==5",5==5)
console.log("6==50",6==50)
console.log("asli==asli","asli"=="asli")
console.log("Asli==Asli","Asli"=="Asli")
console.log("Asli==asli","Asli"=="asli")
console.log("Asli==asli","Asli".toLowerCase=="asli".toLowerCase)
console.log("50"==50)


console.log("---------------------")

// === operatoru,bir degerin diger bir degere esit olup olmadigini belirler
// === operatoru sadece degerin esitligine degil veri tipi esitligini de kontrol eder

console.log("50"===50)
console.log(55===55)

// ! degil operatoru,bir degerin tersini alir veya kontrol yapar
console.log("15==15",15==15)
console.log("15!=15",15!=15)
durum=false
console.log(!durum)

console.log("---------------------")

//&& "ve" operatoru
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log("---------------------")

sayi1=5
sayi2=10
sayi3=8

//true && true
console.log((15<=15)&&(25<5))

console.log("---------------------")

// || "veya" operatoru
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

console.log("---------------------")

//false||true
console.log(123<=15)||(25<50)




