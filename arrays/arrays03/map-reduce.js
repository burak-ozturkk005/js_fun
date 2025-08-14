//map()
//Dizinin her elemanını tek tek dolaşır ve verilen fonk. dönüş değeriyle yeni bir dizi oluşturur.
//Orjinal diziyi değiştirmez.
//Eleman sayısı değişmez.
//1.
//const sayilar = [1,2,3,4];
//const kareler = sayilar.map(sayi => sayi * sayi);
//console.log(kareler);
//
const sayila = [-2,0,3,-5];
const yeni = sayila.map(sayi => Math.abs(sayi));
console.log(yeni);
//10 dan büyükler
const numbers = [1,2,3];
const anumber = numbers.map(sayi => sayi * sayi);

