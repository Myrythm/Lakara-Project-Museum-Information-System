import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const TamkoPage = () => {
    const [namaKota, setNamaKota] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            namaKota
        });
        setNamaKota('');
    };

    return (
        <div id="tambahkota" className="tambahkota">
            <header className="w-100 min-vh-100">
                <Container>
                    <h1>Tambah Nama Kota</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNamaKota">
                            <Form.Label>Nama Kota</Form.Label>
                            <Form.Control
                                type="text"
                                value={namaKota}
                                onChange={(e) => setNamaKota(e.target.value)}
                                placeholder="Masukkan nama Kota"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">Simpan</Button>
                    </Form>
                </Container>
            </header>
        </div>
    )
}

export default TamkoPage