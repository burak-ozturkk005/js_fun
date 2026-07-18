//Key iteration
let employee = {'name':'Bruce Reese',
'email' : 'bruce--turbo@gmail.com',
'company':'Microsoft'};
const employeeKeys = Object.keys(employee); // ['name','email','company]
console.log(employeeKeys);
employeeKeys.forEach((key) => {console.log(key)})

employeeKeys.forEach((key) => console.log(employee[key]));
//Value iteration
const employeeValues = Object.values(employee);
console.log(employeeValues);
//with Foreach
employeeValues.forEach((value) => console.log(value));
//Entries method
const emploeeEntries = Object.entries(employee);
console.log(emploeeEntries);
console.log(emploeeEntries[0]); // [ 'name', 'Bruce Reese' ]
const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};
function getProductPrices(products) {
    return Object.entries(products).map(([product, price]) => {
        return `${product}: $${price}`;
    }).join('\n');
}
const prices = getProductPrices(products);
console.log(prices);