//1 bir butona tıklama olayı bağlamak
const cartBtn =document.getElementById("cartBtn");
cartBtn.addEventListener("click", () => {
    console.log("Sepet açıldı.");
});
//2 Input un değerini okumak
const searchInput = document.getElementById("searchInput");
console.log(searchInput); //kullanıcının yazdığı metin.
//3 bir konteynerin içeriğini değiştirmek
const menuList = document.getElementById("menuList");
menuList.textContent = "Menu Yükleniyor...";
//getElementById de # koymayız. sadece "cartBtn" "#cartBtn değil. Bu queryselector dan ayrıldığı yer
//querySelector CSS selektoru beklediği için #cartBtn yazarız.
