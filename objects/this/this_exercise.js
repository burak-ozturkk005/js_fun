const kullanici = {
    isim : "Burak",
    ilgiAlanlari : ["Kodlama","Modlama","Web Gelistirme"],
    bilgileriYazdir : function (){
        //2.aşama hata bu anonim fonksiyon foreach tarafından tek başına çağrılır
        //'kullanici.' üzerinden çağırılmadığı için Default Binding devreye girer.
        console.log(this.isim + " şunlarla ilginenir:");
        this.ilgiAlanlari.forEach((alan) => {
            console.log(this.isim + " -> " + alan)
        });
    }
};
kullanici.bilgileriYazdir();