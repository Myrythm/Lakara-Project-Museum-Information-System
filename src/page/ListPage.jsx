import React from 'react'
import Table from 'react-bootstrap/Table';

const TambahPage = () => {
    return (
        <div className="list-museum">
            <Table striped bordered hover className='custom-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wilayah</th>
                        <th>Jumlah Pengunjung</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Museum Kota Makasar</td>
                        <td>Sulawesi</td>
                        <td>40</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
        </Table>      
    </div>
    )
}

export default TambahPage