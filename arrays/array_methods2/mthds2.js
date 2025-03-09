const arr = [1,2,3];
arr.push(4); // [1,2,3,4]
console.log(arr.push());
console.log(arr.unshift(0)); // [0,1,2,3]

arr.shift(); // [1, 2, 3]

arr.splice(1,1,9); // [1, 9, 3] (1.indeksdeki eleman 9 ile değiştirildi.)
const number = [1,2,3,4,5,6];
number.forEach(num => console.log(num * 2)); // [2,4,6,8,10]

const squared = number.map(num => num **2); // [1,4,9,16,25]
console.log(squared);
const even = number.filter(num => num % 2 === 0); // [2,4]
console.log(even);