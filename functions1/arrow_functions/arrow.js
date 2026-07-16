function square(num)
{
    return num * num;
}
//arrow function vv
let suqare2 = num1 => num1 * num1;

//Examples
let kucukHarf = string => string.toLowerCase();
console.log(kucukHarf("JAVASCRIPT"));
let ciftMi = number => number % 2 === 0;
console.log(ciftMi(4));
const fiyatlar = [10,25,40,15,60];
const fltrefiyat = fiyatlar.filter(fiyat => fiyat > 20);
console.log(fltrefiyat);