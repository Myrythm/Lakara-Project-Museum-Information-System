import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import gambar from '../dist/img/bg-1.png';
import peta from '../dist/img/Peta.png';
import Form from 'react-bootstrap/Form';
import gambar1 from '../dist/img/gambar2/bg1.png';
import gambar2 from '../dist/img/gambar2/bg2.png';
import gambar3 from '../dist/img/gambar/gambar3.png';
import gambar4 from '../dist/img/gambar2/bg4.png';
import gambar5 from '../dist/img/gambar/gambar5.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const HomePage = () => {
  const mapRef = useRef(null);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="homepage" className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">Menyimpan Kenangan, Menghidupkan Sejarah</h1>
              <button className="btn btn-lg rounded-1 me-2" onClick={scrollToMap}>JELAJAHI</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={gambar} alt="bg-1" />
            </Col>
          </Row>
        </Container>
      </header>
      <div id="map" className="peta" ref={mapRef}>
        <Container>
          <Row>
            <Col>
              <img src={peta} alt="peta" className="peta-image"/>
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
          <Carousel.Item>
            <Link to="/ulasan">
              <div className="d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={gambar1} alt="First slide" />
              </div>
            </Link>
            <Carousel.Caption>
              <p style={{ color: 'white', fontWeight:'bold'}}>Museum Nasional Republik Indonesia (Gajah)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5 align-items-center">
              <img className="img-fluid" src={gambar2} alt="Second slide" />
            </div>
            <Carousel.Caption>
              <p style={{ color: 'white', fontWeight:'bold'}}>Museum Nasional Sumatera Utara</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={gambar3} alt="Third slide" />
            </div>
            <Carousel.Caption>
              <p style={{ color: 'white', fontWeight:'bold'}}>Museum Kalimantan Barat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={gambar4} alt="Fourth slide" />
            </div>
            <Carousel.Caption>
              <p style={{ color: 'white', fontWeight:'bold'}}>Museum Kota Makassar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={gambar5} alt="Fifth slide" />
            </div>
            <Carousel.Caption>
              <p style={{ color: 'white', fontWeight:'bold'}}>Museum Negeri Papua</p>
            </Carousel.Caption>
          </Carousel.Item>
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
