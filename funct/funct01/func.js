function logger(){
    console.log('My name is Burak.');
}

logger();

function MeyveSoyucu(elma,armut){
console.log(elma, armut);
const meyvesoyucu = `${elma} elma ve ${armut} armut soyuldu.`;
return meyvesoyucu;
}
const meyveYazdir = MeyveSoyucu(5,0);
console.log(meyveYazdir);

const selamver = function(){
    console.log("Merhaba!");
};
selamver();
//test(); fonksiyon tanımlandıktan sonra çağırılmalıdır. Hoisting
const test = function(){
    console.log("Hoisting burada çalışmaz!");
};



