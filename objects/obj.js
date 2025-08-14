const person = {
    name: "burak",
    age: 28,
    job:"Developer",
    isStudent: false,
};
console.log(person.isStudent); //false
//new Object ile tanımlama

const car = new Object();
car.brand = "Bmw";
car.model = "535i";
car.year = "2019";

console.log(car.brand);
/*
let kisi = {
    ad: "Burak",
    selamVer: function(){
        console.log("MErhaba " + this.ad); //this anahtar kelimesi, metodu çağıran objeyi temsil eder.
    }
};
kisi.selamVer();
*/
//Dongu ile gezebilme
for(let key in car)
{
    console.log(key,car[key]);
}
const bilgisayar = {
    marka:"asus",
    model:2025,
    ram:32
};
bilgisayar.marka = "MSI"; // ya da
bilgisayar["model"] = 2020;
bilgisayar["ekrankarti"] = "rtx4070";
delete bilgisayar.marka;
for(let cmd in bilgisayar)
{
    console.log(cmd,bilgisayar[cmd]);
}
let kisi = {
    ad:"Burak",
    soyad:"Jason",
    selamVer1: function(){
        console.log(`Merhaba, ben ${this.ad},${this.soyad}`);
    }
}