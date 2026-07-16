//anonim function
const fiyatlar = [10,25,40,15,60];
const fltrefiyat = fiyatlar.filter(fiyat => fiyat > 20);
console.log(fltrefiyat);
//anonim anonym
fiyatlar.filter(function(fiyat){
    return fiyat > 20;
});
//Egzersiz
const arr = [3,8,12,5,20];
let ikiKati = arr.map(member => member * 2);
console.log(ikiKati);