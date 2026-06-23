//write a function greet a given array elements.
let names = ["Burak","Ahmet","Zeynep","Ayşe"];
function greet(param) {
    for(let i = 0; i<param.length;i++)
    {
       console.log(`Hello ${param[i]}`);
    }
}
greet(names);
//Number filter 
let nums = [12,5,28,3,17,40,8,22];
let evens = [];
function getEvens(arr)
{
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i] % 2 === 0)
        {
            console.log(`${arr[i]} is even`);
            evens.push(arr[i]);
        }
    }
    return evens;
}
console.log(getEvens(nums));

function getBiggerThan(arr,limit)
{
    let result = [];
    for(let i = 0; i< arr.length;i++)
    {
        if(arr[i] > limit)
        {
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(getBiggerThan([12,5,28,3,17,40,8,22],10));
