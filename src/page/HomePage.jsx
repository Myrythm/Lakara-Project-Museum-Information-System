import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import gambar from '../dist/img/bg-1.png';
import peta from '../dist/img/Peta.png';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { MdForwardToInbox } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';

const HomePage = () => {
  const mapRef = useRef(null);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [topMuseums, setTopMuseums] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8084/')
            .then(res => {
                // rating 5 museum
                const sortedData = res.data.sort((a, b) => b.rating - a.rating).slice(0, 5);
                setTopMuseums(sortedData);
            })
            .catch(err => console.log(err));
    }, []);

  return (
    <div id="homepage" className="homepage">
      <header className="home-page w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">Menyimpan Kenangan, Menghidupkan Sejarah</h1>
              <button className="btn btn-lg rounded-1 me-2" onClick={scrollToMap}>JELAJAHI</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <Link to="/chatbot">
                  <img src={gambar} alt="bg-1" />
                  <MdForwardToInbox size={40} className="icon-inbox" />
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
      <div id="map" className="peta" ref={mapRef}>
        <Container>
          <Row>
            <Col>
              <img src={peta} alt="peta" className="peta-image"/>
              <Link to="/map">
                <FaLocationDot size={40} className="icon-inbox-peta" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* swiper 5 museum favorit */}
      <div id="favorites" className="swiper mt-5">
            <Carousel interval={1000}>
                <div>
                    <h1 className='d-flex justify-content-center align-items-center mb-3'>5 Museum Favorite</h1>
                </div>
                {topMuseums.map((museum, index) => (
                    <Carousel.Item key={index}>
                        <div className="carousel-content">
                            <div className="image-container2">
                                <img className="img-fluid" src={museum.gambar1} alt={`Slide ${index + 1}`} />
                            </div>
                            <Carousel.Caption>
                                <Link to={`/ulasan/${museum.id}`}>
                                    <p className="museum-name">
                                        {museum.nama}
                                    </p>
                                </Link>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
      <div id="contact" className='kontak'>
        <Container>
          <Row>
            <Col>
              <h1>Kritik dan Saran</h1>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Anda</Form.Label>
                  <Form.Control type="text" placeholder="Masukan Nama" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Masukan Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Pesan Anda</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <button className="btn btn-lg rounded-1 me-2">KIRIM</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
