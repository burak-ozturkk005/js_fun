let numbers = [1,2,3,4,5];
let num1 = numbers.concat(6,7,8);
console.log(num1);
num1.join(',');
console.log(num1);
let num2 = num1.slice(0,3);
console.log(num2);
let num3 = num2.splice(1,1,99);
