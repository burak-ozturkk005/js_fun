//Callback functions.
// A Callback dictates when the code will run (architectural role)
//CAllback with Traditional Syntax(Tool: function, Role:Callback)
function calculateCart(cost,finishedCallback){
    let totalWithTax = cost * 1.20;
    //Calculation is over, now we trigger the function(callback) passed to us as a parameter:
    finishedCallback(totalWithTax);
}
//When calling the function, we pass the callback using the traditional syntax:
calculateCart(100,function (result){
    console.log("Calculation finished. The Cost is: " + result);
});
//Array iteration, the map method (synchronous Callback)
const userAges = [20,25,30,35];
//The arrow function (age => age *2) acts as a callback for the map method.
const doubledAges = userAges.map((age) => {
    return age *2;
});
console.log("Original ages:,",userAges);
console.log("Doubled ages: ",doubledAges);
