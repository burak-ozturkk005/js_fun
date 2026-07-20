"use strict";
//this default binding hiçbir şey this e sahip çıkmadığı durumda devreye giren
//yedek(fallback) mekanizmasıdır.
//yani this in ne olacağı fonk. nerede tanımlandığına değil, nasıl çağırıldığına bağlı.
function yazdir(){
    console.log(this);
}
yazdir();