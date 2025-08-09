let sayilar = [2,3,4,5,6,7,8,9,10];
sayilar.unshift(0);
for(let i = 0; i< sayilar.length;i++)
  {
    if(sayilar[i] % 2 == 0)
      {
        console.log(sayilar[i]);
      }
  }

  const sayilar1 = [1,3,5,7,9];
sayilar1.push(11);
for(let i = 0; i< sayilar1.length;i++)
  {
    console.log(sayilar1[i]);
      }

const secilecekKisi = ["Emre","Melisa","Fatih","Dilara"];
let cekilis = Math.floor(Math.random() * 4);
let gorevli = secilecekKisi[cekilis];
console.log(gorevli);



const sample = "Hello World";
let indeks = Math.floor(Math.random() * sample.length);
let karakter = sample[indeks];
console.log(karakter);

const takim = ["Mahmut", "İlayda", "Ceren"];
let secilenler = [];

while (secilenler.length < 2) {
    let rastgeleIndex = Math.floor(Math.random() * takim.length);
    let secilen = takim[rastgeleIndex];

    if (!secilenler.includes(secilen)) {
        secilenler.push(secilen);
    }
}
console.log(secilenler);