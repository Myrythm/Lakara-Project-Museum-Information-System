import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import gambar from '../dist/img/bg-1.png';
import peta from '../dist/img/Peta.png';
import Form from 'react-bootstrap/Form';
import gambar1 from '../dist/img/gambar2/bg1.png'
import gambar2 from '../dist/img/gambar2/bg2.png'
import gambar3 from '../dist/img/gambar/gambar3.png'
import gambar4 from '../dist/img/gambar2/bg4.png'
import gambar5 from '../dist/img/gambar/gambar5.png'


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
              <br />
              <br />
              <br />
              <br />
              <br />
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
              <h1>5 Museum Terfavorit</h1><Row className="g-4">
                    
                </Row>
                <Row className="row-cols-1 row-cols-md-6 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={gambar1} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">
                                <a href="/ulasan">Museum Nasional Republik Indonesia (Gajah), Jakarta Pusat</a>
                                </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar2} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Sejarah Jakarta (Museum Fathahillah), Jakarta Utara</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar3} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Monumen Pancasila Sakti, Jakarta Timur</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar4} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Striamandala, Jakarta Selatan</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar5} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Striamandala, Jakarta Selatan</div>
                        </div>
                    </Col>
                </Row>
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
