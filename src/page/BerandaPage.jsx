import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BerandaPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8084/')
            .then(response => {
                setData(response.data);
                })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
        });
    }, []);

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='gambar min-vh-100 d-flex align-items-center'>
            <Container>
                <div className='overlap-2'>
                    <IoIosArrowBack className='icon-3' onClick={handleBackToHome} />
                <h3>Museum Di Pulau Jawa</h3>
            </div>

                {/* <Row className="g-4">
                {data.map(item => (
                    <Col xs={12}key={item.id}>
                        <h2>Daerah Khusus {item.provinsi}</h2>
                    </Col>
                ))}
                </Row> */}
                <Row className="row-cols-1 row-cols-md-4 g-4">
                    {data.map(item => (
                        <Col key={item.id}>
                            <div className="image-container">
                                <img src={item.gambar1} alt="Museum" className="w-100"/>
                                <div className="image-text">
                                    <a href={`/ulasan/${item.id}`}>{item.nama}, {item.provinsi}</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BerandaPage;