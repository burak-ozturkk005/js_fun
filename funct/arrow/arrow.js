'strict mode';

const selamVer = () => {
    console.log("merhaba");
};

selamVer();

const topla = (a ,b) => a + b;
console.log(topla(5,8));
const cikar = (a,b) => a - b;
console.log(cikar(8,5));
//IIFE(Immediately Invoked Function Expression)
(function () {
    console.log("Bu fonksiyon hemen çalıştı.");
})
();
//Higher-Order Functions ( Yüksek MErtebeli Fonksiyonlar)
function carpmaKatSayisi(kat)
{
    return function (sayi) {
        return sayi * kat;
    };
};
const ikiyleCarp = carpmaKatSayisi(2);
console.log(ikiyleCarp(8));

