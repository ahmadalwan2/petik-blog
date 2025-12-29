 // === Membuat LOOPING YANG SEDERHANA DIDALAM JAVASCRIPT === //

 // - Looping for:
 // nilai awal
 // nilai akhir/kondisi akhir
 // increment/decrement 

 // --- ini contoh increment
 // ciri khasnya itu menggunakkan ++
 for (let i = 0; i < 10; i++) {
        console.log(`Looping ke-${i}`);      
 }

 // --- ini contoh decrement 
 // ciri khasnya itu menggunakan --
  for (let i = 10; i > 0; i--) {
        console.log(`Looping ke-${i}`);    
 }

 // - Looping while: 
 // menjalankan kode selama kondisi terpenuhi
 let nilai = 0;
 while (nilai < 5) {
    console.log(nilai);
    nilai++;
 }

 // - Looping do while:
 // menjalankan kode selama kondisi terpenuhi
 // prompt-sync = untuk menjalankan input didalam node js melalui terminal VsCode
const prompt = require("prompt-sync")();

let input;
let password = "admin123";

do {
  input = prompt("Masukkan password: ");
} while (input !== password);
console.log("Password benar, akses diterima");

 // - Operator Ternery
 // kondisi pertama menggunakan tanda ? lalu nilainya
 // kondisi kedua menggunakan tanda : lalu nilainya 
 const age = 19;
 const status = age > 21 ? "Dewasa" : "Belum Dewasa";
 console.log(status);
 