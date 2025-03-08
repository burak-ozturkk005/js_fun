console.log(5 == "5"); // true (string "5" otomatik olarak sayı 5 e çevirilir.)
console.log(0 == false);//true (false otomatik olarak 0 a çevirilir.)
console.log(null == undefined); //true (özel bir durum)
console.log([] == false); // true (boş dizi false olarak değerlendirilir.)
//== operatoru değerleri karşılaştırmadan önce tiplerini otomatik olarak dönüştürdüğü için beklenmedik
//sonuçlar doğurabilir.
//=== üç eşittir bu operator hiçbir tip dönüşümü yapmaz.
console.log( 5=== "5");//false
console.log(0 === false);//false
console.log(null === undefined);//false.