//1.örnek
const xs = [3,-1,0,8,-5];
for(let i = 0; i < xs.length;i++)
{
    let sonuc = xs[i] === 0 ? `${xs[i]} nötr` : xs[i] > 0 ? `${xs[i]} pozitif` :`${xs[i]} negatif`;
    console.log(sonuc);
}
//2.örnek
