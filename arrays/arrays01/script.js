let arr = ["Cbr600","Cbr650","R6","Zx6R"];
console.log(arr[0]); //first element
console.log(arr[arr.length -1]); //last element
arr.push("gsxr600"); //adds as last element
console.log(arr); 
arr.pop(); //removes last element
console.log(arr); 
arr.unshift("Burak"); //adds first element as a parameter.
console.log(arr);
arr.shift(); // removes first elemnent
console.log(arr); 
for(let i = 0; i< arr.length;i++)
{
console.log(arr[i]);
}
let sayilar =  [1,2,3,4,5];
let sayilar1 = [7,8];
let birlesikDizi = sayilar.concat(sayilar1); //concenates arrays.
for(let eleman of birlesikDizi)
{
    console.log(eleman);
}
birlesikDizi.slice(1,3); // takes first and second elements.
