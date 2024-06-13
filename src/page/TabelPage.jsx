import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaList } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const TabelPage = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/wilayah');
    };

    return (
        <div className="data-page">
            <h2 className="data">Data Museum</h2>
            <div className="button-container">
                <Button variant="primary" className="mb-3">Tambah Data</Button>
            </div>
            <div className="table-container">
                <Table responsive="lg" striped bordered hover className="my-table">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Nama Pulau</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pulau Jawa</td>
                            <td>
                                <div className="icon-box-3" onClick={handleDetailClick}>
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

export default TabelPage