const calcAge = function(birthYear)
{
    return 2038 - birthYear;
}
const yearsUntilRetirement = function (birthYear,firstname){
    const age = 2038 - birthYear;
    const retirement = 65 - age;
   // return `${firstname} retires in ${retirement} years.`;
   if(retirement > 0) {
    return retirement;
   }else{
    return -1;
   }
}
console.log(yearsUntilRetirement(1996, 'Burak'));