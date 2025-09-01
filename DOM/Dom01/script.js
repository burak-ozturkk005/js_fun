//Dom bir HTML belgesini ağaç yapısına çeviren programlama arayüzüdür.
//Her şey bir düğüm (node): Document,Element,Text,Comment vb.
const e1 = document.querySelector('.card'); //CSS seçiçi
const byId = document.getElementById('app');

//Birden fazla eleman
const items = document.querySelectorAll('ul li');

//Normal
const byClass = document.getElementsByClassName('btn');
const byTag = document.getElementsByTagName('section');
//İçerik Okuma & yazma
e1.textContent = 'Merhaba'; //sade metin (HTml yorumlanmaz)
e1.innerHTML = '<b>MErhaba</b>'; //HTml i işler
const title = e1.innertext; //Ekranda görünen metne odaklı (layout etkisi var)

const img = document.querySelector('img');
img.setAttribute('alt', 'Kapak görseli');
img.getAttribute('src');
img.removeAttribute('loading');

//Özellikler
const input = document.querySelector('input');
input.value = 'Merhaba';
input.placeholder = 'adınız';

