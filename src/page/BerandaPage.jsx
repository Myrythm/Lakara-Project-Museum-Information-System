import { Container, Row, Col } from "react-bootstrap"
import { IoIosArrowBack } from "react-icons/io";

import gambar1 from '../dist/img/gambar/gambar1.png'
import gambar2 from '../dist/img/gambar/gambar2.png'
import gambar3 from '../dist/img/gambar/gambar3.png'
import gambar4 from '../dist/img/gambar/gambar4.png'
import gambar5 from '../dist/img/gambar/gambar5.png'
import gambar6 from '../dist/img/gambar/gambar6.png'
import gambar7 from '../dist/img/gambar/gambar7.png'
import gambar8 from '../dist/img/gambar/gambar8.png'
import gambar9 from '../dist/img/gambar/gambar9.png'
import gambar10 from '../dist/img/gambar/gambar10.png'
import gambar11 from '../dist/img/gambar/gambar11.png'
import gambar12 from '../dist/img/gambar/gambar12.png'


const BerandaPage = () => {
    return (
        <div className='gambar min-vh-100 d-flex align-items-center'>
            <Container>
                <div className='overlap-2'>
                    <IoIosArrowBack className='icon-2'/>
                    <h3>Museum Di Pulau Jawa</h3>
                </div>

                <Row className="g-4">
                    <Col xs={12}>
                        <h2>Daerah Khusus Jakarta (DKJ)</h2>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-4 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={gambar1} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Nasional Republik Indonesia (Gajah), Jakarta Pusat</div>
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
                </Row>
                <Row className="g-4">
                    <Col xs={12}>
                        <h2>Jawa Barat</h2>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-4 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={gambar5} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Komperensi Asia Afrika, Bandung</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar6} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Geologi, Bandung</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar7} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Gedung Sate, Bandung</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar8} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Pos Indonesia, Bandung</div>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col xs={12}>
                        <h2>Banten</h2>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-4 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={gambar9} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Negeri Banten, Serang</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar10} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Situs Kepurbakalaan Banten, Serang</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar11} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Sepeda Pramuka Keliling Dunia, Serang</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={gambar12} alt="unsplash.com" className="w-100"/>
                            <div className="image-text">Museum Gedung Juang 45 Serang, Serang</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BerandaPage