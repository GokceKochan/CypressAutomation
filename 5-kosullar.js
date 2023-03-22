// if eger anlamına geliyor kosul işlemidir
// parentez içi true ise suslu parentez içi çalısır
if (15 > 5) {
    console.log("15 5 den buyuktur")
}
if (5 > 15) {
    console.log(" 5 15 den buyuktur")
}

console.log("****************")

let sayi1 = 15
let sayi2 = 25

if (sayi1 > sayi2) {
    console.log("sayi1 sayi2 den buyuktur")
}
if (sayi1 < sayi2) {
    console.log("sayi1 sayi2 den kucukur")
}
if (sayi1 == sayi2) {
    console.log("sayi1 sayi2 ye eşittir")
}
console.log("****************")

if (sayi1 > sayi2) {
    console.log("sayi1 sayi2 den buyuktur")
} else if (sayi1 < sayi2) {
    console.log("sayi1 sayi2 den kucukur")
} else {
    console.log("sayi1 sayi2 ye eşittir")
}
console.log("****************")

// bir degiskene bir sayi atayın 
// ve bu sayi tek ise sayi tektir yazsın
//sayi cift ise sayi ciftir yazsın

let sayi4 = 79;
let kalan = sayi4 % 2;
/*
if (kalan == 0) {
    console.log("sayi ciftir")
}
if (kalan == 1) {
    console.log("sayi tektir")
}
*/

if (kalan == 0) {
    console.log("sayi ciftir")
} else {
    console.log("sayi tektir")
}
console.log("****************")

let sayi5 = prompt("Lütfen bir sayi giriniz.");
sayi5 = Number(sayi5)
kalan = sayi5 % 2;
if (kalan == 0) {
    console.log("sayi ciftir")
} else {
    console.log("sayi tektir")
}