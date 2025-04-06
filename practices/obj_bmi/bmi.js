//BMI HESAPLAYICI
mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
     calcmsi : function(mass,height){
        this.bmi = this.mass / (this.height * this.height);
        console.log(`${this.fullName}'s BMİ is ${this.bmi}.`);
        return this.bmi;
    }
}
john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcmsi : function(mass,height){
        this.bmi = this.mass / (this.height * this.height);
        console.log(`${this.fullName}'s BMI ${this.bmi}.`);
        return this.bmi;
    }
}
mark.calcmsi();
john.calcmsi();
if(john.bmi > mark.bmi)
{
    console.log(`${john.fullName}'s BMI ${john.bmi} is greater than ${mark.fullName}'s bmi ${mark.bmi}.`);
}
else
{
    console.log(`$${john.fullName}'s bmi ${mark.bmi} is greater than ${mark.fullName}'s bmi ${john.bmi}.`);
}
