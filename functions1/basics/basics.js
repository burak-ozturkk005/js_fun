//function Decleration
function sayHi()
{
    console.log("Hi");
}
//function Expressions(ifade)
const sum = function (a,b)
{
    return a + b;
};
console.log(sum(2,3));
//Function parameters and argumans
function write(message)
{
    console.log("Mesajin: " + message);
}
write("Geldim!");
//default parameter
function sayHelo(name = "Ziyaretci"){
    console.log(`Hello ${name}`);
}
sayHelo();
sayHelo("Burak");

