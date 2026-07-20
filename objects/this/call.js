let driver = {
    name: "burak",
    vehicle: "bike",
    model : 2024,
    write: function(){
        console.log(`${this.name} 's vehicle is ${this.vehicle}`);
    }
}
const f = driver.write;
f.call(driver);
let driver2 = {
    name:"ayse",
    vehicle: "car",
    model : 1998
}
const f2 = driver2.write;
f.call(driver2);