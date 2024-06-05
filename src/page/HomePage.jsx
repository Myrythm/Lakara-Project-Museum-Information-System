import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import gambar from '../dist/img/bg-1.png';
import peta from '../dist/img/Peta.png';
import Form from 'react-bootstrap/Form';
import gambarr from '../dist/img/bg-3.png'
import lakara from '../dist/img/Lakara.png'
import gambar1 from '../dist/img/gambar2/bg1.png'
import gambar2 from '../dist/img/gambar2/bg2.png'
import gambar3 from '../dist/img/gambar2/bg3.png'
import gambar4 from '../dist/img/gambar2/bg4.png'
import gambar5 from '../dist/img/gambar2/bg5.png'
import { Link } from 'react-router-dom';


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
              <h1 className="mb-4">Selamat Datang</h1>
              <p className="mb-4">Halo, Penjelajah Budaya! Selamat singgah di LAKARA, 
                sebuah situs web yang akan membawa Anda menjelajahi 
                kekayaan museum-museum di seluruh Nusantara. Seperti 
                namanya, LAKARA (Lintasan Akar Kebudayaan Nusantara) 
                adalah perahu kecil yang siap mengantarkan Anda 
                menelusuri khazanah budaya Indonesia yang gemilang. 
                Di sini, Anda akan menemukan semua museum yang ada di 
                Nusantara.</p>
                <button className="btn btn-lg rounded-1 me-2" onClick={scrollToMap}>JELAJAHI</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={gambar} alt="bg-1" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="peta" ref={mapRef}>
        <Container>
          <Row>
            <Col>
              <img src={peta} alt="peta" className="peta-image"/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* swiper 5 museum favorit */}
      <div className='museum'>
        <Container className="museum-header">
          <Row>
            <Col>
              <h1>5 Museum Terfavorit</h1>
              <Link to="/ulasan"><img src={gambar1} alt="gambar1" /></Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="kontak" className='kontak'>
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
