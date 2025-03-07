const firstName = "Burak";
const job = "Programmer";
const birthYear = 1923;
const burak ="I'm" + firstName + ', a' + job + " " + birthYear;
console.log(burak);
const burakNew = `I a ${firstName}, a`; // ters kesme işareti 
console.log(burakNew); 
console.log(burakNew.length); // returns length
console.log(burakNew.charAt(0)); //returns at 0. index
console.log(burakNew.at(-1)); // r eturns last index
console.log(burakNew.includes("Dünya"));// if includes indicated word
