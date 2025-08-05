let vize, final, donemNotu, harfNotu, sonuc;
vize = 50;
final = 100;
let vizeAgirligi = 30 / 100;
let finalAgirligi = 70 / 100;
donemNotu = vize * vizeAgirligi + final * finalAgirligi;
if (donemNotu < 50) {
  harfNotu = 'F';
} else {
  if (donemNotu < 60) {
    harfNotu = 'E';
  } else if (donemNotu < 70) {
    harfNotu = 'D';
  } else if (donemNotu < 80) {
    harfNotu = 'C';
  } else if (donemNotu < 90) {
    harfNotu = 'B';
  } else if (donemNotu <= 100) {
    harfNotu = 'A';
  }
}

