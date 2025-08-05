const person = {
    name:"Burak",
    greet: function(){
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet();
//Map fonksiyonu belirtilen işleme göre yeni bir dizi oluşturur.
let sayilar = [1,2,3,4,5];

let kareler = sayilar.map(function(sayi){
    return sayi * sayi;
});
console.log(kareler);
//Modern (arrow function)
let kareler2 = sayilar.map(sayi => sayi * sayi);
//ORnek
let isimler = ["burak","ahmet","ayşe"];
let buyukIsim = isimler.map(isim => isim.toUpperCase());
console.log(buyukIsim);
//ornek 2
let hitaplar = isimler.map(isim => {
    if(isim.endsWith("e")){
        return isim + " hanım";
    }else{
        return isim + " bey";
    }
});
console.log(hitaplar);