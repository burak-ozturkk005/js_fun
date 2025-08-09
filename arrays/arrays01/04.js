const array1 = [3,5,7,9];
const array2 = [3,5,7,9];

if(array1 === array2) {
    array1.push(11);
} else {
    array2.unshift(1)
}

array2.push(11);
array1.push(array2[0]);

console.log(array1);
const result = [];

//tablo oluştur
function tabloOlustur(satir,sutun)
{
  for(let i = 0; i < satir; i++)
    {
      let satirmetni = "";
      for(let j = 0; j < sutun; j++)
        {
          satirmetni += "*";
        }
      console.log(satirmetni);
    }
}
tabloOlustur(3,5);

// Çarpım tablosu
for(let i = 1; i <= 10;i++)
  {
    for(let j = 1; j <= 10; j++)
      {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    console.log("------");
  }


const nums = [5, 13, 18, 21, 45, 83];
let maxNum = nums[0];
for(let i = 0; i < nums.length;i++)
  {
    if(nums[i] > maxNum)
      {
        maxNum = nums[i];
      }
  }
  console.log(maxNum);

  