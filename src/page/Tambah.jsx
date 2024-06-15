import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Tambah = () => {
    const [museumName, setMuseumName] = useState('');
    const [description, setDescription] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [openingTime, setOpeningTime] = useState('00:00');
    const [closingTime, setClosingTime] = useState('00:00');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [rating, setRating] = useState(0); // State for rating

    const handleImageChange1 = (e) => {
        setImage1(e.target.files[0]);
    };

    const handleImageChange2 = (e) => {
        setImage2(e.target.files[0]);
    };

    const handleImageChange3 = (e) => {
        setImage3(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            museumName,
            description,
            ticketPrice,
            openingTime,
            closingTime,
            image1,
            image2,
            image3,
            rating
        });

        // You can handle image uploads here
        // For example, using FormData to upload images
        const formData = new FormData();
        formData.append('museumName', museumName);
        formData.append('description', description);
        formData.append('ticketPrice', ticketPrice);
        formData.append('openingTime', openingTime);
        formData.append('closingTime', closingTime);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('rating', rating);

        // Example of sending formData to server using fetch
        fetch('your-upload-url', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div id="admintambah" className="admintambah">
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

                        <Form.Group className="mb-3" as={Row} controlId="formImage1">
                            <Form.Label column sm={2}>Unggah Gambar Museum</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    onChange={handleImageChange1}
                                />
                                {image1 && <p>{image1.name}</p>}
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" as={Row} controlId="formImage2">
                            <Form.Label column sm={2}>Unggah Gambar Barang Antik 1</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    onChange={handleImageChange2}
                                />
                                {image2 && <p>{image2.name}</p>}
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" as={Row} controlId="formImage3">
                            <Form.Label column sm={2}>Unggah Gambar Barang Antik 2</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    onChange={handleImageChange3}
                                />
                                {image3 && <p>{image3.name}</p>}
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" as={Row} controlId="formRating">
                            <Form.Label column sm={2}>Rating</Form.Label>
                            <Col sm={10}>
                                <div className="d-flex align-items-center">
                                    <Form.Control
                                        type="range"
                                        min={0}
                                        max={10}
                                        step={0.1}
                                        value={rating}
                                        onChange={(e) => setRating(Number(e.target.value))}
                                    />
                                    <p className="ml-2 mb-0">{rating.toFixed(1)}/10</p>
                                </div>
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
