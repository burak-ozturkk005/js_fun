function selamVer()
{
    console.log("Selam Burak!");
}
selamVer(); //çalıştırma
function kupunuAl(sayi)
{
    return sayi * sayi * sayi;
}
console.log(kupunuAl(7));

function disFonksyion(sayi)
{
    function icFonksiyon(x)
    {
        return x *2;
    }
    return icFonksiyon(sayi) + 1;

}
console.log(disFonksyion(5));