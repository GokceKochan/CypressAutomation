//template literal

let isim="ahmet";
let soyisim="yildiz";

let tamIsim=isim+ " " +soyisim
console.log(tamIsim)

console.log("--------------------")

let yeniIsim=`isim=${isim},soyIsim=${soyisim}`
console.log(yeniIsim)

console.log("--------------------")

let ikinciIsim="isim = " + isim + ", soyIsim = " + soyisim
console.log(ikinciIsim)

console.log("------charArt--------------")


//string Methodlari

let cumle = "bugun gunlerden sali"
console.log(cumle)
// charArt,string icindeki inde'i verilen karakteri yakalar
console.log(cumle.charAt(0))
console.log("------concat--------------")

let ad = "melek"
let soyad = "kilic"
let genelIsim = ad + " "+ soyad
genelIsim=`${ad} ${soyad}`
console.log(genelIsim)

//concat methodu,2 string birlestimek icin kullanilir.Arada bosluk birakmaz
genelIsim=ad.concat(soyad)
console.log(genelIsim)

console.log("---indexOf-----------------")
//indexOf string icinde aranan kelimenin baslangic indexini verir
cumle ="javaScript Java C# Php HTML CSS"
console.log(cumle.indexOf("C#"))
console.log(cumle.indexOf("hey"))//belirtilen string icinde olmadigi icin -1 degerini verir
console.log(cumle.indexOf("java"))
console.log(cumle.toLowerCase().indexOf("java"))

console.log("------lastindexOf--------------")

//lastIndexOf,string icinde birden fazla ayni kelime varsa sonuncuyu bulur ve onun indexini verir
console.log(cumle.lastIndexOf("java"))
console.log("-----toLowerCase---------------")

//toLowerCase,cumlenin tum karakterlerini kucuk harfe cevirir
let kelime ="Merhaba Bugun JavaScript Dersi Var"
console.log(kelime)
kelime=kelime.toLowerCase()
console.log(kelime)

console.log("-----toUpperCase---------------")
//toUpperCase,cumlenin tum karakterlerini buyuk harfe cevirir
kelime=kelime.toUpperCase()
console.log(kelime)
console.log("-----slice and toString-----------")

//slice,cumle icerisindeki indexlerin araligini yakalar
kelime="Merhaba Bugun JavaScript Dersi Var"
console.log(kelime.slice(2,5))
console.log(kelime.substring(2,5))// toString ve slice ayni isi gorur
console.log("tek parametre slice = ",kelime.slice(5))
console.log("substr",kelime.substr(5,5))//bu method artik kullanilmiyor.eger kullanilsaydi,lik parametre index yerini ,ikinci parametre ise secilen indexten sonra kac karakter gidecegini gosterir
console.log(kelime.slice(-5))//negatif olarak kullanirsak sondan itibaren indexleri aliyor

console.log("---------trim-----------")

//trim cumlenin basindaki ve sonundaki boslugu siler

kelime=" selam Asli "
console.log(kelime,kelime.length)
kelime=kelime.trim();
console.log(kelime,kelime.length)

//trimStart ,cumlenin sadece basindaki boslugu siler
kelime="  selam Asli  "
kelime=kelime.trimStart();
console.log(kelime,kelime.length)


//trimEnd,cumlenin sadece sonundaki boslugu siler
kelime="  selam Asli"
kelime=kelime.trimEnd();
console.log(kelime,kelime.length)
console.log("-------replace-------------")

//replace,
//bir parametreden 2 tane varsa ilk olan ile gunceller

kelime ="selam asli nasilsin asli"
console.log(kelime)
kelime=kelime.replace("asli","merve")
console.log(kelime)

console.log("-------replaceAll-------------")
kelime ="selam asli nasilsin asli dog"
kelime=kelime.replaceAll("asli","Merve")
console.log(kelime)

/*
const regex=/Asli/ig;
console.log(kelime.replaceAll(regex,'ferret'))
*/

console.log("-------endsWith-------------")
//endWith cumlenin son parametresindeki degere bakar true degilse false degerini verir
kelime ="selam asli nasilsin asli"
let isEndWord=kelime.endsWith("asli")
console.log(isEndWord)

console.log("-------startWith-------------")
//startWith cumlenin son parametresindeki degere bakar true degilse false degerini verir
kelime ="selam asli nasilsin asli"
let isStartWord=kelime.startsWith("asli")
console.log(isStartWord)

console.log("-------split-------------")
kelime ="selam asli nasilsin asli"
let yeni=kelime.split(" ")
console.log(yeni)
let ornek=kelime.split("asli")
console.log(ornek)
console.log("-------split2-------------")
let diller ="java,javascript,C#,Pyton,Php"
let yeniDiller=diller.split(",")
console.log(diller)
console.log(yeniDiller)
