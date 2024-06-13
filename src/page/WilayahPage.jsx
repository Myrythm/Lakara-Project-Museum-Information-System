import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaList } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const WilayahPage = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/detail');
    };

    return (
        <div className='wilayah-page'>
            <h2 className="datawilayah">Data Museum</h2>
            <div className="button-container">
                <Button variant="primary" className="mb-3">Tambah Data</Button>
            </div>
            <div className="table-container">
                <Table responsive="lg" striped bordered hover className="my-table">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Nama Wilayah</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jawa Barat</td>
                            <td>
                                <div className="icon-box-4" onClick={handleDetailClick}>
                                    <FaList style={{ cursor: 'pointer' }} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default WilayahPage