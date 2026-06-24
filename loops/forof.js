//a lari x e dönüştüren bir program yaz.
let text = "araba";
let yeniMetin = "";
for(const harf of text)
{
    if(harf === "a")
    {
    yeniMetin += "x";
    }else
    {
        yeniMetin += harf;
    }
}
console.log(yeniMetin);
//sadece çift sayilari yeni bir diziye ekle eğer 0 a denk gelirsen durdur. ve o ana kadar olan çift sayıları yazdır
let numbers = [2,7,4,9,0,6,8];
let newNum = [];
for(const num of numbers)
{
    if(num % 2 === 0)
        if(num === 0)
        {
            break;
        }else
        {
        newNum.push(num);
        }
}
console.log(newNum);
