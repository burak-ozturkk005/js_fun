const sayilar = [3,6,8,11];

//Çift sayilari filtrele
const ciftler = sayilar.filter(sayi => sayi % 2 === 0);

console.log(ciftler);
//map()
const isimler = ["Ali","Ayşe","Mehmet"];

//Her ismi büyük harfe çevir
const buyukIsımler = isimler.map(isim => isim.toUpperCase());
console.log(buyukIsımler);
//İkisini birlikte kullanma
const kisiler = [["Ali",25],["Ayşe",30],["Mehmet",19],["Zeynep",40]];

const buyukler = kisiler.filter(([isim,yas]) => yas >= 25).map(([isim]) => isim);
console.log(buyukler);
