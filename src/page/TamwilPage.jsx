import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const TamwilPage = () => {
    const [namaWilayah, setNamaWilayah] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            namaWilayah
        });
        setNamaWilayah('');
    };
    return (
        <div id="tambahwilayah" className="tambahwilayah">
            <header className="w-100 min-vh-100">
                <Container>
                    <h1>Tambah Nama Wilayah</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNamaWilayah">
                            <Form.Label>Nama Wilayah</Form.Label>
                            <Form.Control
                                type="text"
                                value={namaWilayah}
                                onChange={(e) => setNamaWilayah(e.target.value)}
                                placeholder="Masukkan nama wilayah"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">Simpan</Button>
                    </Form>
                </Container>
            </header>
        </div>
    )
}

export default TamwilPage