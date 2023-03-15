

//veri tipleri
//String integere boolean double float

let value="Mert";
//integer number
value=12;
//double number
value=23.4;

//boolean 
value=true;

//String
value="true";

//null
value=null;

//indefined
let a;
console.log(typeof a,"=>",a);
let sayi=25;
console.log(typeof sayi);
console.log(typeof value,"=>",value);

//referansa dayali
let listem=[1,2,78,98,23];
console.log(typeof listem, "=>", listem);

let Personel={
isim:"Melek",
meslek:"IT"

}
console.log(typeof Personel, "=>", Personel);

let maasHesap=function(){
    console.log("selam javascript") 

    }

    console.log(typeof maaseHesap,"=>",maasHesap);

    console.log("------------------------")

    let sayi1=15;
    let sayi2=sayi1;
    sayi1=36;
    console.log("sayi1",sayi1);
    console.log("sayi2",sayi2);

    
    console.log("------------------------")

    let sayilarim1=[1,2,3,4,5];
    let sayilarim2=sayilarim1;
    sayilarim1[3]=96;
    sayilarim1[2]=72;

    sayilarim1=[21,32]
    console.log("sayilarim1",sayilarim1)
    console.log("sayilarim2",sayilarim2)
    
    console.log("------------------------")

    //BigInt
    const sayi3=BigInt(900719925474009915558888);
    console.log(sayi3);

    console.log("------------------------")
