//function Decleration
function selamVer()
{
    console.log("Merhaba");
}
//function Expressions(ifade)
const topla = function (a,b)
{
    return a + b;
};
console.log(topla(2,3));
//Function parameters and argumans
function yaz(mesaj)
{
    console.log("Mesajin: " + mesaj);
}
yaz("Geldim!");
//default parameter
function selamla(isim = "Ziyaretci"){
    console.log(`MErhaba ${isim}`);
}
selamla();
selamla("Burak"); 
//Example
function kullaniciTopla()
{
    let sayi1 = Number(prompt("Birinci sayiyi girin:"));
    let sayi2 = Number(prompt("İkinci sayiyi girin:"));

    let toplam = sayi1 + sayi2;
    return toplam;
}
let sonuc = kullaniciTopla();
console.log("Toplam: " + sonuc);

//kullanıcıdan keilme al kaç harf olduğunu döndürsün 
function harfSayisiBul()
{


let kelime = prompt("Lutfen kelimeyi girin:");
let harfSayisi = kelime.length;
for(i = 0; i < kelime.length; i++)
{
    kelime[i];
}
return `${kelime} kelimesi ${harfSayisi} harften oluşuyor.`; 
}

let sonuc1 = harfSayisiBul();
console.log(sonuc1);

