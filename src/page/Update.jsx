import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Tambah = () => {
    const [museumName, setMuseumName] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [openingTime, setOpeningTime] = useState('00:00');
    const [closingTime, setClosingTime] = useState('00:00');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            museumName,
            ticketPrice,
            openingTime,
            closingTime,
            image,
            description
        });
    };

    return (
        <div id="adminupdate" className="adminupdate">
        <header className="w-100 min-vh-100">
        <Container>
            <h1>Tambah Museum</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" as={Row} controlId="formMuseumName">
                    <Form.Label column sm={2}>Nama Museum</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={museumName}
                            onChange={(e) => setMuseumName(e.target.value)}
                            placeholder="Masukkan nama museum"
                        />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row} controlId="formTicketPrice">
                    <Form.Label column sm={2}>Harga Tiket Masuk</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={ticketPrice}
                            onChange={(e) => setTicketPrice(e.target.value)}
                            placeholder="Masukkan harga tiket masuk per-orang"
                        />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row} controlId="formOpeningHours">
                    <Form.Label column sm={2}>Jam Operasional</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            type="time"
                            value={openingTime}
                            onChange={(e) => setOpeningTime(e.target.value)}
                        />
                    </Col>
                    <Col sm={5}>
                        <Form.Control
                            type="time"
                            value={closingTime}
                            onChange={(e) => setClosingTime(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row} controlId="formImage">
                    <Form.Label column sm={2}>Unggah Gambar</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="file"
                            onChange={handleImageChange}
                        />
                        {image && <p>{image.name}</p>}
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row} controlId="formDescription">
                    <Form.Label column sm={2}>Deskripsi</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Tulis deskripsi"
                        />
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary">Simpan</Button>
            </Form>
        </Container>
        </header>
        </div>
    );
};

export default Tambah;