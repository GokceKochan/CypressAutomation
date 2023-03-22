
//bir ogrecinin vize ve final notu olsun
//vizenin yuzde 40 finalin yuzde 60 baz alinarak
//ortalama notu 50 altinda ise kaldiniz diyecek

//vize ve final notu random olusturulacak
//0.000-0.9999999
let vize =Math.random()*100
vize = Math.round(vize)


let finalNotu = Math.random()*100
finalNotu =Math.round(finalNotu)

let ortalama=vize*0.4 + finalNotu*0.6


if(ortalama>=50){
    console.log("Tebrikler sinifi gectiniz, Notunuz = " , ortalama)
}else{
    console.log("Uzgunuz dersten kaldiniz,butte gorusmek uzere.Notunuz = ",ortalama)
}
console.log("vize " , vize)
console.log("final notu " ,finalNotu)
console.log("ortalama " ,ortalama)
console.log("----------------------------------")

//90 ile 100 arasinda AA --> 90 dahil
//80 ile 90 arasinda BA --> 80 dahil
//70 ile 80 arasinda BB -->70 dahil
//60 ile 70 arasinda CB -->60 dahil
//50 ile 60 arasinda CC -->50 dahil
//50 alti FF

if(ortalama>=90 && ortalama<=100){
    console.log("AA ile gectiniz")
}else if(ortalama>=80 && ortalama<=90){
    console.log("BA ile gectiniz")
}else if(ortalama>=70 && ortalama<=80){
    console.log("BB ile gectiniz")
}else if(ortalama>=60 && ortalama<=70){
    console.log("CB ile gectiniz")
}else if(ortalama>=50 && ortalama<=60){
    console.log("CC ile gectiniz")
}else{
    console.log("FF ile kaldiniz")
}
console.log("----------------------------------")

/*
let ogrenciVize=prompt()
ogrenciVize=parseInt(ogrenciVize)
console.log(typeof ogrenciVize)


let ogrenciFinal=prompt()
ogrenciFinal=parseInt(ogrenciVize)
console.log(typeof ogrenciFinal)
*/



