'use strict';

// Kullanıcıdan giriş alma
let num1 = Number(prompt("Lütfen birinci sayıyı girin:"));
let num2 = Number(prompt("Lütfen ikinci sayıyı girin:"));
let symbol = prompt("Lütfen yapmak istediğiniz işlemi girin (+, -, *, /):");

// İşlem kontrolü
if (symbol === "+") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (symbol === "-") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (symbol === "*") {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
} else if (symbol === "/") {
    // Bölme işleminde 0 kontrolü yapalım
    if (num2 !== 0) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        console.log("Hata: Bir sayıyı 0'a bölemezsiniz!");
    }
} else {
    console.log("Geçersiz işlem! Lütfen +, -, * veya / girin.");
}
