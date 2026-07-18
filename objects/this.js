let owner = {
    name: "burak",
    description: "ownerofpc",
    age:97
};
owner.giveDiscount = function(){
    console.log(`${owner.name} You have a 10% diescount!`)
};
owner.giveDiscount();
//shorter way
let person = {
    greetings : function(){
        console.log("Hello");
    }
};
//also can skipped function keyword
let person2 = {
    greetings() {
        console.log("Hello");
    }
};
//this keyword
let user = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(user.fullName());
