// === MEMBUAT SEBUAH KONDISI DIDALAM JAVASCRIPT === //

// - Jika nilai > 90 = A
// - Jika nilai > 70 = B
// - Jika nilai > 60 = C
// - Jika nilai < 60 = D

const nilai = -1000;
if (nilai > 90 && nilai <= 100) {
    grade = "A";
    console.log("A");
} else if (nilai > 70 && nilai <= 90){
    grade = "B";
    console.log("B");
} else if (nilai > 60 && nilai <= 70) {
    grade = "C";
    console.log("C");
} else if (nilai < 60 && nilai >= 0) {
    grade = "D";
    console.log("D");
} else {
    console.log("Nilai tidak valid");
}

switch (nilai) {
    case "A":
        console.log("Sangat Baik");
        break;
    case "B":
        console.log("Baik");
        break;
    case "C":
        console.log("Cukup");
        break;
    case "D":
        console.log("Kurang Baik");
        break;                        
    default:
        "Grade tidak valid";
        break;
}