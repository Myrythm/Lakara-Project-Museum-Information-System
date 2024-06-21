const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lakaramuseum"
})

app.get('/', (req, res)=> {
    const sql = "SELECT * FROM lakara";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/tambah', (req, res) => {
    const sql = "INSERT INTO lakara (nama, deskripsi, kategori, provinsi, harga, rating, gambar1, gambar2, gambar3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.nama,
        req.body.deskripsi,
        req.body.kategori,
        req.body.provinsi,
        req.body.harga,
        req.body.rating,
        req.body.gambar1,
        req.body.gambar2,
        req.body.gambar3,
    ];
    db.query(sql, values, (err, data) => {
        if(err) return res.json(err);
        return res.json("Data added successfully");
    });
});

app.put('/edit/:id', (req, res) => {
    const sql = "UPDATE lakara SET nama=?, deskripsi=?, kategori=?, provinsi=?, harga=?, rating=?, gambar1=?, gambar2=?, gambar3=? WHERE id=?";
    const id = req.params.id;
    const { nama, deskripsi, kategori, provinsi, harga, rating, gambar1, gambar2, gambar3 } = req.body;
    const values = [nama, deskripsi, kategori, provinsi, harga, rating, gambar1, gambar2, gambar3, id];
    db.query(sql, values, (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.json({ message: 'Data updated successfully' });
    });
});

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM lakara WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete data' });
        }
        return res.json({ message: 'Data deleted successfully' });
    });
});

// Api Ulasan
app.get('/api/museums/:id', (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM lakara WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err);
        return res.json(data[0]);
    });
});

// app.get('/api/museums', (req, res)=> {
//     const sql = "SELECT * FROM lakara";
//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
        
//         // Grouping data by province
//         const groupedData = data.reduce((acc, current) => {
//             if (!acc[current.provinsi]) {
//                 acc[current.provinsi] = [];
//             }
//             acc[current.provinsi].push(current);
//             return acc;
//         }, {});

//         return res.json(groupedData);
//     });
// });

app.listen(8084, ()=> {
    console.log('listening..')
})