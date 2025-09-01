function sum(n) {
    if(n === 0) return 0;
    return n + sum(n-1);
}
console.log(sum(5));

//reverse

function reverses(s) {
 let ters = "";
 for(let i = s.length -1 ; i >= 0; i--)
 {
    ters += s[i];
 }
 return ters;
}
console.log(reverses("sarisin"));

//capitalize
function capitalize(s) {
    let word = s.split(" ");
    for(let i = 0; i < word.length;i++)
    {
     word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}
return word.join(" ");
}
console.log(capitalize("burak öztürk programci"));