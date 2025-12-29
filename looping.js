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
 // menjalankan perintah selama kondisi terpenuhi
 let nilai = 0;
 while (nilai < 5) {
    console.log(nilai);
    nilai++;
 }