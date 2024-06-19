import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Tambah = () => {
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kategori, setKategori] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [harga, setHarga] = useState('');
    const [rating, setRating] = useState('');
    const [gambar1, setGambar1] = useState('');
    const [gambar2, setGambar2] = useState('');
    const [gambar3, setGambar3] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8084/tambah`, { nama, deskripsi, kategori, provinsi, harga, rating, gambar1, gambar2, gambar3 })
            .then(res => {
                console.log(res.data);
                navigate('/detail');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='page-container d-flex justify-content-center align-items-center'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Tambah Data</h2>
                    <div className='mb-2'>
                        <label htmlFor="nama">Nama</label>
                        <input type="text" id="nama" placeholder='Masukkan Nama' className='form-control'
                            value={nama} onChange={e => setNama(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="deskripsi">Deskripsi</label>
                        <textarea id="deskripsi" placeholder='Masukkan Deskripsi' className='form-control'
                            value={deskripsi} onChange={e => setDeskripsi(e.target.value)}></textarea>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="kategori">Kategori</label>
                        <input type="text" id="kategori" placeholder='Masukkan Kategori' className='form-control'
                            value={kategori} onChange={e => setKategori(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="provinsi">Provinsi</label>
                        <input type="text" id="provinsi" placeholder='Masukkan Provinsi' className='form-control'
                            value={provinsi} onChange={e => setProvinsi(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="harga">Harga</label>
                        <input type="number" id="harga" placeholder='Masukkan Harga' step="0.01" required className='form-control'
                            value={harga} onChange={e => setHarga(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" placeholder='Masukkan Rating' step="0.1" className='form-control'
                            value={rating} onChange={e => setRating(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="gambar1">Gambar Museum</label>
                        <input type="text" id="gambar1" placeholder='Masukkan URL Gambar' className='form-control'
                            value={gambar1} onChange={e => setGambar1(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="gambar2">Gambar Barang Antik 1</label>
                        <input type="text" id="gambar2" placeholder='Masukkan URL Gambar' className='form-control'
                            value={gambar2} onChange={e => setGambar2(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="gambar3">Gambar Barang Antik 2</label>
                        <input type="text" id="gambar3" placeholder='Masukkan URL Gambar' className='form-control'
                            value={gambar3} onChange={e => setGambar3(e.target.value)} />
                    </div>
                    <Button variant="primary" type="submit">Simpan</Button>
                </form>
            </div>
        </div>
    );
};

export default Tambah;
