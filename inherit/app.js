class Araba{
    constructor(marka, model)
    {
        this.marka = marka;
        this.model = model;
    }
}
class ElektrikliAraba extends Araba {
    constructor(marka, model, batarya){
        super(marka, model);
        this.batarya = batarya;
    }
    bilgiGoster()
    {
        super.bilgiGoster();
        console.log(`Batarya: ${this.batarya} kwh`);
    }
}