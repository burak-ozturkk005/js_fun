const input = require('sync-input');
console.log("Welcome to mini ATM Project");
console.log("Burak is a customer of a Atm bank. He is want to do some operation.");
let password = "12burak";
console.log("Welcome please enter a password...");
console.log("Burak's password is: 12burak");
let attempt = 3;
let bank_value = 10000;
while(attempt > 0) {
    passwordAt = input();
    console.log("Please select what do you want to do");
    console.log("1-withdraw money");
    console.log("2-deposit money");
    let choice = Number(input());
    if (passwordAt === password) {
        if (choice === 1) {
            console.log("Please enter to value of withdraw to money:");
            let value = Number(input());
            bank_value -= value;
            console.log(`${value} is withdraw. Total amount is: ${bank_value}`);
            break;
        } else if (choice === 2) {
            console.log("Please enter to value of deposit money:");
            let value1 = Number(input());
            bank_value += value1;
            console.log(`${value1} is deposited. Total amount is: ${bank_value}`);
            break;
        } else {
            console.log("You entered invalid number. Please try again.");
        }
    } else {
        console.log("You entered invalid pasword. Please try again.");
        attempt--;
    }
}