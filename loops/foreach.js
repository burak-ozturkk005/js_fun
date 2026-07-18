arr = ["mike","jason","elena"];
arr.forEach(item => {console.log(item);});
let cities = ["London","Istanbul","Paris","Rome"];
cities.forEach(function show(cities) {
    console.log(cities);
})
const music = ["rock", "pop", "hip-hop", "electronic"];

//with callback function
function myFavoriteMusic(music) {
    music.forEach(function(genre) {
        console.log(`My favorite music is ${genre} choosin from rock,pop,hip-hop,electronic`);
    });
}
myFavoriteMusic(music);