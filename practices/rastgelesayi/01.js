function rastgeleDeger()
{
    let rastgele = Math.floor(Math.random() * 101);
    if(rastgele < 39)
    {
        return "Zayif";
    }else if (rastgele <70)
    {
        return "Orta";
    }else if(rastgele < 90)
    {
        return "İyi";
    }else if( rastgele <= 100)
    {
        return "harika";
    }
}
let sonuclar = [];
for(let i = 0; i< 5;i++)
{
    let sonuc = rastgeleDeger();
    sonuclar.push(sonuc);
}
console.log("Tüm sonuçlar: ");
for(let i = 0; i < sonuclar.length; i++)
{
    console.log(sonuclar[i]);
}
