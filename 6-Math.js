//math

let value=Math.sqrt(25);
value=Math.sqrt(36)

//pow uslu sayilarda kullanilir
//ilk parametre taban,ikinci parameter ustur

value=Math.pow(3,4)//3^4=81
value = Math.pow(8,3)

//abs bir sayinin mutlak degerini verir
value = Math.abs(5)
value = Math.abs(-500)

//ceil,kendisinden sonraki ilk sayiya yuvarlar
value = Math.ceil(25.2)

//floor methodu ondalikli degeri asagi yuvarlar
value = Math.floor(35.4)
value = Math.floor(25.6)

//round methodu sayi tabana yakinsa tabana yuvarlar,tavana yakinsa tavana yuvarlar
value = Math.round(34.49)
value = Math.round(34.51)

//min methodu parametre olarak verilen sayilardan en kucugunu verir
value = Math.min(8,89,78,15)

//max methodu parametre olarak verilen sayilardan en buyugunu verir
value = Math.max(8,89,78,56)


//random(0 ile 1 arasinda sayi uretir)

value = Math.random()

//0 ile 10 arasinda uretmek istiyorsak *10 yapiyoruz
value = Math.random()*10
value = parseInt(value)






console.log("value = ",value)