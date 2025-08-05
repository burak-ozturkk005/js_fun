//AKILLI METOTLAR
let sayilar = [1,2,3,4,5,6,7];
sayilar.forEach(function(sayi)
{
    console.log(sayi);
});
//map() Her elemanı değiştirir yeni bir dizi oluşturur.
let kareler = sayilar.map(function(sayi){
    return sayi * sayi;
});

console.log(kareler);
//filter() şartı sağlayan elemanları alır,diğerlerini atar. Yeni bir dizi döner
let tekler = sayilar.filter(function(sayi){
    return sayi % 2 !== 0;
});
console.log(tekler);
//GOREV dizideki tüm harfleri büyük harfe çevir.
let isimler = ["Burak","Ahmet","İrem"];
let buyuk = isimler.map(function(isim){
    return isim.toUpperCase();
});
console.log(buyuk);
//2.örnek
let numbers = [3,10,5,8,21];
let lessTen = numbers.filter(function(less){
    return less < 10;
});
console.log(lessTen);
//3.örnek
let kelimeler = ["kedi","kopek","kuş","fare"];
let kbaslayan = kelimeler.find(function(kelime){
    return kelime.startsWith("k");
});
console.log(kbaslayan);
//4.örnek 
let sehirler = ["istanbul","ankara","izmir"];
for(let eleman of sehirler)
{
    console.log(`${eleman} güzel şehirdir.`);
}