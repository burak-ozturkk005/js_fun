'use strict';
const friends = ['Micheal','Burak','Peter'];
console.log(friends);
//Array fonk. kullanarak dizi tanımlama.
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[2]); // dizinin 3. elemanı.
console.log(friends.length); // dizinin uzunlugu
console.log(friends[friends.length -1]); // tersten çağırma
friends[2] = 'Jay'; // 3. elemanı değiştirdik.
console.log(friends); 