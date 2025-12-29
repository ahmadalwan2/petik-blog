 // === MEMBUAT ARRAY YANG SEDERHANA MELALUI JAVASCRIPT === //

 // - Menggunakan tanda []
 const fruits = ["Apel", "Anggur", "Jeruk"];
 const animals = ["Kucing", "Singa", "Elang"];
 fruits.push("Durian"); // push = menambahkan data dari paling belakang
 animals.unshift("Kambing"); // unshift = menambahkan data dari paling depan

 // - Menggunakan looping forEach
 // - forEach berfungsi untuk melooping data di array JS
 fruits.forEach((fruit) => console.log(fruit));
 animals.forEach((animal) => console.log(animal));

 // --- Cara manggilnya --- //
 // - index dimulai dari 0
 // - sebut nama variblenya lalu index keberapa
 //  console.log(fruits[0]);
 //  console.log(animals[1]);

 // - Menggunakan array method map
 const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
 console.log(fruitsUpper);

 // - Menggunakan array method filter
 // untuk mendapatkan data nama buah yang tidak lebih dari 5 huruf
 const longNameFruits = fruits.filter((fruit) => fruit.length > 5);
 console.log(longNameFruits);
 
 const combine = [...fruits, ...animals];
 const foundItems = combine.find(
    (item) => item.toLowerCase() == "apel".toLowerCase());
 console.log(foundItems);

 console.log(combine.includes("SInga"));
 
 
 