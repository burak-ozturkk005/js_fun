let user = {name:"burak",
user_id: 12345,
yazdir: function () {

    console.log(`${this.name} n id si ${this.user_id}`);
}}
user.yazdir();
const f = user.yazdir; // returns undefined undefined.
f();