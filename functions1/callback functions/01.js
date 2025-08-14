//Callback Fonksiyonlar
function selamVer(isim)
{
    console.log(`Merhaba ${isim}`);
}
function ismiIsle(callback)
{
    let isim = "Burak";
    callback(isim);
}

ismiIsle(selamVer);