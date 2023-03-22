

let gun = "paartesi"
if(gun = "pazartesi"){
    console.log("bugun gunlerden pazartesi")
}
else if(gun="sali"){
    console.log("bugun gunlerden sali")
}else if(gun="carsamba"){
    console.log("bugun gunlerden carsamba")
}else if(gun="persembe"){
    console.log("bugun gunlerden persembe")
}else if (gun="cuma"){
    console.log("bugun gunlerden cuma")

}else if (gun="cumartesi"){
    console.log("bugun gunlerden cumartesi")

}else if (gun="pazar"){
    console.log("bugun gunlerden pazar")

}else{
    console.log("hatali gun")

}



//break koymazsan ,butun noktalari acar ta ki break bulana kadar
switch(gun){
    case'pazartesi':
    console.log("bugun gunlerden pazartesi")
   
    case'sali':
    console.log("bugun gunlerden sali")
   
    case'carsamba':
    console.log("bugun gunlerden carsamba")

    case'persembe':
    console.log("bugun gunlerden persembe")

    case'cuma':
    console.log("bugun gunlerden cuma")
  
    case'cumartesi':
    console.log("bugun gunlerden cumartesi")
  
    case'pazar':
    console.log("bugun gunlerden pazar")
    break
    default:
    console.log("hatali gun")
}

console.log("---------------------------")
let sayi = 5
switch (sayi) {
    case 0:
    console.log("sayimiz 0")
        break;
    case 1:
    console.log("sayimiz 1")
      break;     
    case 2:
    console.log("sayimiz 2")
    break;     

    default:
    console.log("hatali deger")
    break;
}

//date objesi kullanarak bugun hangi gun ise ekrana o gun yazsin
//const d = new Date();
//console.log(d)

let today = new Date();

//ayin kaci oldugunu veriyor
console.log(today.getDate())

//bugun gunlerden ne
//0 ise pazartesi,1 ise sali....6 ise pazar oldugunu anliyoruz
console.log("today getDay = ", today.getDay())
console.log("today.getlFullYear()",today.getFullYear())
console.log("today.getHours = ",today.getHours())

//today.setFullYear ile tarihi set edebiliyoruz

console.log("----------------------------------")
//0 ile 6 arasinda sayi vererek hangi gunde oldugumu verecek
gun=today.getDay()
switch(gun){

    case 6:
    console.log("bugun gunlerden pazar")
    break
    case 1:
    console.log("bugun gunlerden pazartesi")
    break
    case 2:
    console.log("bugun gunlerden sali")
    break
    case 3:
    console.log("bugun gunlerden carsamba")
    break
    case 4:
    console.log("bugun gunlerden persembe")
    break
    case 5:
    console.log("bugun gunlerden cuma")
    break
    case 6:
    console.log("bugun gunlerden cumartesi")
    break
  
    default:
    console.log("hatali gun")
}