import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import museum21 from '../dist/img/museum21.png';

export const UlasanPage = () => {

  return (
    <section className="banner" id="ulasan">
      <Container>
        <Row className="aligh-items-left">
          <Col>
            <div >
              <div className='overlap-3'>
                <IoIosArrowBack className='icon-2'/>
                  <h1>Museum Nasional Republik Indonesia</h1>
              </div>
                <p>Museum Nasional Republik Indonesia, yang dikenal juga sebagai Museum Gajah, 
                adalah museum pertama dan terbesar di Asia Tenggara. Didirikan pada tahun 1778, museum ini menyimpan 
                lebih dari 140.000 koleksi benda bersejarah yang mencerminkan kekayaan budaya bangsa Indonesia dari 
                masa prasejarah hingga masa kini. Berlokasi di Jakarta Pusat, museum ini menjadi destinasi wisata edukasi 
                yang menarik untuk mempelajari sejarah dan budaya Indonesia. </p>
      
                <h1 className='p-1 fs-5'>Harga Tiket Masuk:</h1>
                <p>Rp 3.000,- / orang</p>
                <h1 className='p-1 fs-5'>Jam Operasional</h1>
                <p>Selasa–Minggu pukul 09.00–16.00 WIB</p>
              </div>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div >
                  <img src={museum21} alt="museum21" className="gambar"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default UlasanPage;
