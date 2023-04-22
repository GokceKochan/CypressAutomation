// sessinStorage ye isiminiz yazın (ornegin Elif) ve console  2 sanıyede bir selam  Elif
// 10. saniyede dursun iyi gunler elif desin ve tekrar sonlansın

sessionStorage.setItem("ad", "Elif")
    // belli aralıkla surekli bir işlem yapılması isteniyor ise setInterval methodu kullanılırz
let interval = setInterval(() => {
    console.log("Selam ", sessionStorage.getItem("ad"))
}, 2000);


setTimeout(() => {
    console.log("Iyi gunler ", sessionStorage.getItem("ad"))
        //clearInterval ile parametresi verilen interval methodu sonlandırılır
    clearInterval(interval);
}, 10000);