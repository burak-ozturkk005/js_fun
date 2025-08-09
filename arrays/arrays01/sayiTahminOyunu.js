let sayi = Math.floor(Math.random() * 101) + 100;
let tahminHakki = 4;
let tahmin = Number(prompt("Tahminin nedir?"));
while(tahminHakki >= 0)
  {
    if(sayi === tahmin)
      {
        alert("Tebrikler. Tahmin doğru...");
        break;
      }else if(sayi !== tahmin)
        {
          tahmin = Number(prompt("Tahminin nedir?"));
          tahminHakki--;
          alert(`Kalan tahmin hakkı: ${tahminHakki}`);
        }else if(tahminHakki === 0)
          {
            alert("Bütün haklarinizi kaybettiniz.");
            break;
          }
  }
alert("Dogru cevap:" + sayi);

