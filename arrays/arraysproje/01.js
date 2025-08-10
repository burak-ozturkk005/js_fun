function kucukHarfVarmi(metin) {
    for(let i = 0; i< metin.length; i++)
    {
  const kod = metin.charCodeAt(i);
  if (kod >= 97 && kod <= 122) {
    return true;
  }
}
return false;
}
function buyukHarfVarmi(metin)
{
    for(let i = 0; i< metin.length; i++)
    {
    const kod = metin.charCodeAt(i);
    if(kod >=65 && kod <= 90)
    {
        return true;
    }
}
return false;
}
function resetNeeded(array) {
  const invalids = [];

  for (let i = 0; i < array.length; i++) {
    const pass = array[i];
    const hasMinLength = pass.length >= 8;
    const hasUpper = buyukHarfVarmi(pass);
    const hasLower = kucukHarfVarmi(pass);
    if (!(hasMinLength && hasUpper && hasLower)) {
      invalids.push(pass);
    }
  }

  return invalids;
}

console.log(resetNeeded(['Cxtbyd', 'Para1234', 'temiz12', 'mariyaRT', 'tel']));