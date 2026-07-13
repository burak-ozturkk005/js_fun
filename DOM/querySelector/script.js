//1 id ile seçmek bu sefer # koyuyoruz.
const menuList = document.querySelector("#menuList");
//class ile seçmek -. koyuyoruz
const firstCard = document.querySelector(".menu-card");

//3.attribute selectoru - belirli bir kategoriyi seçmek

const coffeeCard = document.querySelector('[data-category="coffee"]');

//4 inen selektor(descendat) bir element içindeki başka elementi seçmek
const title = document.querySelector(".menu-card .card-title");
// queryselector ilk eşleşeni ödndürür. sayafada 10 tane .menu-card olsa bile 2. örnek sadece birincisini verir
//hepsi için queryselectorAll
//Zincirleme seçim yapmak için card.querySelector(".card-title")
const title1 = document.querySelector(".card-title");
title1.textContent = "Cappucino";
const input = document.querySelector("#searchInput");
console.log(input.value);
