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
