const sayilar = [1, 2, 3, 4, 5];
let sonuc = (sayilar) => sayilar.filter((sayi) => sayi % 2 === 0).map((sayi) => sayi * sayi).map(() => sayi + sayi);
console.log(sonuc);
