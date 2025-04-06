const burak = {
    firstName: 'Burak',
    lastName: 'Ozturk',
    birthYear: '1996',
    job: 'Programmer',
    hasDriverLicense: true,

   // calcAge: function(birthYear){
   //     return 2038- birthYear;
    //}
    calcAge: function(){
        console.log(this);
        return 2038- this.birthYear;
    }
}
console.log(burak.calcAge());