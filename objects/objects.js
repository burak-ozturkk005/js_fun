//OBJECTS
/*nesneAdi.ozellikAdi arac.model arac.yil vb.
Ya da
nesneAdi["ozellikAdi"] car["marka"]
Nesne isLevlerine Erisim
nesneAdi.islevAdi(); car.start();
 */
const arac = {marka:"Yamaha",
model:"R6",
yil:2017};
console.log(arac); //hepsi
console.log(arac.model); //R6
const alan =  "model";
console.log(arac[alan]); //R6
arac.alan //undefined
delete arac[alan];
//object const olsa bile içini değiştirebiliriz.
//const objenin kendsinin başka bir şeye atanmasını engeller,
//içindeki değerleri değil.
const surucu = {
    isim: "Burak",
    motorlar: ["R6", "CBR600RR"],      // değer bir dizi
    adres: { sehir: "İstanbul" },       // değer bir obje
    selamla: function() {               // değer bir fonksiyon (metod denir)
        return "merhaba";
    }
};

surucu.motorlar[0]     // "R6"
surucu.adres.sehir     // "İstanbul"
surucu.selamla()       // "merhaba"
console.log(Object.keys(surucu));
const kitap = {baslik: "C# Programming",
yazar:"Ian Griffiths",
sayfa:567};
console.log(kitap.sayfa);
kitap.yayinYili = 2024;
kitap.baslik = "Midnight";
function selamla(isim,yas)
{
    console.log(`${isim} ${yas} yasinda.`);
}
