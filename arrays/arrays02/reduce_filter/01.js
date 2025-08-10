const maaslar = [5000,8000,12000];
const toplamMaas  = maaslar.reduce((toplam,maas) => {
    return toplam + maas;
}, 0); // => 0 başlangıc değeri maas dizideki eleman toplam önceki toplama sonucu
console.log(toplamMaas);

const calisanlar = [["Ali",5000],["Ayşe",8000],["Mehmet",12000]];
const toplamMaas1 = calisanlar.reduce((toplam, [isim,maas]) => {return toplam + maas}, 0);
console.log(toplamMaas1);