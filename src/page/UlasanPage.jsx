import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const UlasanPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [museumData, setMuseumData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8084/api/museums/${id}`)
            .then(response => {
                setMuseumData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    };

    const handleBackToHome = () => {
        navigate('/beranda');
    };


    return (
        <section className="banner" id="ulasan">
            <div className="background-overlay"></div>
            <Container>
                <Row className="align-items-left mt-3">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <div className='overlap-2'>
                                <IoIosArrowBack className='icon-2' onClick={handleBackToHome} />
                                <h1>{museumData.nama}</h1>
                            </div>
                            <p style={{ fontSize: '14px' }}>
                                {museumData.deskripsi}
                            </p>
                            <h1 className='p-1 fs-5'>Harga Tiket Masuk:</h1>
                            <p>Rp {museumData.harga},- / orang</p>
                            <p>{museumData.jam_operasional}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="image-container">
                            <IoIosArrowBack className='arrow-icon' onClick={handlePrevious} />
                            <img src={museumData[`gambar${currentImageIndex + 1}`]} alt={`museum${currentImageIndex + 1}`} className="gambar-ulasan" />
                            <IoIosArrowForward className='arrow-icon' onClick={handleNext} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UlasanPage;