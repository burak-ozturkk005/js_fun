const menu = [{ ad: "Espresso",     fiyat: 45, kategori: "sıcak",  stok: true,  kalori: 5 },
    { ad: "Latte",        fiyat: 75, kategori: "sıcak",  stok: true,  kalori: 190 },
    { ad: "Cold Brew",    fiyat: 80, kategori: "soğuk",  stok: false, kalori: 15 },
    { ad: "Mocha",        fiyat: 90, kategori: "sıcak",  stok: true,  kalori: 290 },
    { ad: "Limonata",     fiyat: 60, kategori: "soğuk",  stok: true,  kalori: 120 },
    { ad: "Türk Kahvesi", fiyat: 40, kategori: "sıcak",  stok: false, kalori: 10 }
];
//1objeye erişim
console.log(menu.find(item => item.ad === "Mocha").fiyat);
//2filter sadece stok:true olan ürünleri içeren yeni bir dizi
const yeniMenu = menu.filter(menu => menu.stok === true);
//3 map
const yeniMenu2 = yeniMenu.map(menu => menu.ad);
//4zincirleme 2ve 3 tek satırda birlestir
const yeniMenu3 = menu.filter(menu => menu.stok === true).map(menu => menu.ad);
