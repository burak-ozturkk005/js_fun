class Oyuncu
{
    constructor(saglık,vurus,isim)
    {
        this.isim = isim;
        this.saglık = saglık;
        this.vurus = vurus;
        this.canli = true;
    }
    saldir(kime)
    {
        if(!this.canli)
        {
            console.log(`${this.isim} ölü, saldırı yapamaz.`);
            return;
        }
        kime.saglık -= this.vurus;
    
    if(kime.saglik <= 0){
        kime.saglik= 0;
        kime.canli = false;
        console.log(`${kime.isim} öldü`);
    }
}
    goster()
    {
        console.log(`${this.isim} - Sağlık: ${this.saglık}`);
    }
}
const oyuncu1 = new Oyuncu("emine",100,15);
const oyuncu2 = new Oyuncu("burak",80,10);

oyuncu1.saldir(oyuncu2);
oyuncu2.goster();