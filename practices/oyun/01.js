function myCharacter(cevaplar) {
  let toplamPuan = 0;

  // Her sorunun puanları
  const puanTablosu = [
    { a: 10, b: 5,  c: 0 },   
    { a: 20, b: 15, c: 5 },   
    { a: 0,  b: 10, c: 20 },  
    { a: 5,  b: 0,  c: 15 },  
    { a: 10, b: 5,  c: 20 }   
  ];

  // Cevaplara göre puan ekleme
  for (let i = 0; i < cevaplar.length; i++) {
    const cevap = cevaplar[i]?.toLowerCase();

    switch (cevap) {
      case 'a':
        toplamPuan += puanTablosu[i].a;
        break;
      case 'b':
        toplamPuan += puanTablosu[i].b;
        break;
      case 'c':
        toplamPuan += puanTablosu[i].c;
        break;
      default:
        toplamPuan += 0; 
        break;
    }
  }

  // Puan aralıklarına göre sonuç
  let sonuc;
  if (toplamPuan <= 50) {
    sonuc = 'Sevimli';
  } else if (toplamPuan < 80) {
    sonuc = 'Düşünceli';
  } else if (toplamPuan <= 100) {
    sonuc = 'Cesur';
  }

  return sonuc;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = myCharacter;
console.log(myCharacter(['a', 'c', 'b', 'a', 'c']));