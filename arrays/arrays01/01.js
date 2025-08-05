let meyveler = ["Elma","Kavun","Muz"];
meyveler[0] // > "Elma"
meyveler.length // > 3
//Dizi oluşturma Yöntemleri
let sayilar = [1,2,3,4,5];
let bosdizi = [];
let yeniDizi = new Array("a","b","c");
//Elemanlara Erişim
console.log(sayilar[1]);
sayilar.push(5); //sona ekler.
sayilar.unshift(0); //başa ekler
sayilar.pop();//sondan siler
sayilar.shift();// baştan siler
sayilar.slice(1,3); // 1. ve 2. indexteki elemanları alır ( orjinali bozmaz)
sayilar.splice(2,1);//2.indexteki 1 elemanı siler
let birlesik = sayilar.concat(bosdizi); //dizileri birlestirir.
for(let eleman of sayilar)
{
    console.log(eleman);
}
//YA DA
for (let i = 0; i< sayilar.length; i++)
{
    console.log(sayilar[i]);
}