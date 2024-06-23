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

// api login

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM login WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const user = results[0];
            if (password === user.password) {
                // Setelah berhasil login, sesuaikan respons berdasarkan role
                if (user.role === 'admin') {
                    res.json({ success: true, role: 'admin', message: 'Login successful' });
                } else {
                    res.json({ success: true, role: 'user', message: 'Login successful' });
                }
            } else {
                res.json({ success: false, message: 'Incorrect password' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    });
});



//profile
app.post('/api/profile', (req, res) => {
    const { email } = req.body;
    db.query('SELECT username, email FROM login WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true, user: results[0] });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    });
});


// api daftar

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // Periksa apakah email sudah terdaftar
    db.query('SELECT email FROM login WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return res.json({ success: false, message: 'Email sudah terdaftar' });
        }

        // Simpan pengguna baru ke database
        const newUser = { username, email, password };
        db.query('INSERT INTO login SET ?', newUser, (err, results) => {
            if (err) throw err;
            res.json({ success: true, message: 'Registrasi berhasil' });
        });
    });
});

// api museum
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

app.get('/api/museums/favorites', (req, res) => {
    const sql = "SELECT * FROM lakara ORDER BY rating DESC LIMIT 5";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8084, ()=> {
    console.log('listening..')
})