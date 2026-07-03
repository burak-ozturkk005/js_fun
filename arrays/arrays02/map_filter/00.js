const numbers = [3,6,7,11];
//filter the even numbers
const evens = numbers.filter(number => number % 2 === 0);
console.log(evens);
// map()

const names = ["James","Burak","Alison"];

//change the letters to uppercase
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
let arr1 = [1,2,3,4,5];
let arr2 = [3,4,6];

//Map soru1: RPm değerini 1000 e bölünmüş halde yeni bir diziye çevir.
const rpmler = [3000,5500,8000,9000];
const bol_rpm = rpmler.map(rpm => rpm / 1000);
console.log(bol_rpm);
const hizlar = [45,120,86,152,60,170];
//Bu dizideki 100 km/h üzreindeki hızları filtrele.
const fltrelenmis = hizlar.filter(hiz => hiz >100);
console.log(fltrelenmis);
//map + filter 
const motorlar = [{model:"CBR600RR",cc:599},{model:"Mt-09",cc:890},{model:"YZF-R6",cc:599},{model:"Panigale V4",cc:1103}];
let lowcc = motorlar.filter(motor => motor.cc < 600);
console.log(lowcc);
const maplanmıs = lowcc.map(alt => alt.model );
console.log(maplanmıs);
