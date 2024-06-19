import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

const MassagePage = () => {

    return (
        <div className='massage-page'>
            <h2 className="massage">Massage</h2>
            <div className="button-container">
            </div>
            <div className="table-container">
                <Table responsive striped bordered hover className="my-table">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Nama Pengirim</th>
                            <th>Pesan</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Musharof Chowdhury</td>
                            <td>Halo tim pengembang, saya pengguna setia</td>
                            <td>17 oktober 2024</td>
                            <td className="icon-container">
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

export default MassagePage