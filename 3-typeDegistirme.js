//yontem1
let value=15;
value="15";
value=String(3.14);
value=String(89);
value=String(true);

value=String([1,2,3]);

value=String(function() {console.log("first")});

//yontem2
value=(27).toString();
value=([27,28,29]).toString();

//yontem3
value=34+"";



/*

let deger ="selam " + 46;
console.log(deger)
*/
//yontem1
value =Number("123");
value=Number("selam");//there is no any number so the result should be "NAN"
value=Number(null);//numeritical value is "0"
value=Number([1,2,3]);
value=Number(function() {console.log("first")})



//yontem2


value=parseInt(123);
console.log("veri tipi = ",typeof value,"deger=",value)

//for float
value=parseFloat(123.5);