// === Sintaks dasar bikin server dengan Express === //
import express from "express";

// Inisialisasi aplikasi Express
const app = express();

// Route utama (root "/")
app.get("/", (req, res) => {
    // Cek status response
    console.log(res.statusCode); 
    // Kirim teks sederhana ke client
    res.end("Halo");
});

// Route "/okrek"
app.get("/okrek", (req, res) => {
    // Cek isi request (biasanya panjang, hati-hati kalau console.log full)
    console.log(req);
    // Kirim teks sederhana ke client
    res.end("Selamat datang di okrek");
});

// Route "/json" kirim data dalam format JSON
app.get("/json", (req, res) => {
    res.json({
        status: "OK",
        message: "Sukses",
        data: [
            {
                username: "Ucup",
                pass: "samson123", // biasanya password jangan dikirim plain text ya
            },
        ],
    });
});

// Route "/search/:keyword" contoh ambil parameter dari URL
app.get("/search/:keyword", (req, res) => {
    // Bisa ambil keyword pakai req.params.keyword kalau mau dipakai
    res.json({
        status: "OK",
        message: "Sukses",
        data: [
            { nama_produk: "Kaos", stok: 12 },
            { nama_produk: "Kaos_polos", stok: 14 },
            { nama_produk: "Kaos_oblong", stok: 20 },
        ],
    });
});

// Route "/produk/:id" → contoh ambil ID dari URL
app.get("/produk/:id", (req, res) => {
    // Cara ambil ID:
    // const { id } = req.params;
    // console.log(id);

    res.json({
        status: "OK",
        message: "Sukses",
        data: [
            { nama_produk: "Kaos", stok: 12 },
            { nama_produk: "Kaos_polos", stok: 14 },
            { nama_produk: "Kaos_oblong", stok: 20 },
        ],
    });
});

// Route "/data/:id" → ambil data sesuai ID
app.get("/data/:id", (req, res) => {
    const data = [
        { id: 1, nama: "asep", nilai: 30 },
        { id: 2, nama: "ujang", nilai: 100 },
        { id: 3, nama: "samsul", nilai: 90 },
        { id: 4, nama: "adit", nilai: 89 },
    ];

    const id = req.params.id;
    // Cari data sesuai ID (parseInt biar string jadi number)
    const cari = data.find((item) => item.id === parseInt(id));
    res.json(cari);
});

// Route "/search" → filter data berdasarkan query string (?mod=ganjil / ?mod=genap)
app.get("/search", (req, res) => {
    const data = [
        { id: 1, nama: "asep", nilai: 30 },
        { id: 2, nama: "ujang", nilai: 100 },
        { id: 1, nama: "samsul", nilai: 90 },
        { id: 4, nama: "adit", nilai: 89 },
    ];

    // Pisahkan data jadi genap & ganjil
    const genap = data.filter((dg) => dg.id % 2 === 0);
    const ganjil = data.filter((dg) => dg.id % 2 === 1);

    // Ambil query string "mod"
    const mod = req.query.mod;

    if (mod === "ganjil") {
        res.json(ganjil);
    } else if (mod === "genap") {
        res.json(genap);
    } else {
        // Kalau query nggak sesuai, kasih semua data
        res.json(data);
    }
});

// Jalankan server di port 3000
app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});
