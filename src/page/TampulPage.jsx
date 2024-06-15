import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const TampulPage = () => {
    const [namaPulau, setNamaPulau] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            namaPulau
        });
        setNamaPulau('');
    };

    return (
        <div id="tambahpulau" className="tambahpulau">
            <header className="w-100 min-vh-100">
                <Container>
                    <h1>Tambah Nama Pulau</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNamaPulau">
                            <Form.Label>Nama Pulau</Form.Label>
                            <Form.Control
                                type="text"
                                value={namaPulau}
                                onChange={(e) => setNamaPulau(e.target.value)}
                                placeholder="Masukkan nama pulau"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">Simpan</Button>
                    </Form>
                </Container>
            </header>
        </div>
    )
}

export default TampulPage