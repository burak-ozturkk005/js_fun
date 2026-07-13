const input = require('sync-input'); //this line defines the input function
//for that we will use to collect user inputs.
let number = Number(input("Enter a number:"));
console.log(number);

let name = input("Enter a name:");
console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");



console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

// reading all remainders
let remainder1 = Number(input());
let remainder5 = Number(input());
let remainder7 = Number(input());
let your_age = (remainder1 * 70 + remainder5 * 21 + remainder7 * 15) %105;
console.log(`Your age is ${your_age}; that's a good time to start programming!`);
let count = Number(input());
while(count >= 0)
{
    console.log(`${count} !`);
    count--;
}
console.log("Completed, have a nice day!");
