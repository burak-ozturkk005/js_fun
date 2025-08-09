//En uzun kelimeyi bul.
const kelimeler = ("String'lerden oluşan bir array'de en uzun kelimeyi while kullanarak bul ve konsola bas.").split(" ");
let enUzunKelime = "";
let i = 0;
while(i < kelimeler.length)
  {
    if(kelimeler[i].length > enUzunKelime.length)
      {
        enUzunKelime = kelimeler[i];
      }
    i++;
  }
console.log(enUzunKelime);

// console log çıktısı