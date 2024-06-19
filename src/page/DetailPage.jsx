import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'

const DetailPage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8084/')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate('/admintambah');
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8084/delete/${id}`)
            .then(res => {
                setData(data.filter(item => item.id !== id));
            })
            .catch(err => {
                console.error(err);
            });
    };
    
    return (
        <div className='detail-page'>
            <h2 className="detail">Data Museum</h2>
            <div className="button-container">
                <Button variant="primary" className="mb-3" onClick={handleTambahDataClick}>
                    Tambah Data
                </Button>
            </div>
            <div className="table-container">
                <Table responsive striped bordered hover className="my-table">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Nama Museum</th>
                            <th>Deskribsi</th>
                            <th>Kategori</th>
                            <th>Provinsi</th>
                            <th>Harga Tiket</th>
                            <th>Rating</th>
                            <th>Gambar Museum</th>
                            <th>Gambar Barang Antik 1</th>
                            <th>Gambar Barang Antik 2</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.nama}</td>
                                <td>{item.deskripsi}</td>
                                <td>{item.kategori}</td>
                                <td>{item.provinsi}</td>
                                <td>{item.harga}</td>
                                <td>{item.rating}</td>
                                <td><img src={item.gambar1} className="img-container" alt="gambar1" /></td>
                                <td><img src={item.gambar2} className="img-container" alt="Gambar1" /></td>
                                <td><img src={item.gambar3} className="img-container" alt="Gambar2" /></td>
                                <td className="icon-container">
                                    <span className="icon-box-1">
                                    <Link to={`/edit/${item.id}`}>
                                        <FaEdit />
                                    </Link>
                                    </span>
                                    <span onClick={e => handleDelete(item.id)} className="icon-box-2">
                                        <FaTrashAlt />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default DetailPage