function selamVer(isim)
{
    console.log(`${isim} merhaba!`);
}
selamVer("Burak");
//Gorev 2
function topla(a,b)
{
     return a +b;
}
let sonuc = topla(4,5);
console.log(sonuc);
//Gorev 3
function karsila(isim = "Ziyaretçi")
{
    console.log(`hoş geldin, ${isim}`);
}
//Callaback function
function islemYap(a,b,callback)
{
    let sonuc = a + b;
    callback(sonuc);
}
islemYap(3,4,function(sonuc){
    console.log("Toplam: " + sonuc);
});
//Arrow function
const kareAl = (sayi) => {
    return sayi * sayi;
};
console.log(kareAl(6));
//Bonus
const kareAl2 = sayi => sayi * sayi;
//Gorev tekmiCiftmi
function tekmiCiftmi(sayi)
{
    if(sayi % 2 === 0)
    {
        console.log(`${sayi} çift sayi`);
    }else
    {
        console.log(`${sayi} tek sayi`);
    }
}
tekmiCiftmi(6);
//PAlindrom
let palindrom = false;
function palindromMu(kelime){
   if(kelime === kelime.split("").reverse().join("")){
    console.log(`${kelime} bir palindromdur.`);
    return true;
   }else{
    console.log(`${kelime} bir palindrom değildir.`);
    return false;
   }
}
palindromMu("burak");