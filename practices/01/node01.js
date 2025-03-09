const readline = require("readline");

const r1= readline.createInterface({
    input: process.stdin,
    output: process.stdout});

    r1.question("Lutfen bir sayiyi girin.", function(num1){
        r1.question("Lutfen ikinci sayiyi girin: ",function(num2){
            r1.question("Lutfen yapmak istediginiz islemi girin (+,-,*,/): ", function(symbol){
        num1 = Number(num1);
        num2 = Number(num2);
        let result;
        switch(symbol) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1- num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Hata 0 a bölme hatası";
                break;
            default:
                result = "Geçersiz İşlem!";
        }
        console.log(`Sonuç: ${result}`);
        r1.close();    
    });
    });
});