//CAllback functions
function selamVer()
{
    console.log("Selam Burak");
}
function calistir(cb)
{
    cb(); //burada callback çalışıyor
}
calistir(selamVer);
function hesapla(a,b, callback){
    let sonuc = a + b;
    callback(sonuc);
}
function sonucuYazdir(data){
    console.log("Sonuc:",data);
}
hesapla(4,5,sonucuYazdir); // 9


function islemYap(sayi1,sayi2,callback)
{
    let carp = sayi1 * sayi2;
    callback(carp);
}
islemYap(4,5,sonucuYazdir);
