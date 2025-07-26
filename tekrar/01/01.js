let isim = "Burak";//Degisebilen deger
const yas = 30; // sabit deger
var sehir = "İstanbul"; //eski stil

console.log(isim);
console.log(yas);
console.log(sehir);

let not = 70;
if(not >= 50)
{
    console.log("Geçtin");
}else{
    console.log("Kaldın");
}
for (let i = 1; i <= 10; i++)
{
    console.log(i);
}
function topla(a,b)
{
    return a + b;
}
let sonuc = topla(3,5);
console.log(sonuc); // 8

function merhaba(word)
{
    return ` MErhaba ${word}`;
}
let word1 = merhaba("burak");
console.log(word1);
