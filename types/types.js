let num = 42;
console.log(typeof(num)); //number
let arr = [1,2,3,4];
console.log(typeof(arr)); //object
let x;
console.log(typeof(x)); //undefined
//null vs undefined
//null bilerek koyduğumuz boşluk undefined tanımlanmamış.
//typeof null bize object döndürür bu js in yıllardır düzeltilmeyen meşhur bugıdır.
let a;
let b = null;
console.log(typeof a,typeof b);