const coffee = {
    name:"Latte",
    cost:45,
    introduce: function(){
        return this.name + " - " + this.cost + "Euro";
    }
};
let array = [1, 2, 3, 4, 5];
coffee.introduce();
for(const item of array)
{
console.log(item);
}