import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import gambarmuseum from '../dist/img/gambar2/bg1.png'
import gambar1 from '../dist/img/museum21.png'
import gambar2 from '../dist/img/museum22.png'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate('/admintambah');
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
                            <th>Harga Tiket Masuk</th>
                            <th>Jam Operasional</th>
                            <th>Rating</th>
                            <th>Gambar Museum</th>
                            <th>Gambar Barang Antik 1</th>
                            <th>Gambar Barang Antik 2</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Museum Nasional Republik Indonesia(Gajah), Jakarta Pusat</td>
                            <td>Museum Nasional Republik Indonesia, yang dikenal juga sebagai Museum Gajah, 
                                adalah museum pertama dan terbesar di Asia Tenggara. Didirikan pada tahun 1778, museum ini menyimpan 
                                lebih dari 140.000 koleksi benda bersejarah yang mencerminkan kekayaan budaya bangsa Indonesia dari 
                                masa prasejarah hingga masa kini. Berlokasi di Jakarta Pusat, museum ini menjadi destinasi wisata edukasi 
                                yang menarik untuk mempelajari sejarah dan budaya Indonesia.</td>
                            <td>3.000-6.000</td>
                            <td>09.00-15.00</td>
                            <td>4.7</td>
                            <td><img src={gambarmuseum} className="img-container" alt="Gambar Museum"/></td>
                            <td><img src={gambar1} className="img-container" alt="Gambar1"/></td>
                            <td><img src={gambar2} className="img-container" alt="Gambar2"/></td>
                            <td className="icon-container">
                                <span className="icon-box-1">
                                    <FaEdit />
                                </span>
                                <span className="icon-box-2">
                                    <FaTrashAlt />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default DetailPage