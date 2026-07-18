//bir koleksiyonu dolaşır. objenin keyleri üzerinde otomatik dönen bir döngüdür.
const menuItem = {
    isim: "Latte",
    fiyat: 55,
    kategori: "sicak"
};
for(const key in menuItem)
{
console.log(key, "->",menuItem[key]);
}
