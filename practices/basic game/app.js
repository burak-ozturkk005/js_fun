
const dogruSayi = Math.floor(Math.random() * 10) + 1;
function kontrolEt()
{
    const tahmin= parseInt(document.getElementById("tahmin").value);
    const sonuc = document.getElementById("sonuc");
    if(!tahmin)
    {
        sonuc.textContent = "Tebrikler! Doğru Tahmin.";
    }
    
    if(tahmin === dogruSayi)
    {
        sonuc.textContent = "Tebrikler Dogru tahmin.";
    } else{
        sonuc.textContent = "yanlış tahmin. Dogru Sayi: " + dogruSayi;
    }
}