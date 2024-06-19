import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const EditdetailPage = () => {
    const [nama, setNama] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [kategori, setKategori] = useState('')
    const [provinsi, setProvinsi] = useState('')
    const [harga, setHarga] = useState('')
    const [rating, setRating] = useState('')
    const [gambar1, setGambar1] = useState('')
    const [gambar2, setGambar2] = useState('')
    const [gambar3, setGambar3] = useState('')
    const navigate = useNavigate();

    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8084/edit/${id}`, { nama, deskripsi, kategori, provinsi, harga, rating, gambar1, gambar2, gambar3 })
            .then(res => {
                navigate('/detail');
            }).catch(err => console.log(err));
    }

    return (
        <div className='page-container d-flex justify-content-center align-items-center'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Edit Data</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nama</label>
                        <input type="text" placeholder='Masukan Nama' className='form-control'
                            onChange={e => setNama(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Deskribsi</label>
                        <textarea id="deskripsi" placeholder='Masukkan Deskripsi' className='form-control'
                            onChange={e => setDeskripsi(e.target.value)}></textarea>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Kategori</label>
                        <input type="text" placeholder='Masukan Kategori' className='form-control'
                            onChange={e => setKategori(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Provinsi</label>
                        <input type="text" placeholder='Masukan Provinsi' className='form-control'
                            onChange={e => setProvinsi(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Harga</label>
                        <input type="number" placeholder='Masukan Harga' step="0.01" required className='form-control'
                            onChange={e => setHarga(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rating</label>
                        <input type="number" placeholder='Masukan Rating' step="0.1" className='form-control'
                            onChange={e => setRating(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Gambar Museum</label>
                        <input type="text" placeholder='Masukan url' className='form-control' value={gambar1}
                            onChange={e => setGambar1(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Gambar Barang Antik 1</label>
                        <input type="text" placeholder='Masukan url' className='form-control' value={gambar2}
                            onChange={e => setGambar2(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Gambar Barang Antik 2</label>
                        <input type="text" placeholder='Masukan url' className='form-control' value={gambar3}
                            onChange={e => setGambar3(e.target.value)} />
                    </div>
                    <Button variant="primary" type="submit">Simpan</Button>
                </form>
            </div>
        </div>
    )
}

export default EditdetailPage
