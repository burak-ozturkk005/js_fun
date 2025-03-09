const friends = ['Burak','Steven','Ahmet'];
friends.push('James'); //eleman eklendi
console.log(friends); 
const newLength = friends.push('kemal');// eleman ekler ve uzunlugunu dondurur.
console.log(newLength); 
friends.unshift('John'); //yeni eleman ekler 
console.log(friends);
//Eleman çıkarma
friends.pop('kemal');
console.log(friends);
friends.shift(); //baştaki elemanı çıkarır ve döndürür.
friends.splice(2); // belirtilen indeksten eleman silme.
console.log(friends);
friends.splice(1);
console.log(friends);

