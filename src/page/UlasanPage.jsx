// import React, { useState } from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import gambar1 from '../dist/img/museum21.png';
// import gambar2 from '../dist/img/museum22.png';

// export const UlasanPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [gambar1, gambar2];
//   const navigate = useNavigate();

//   const handlePrevious = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
//   };

//   const handleBackToHome = () => {
//     navigate('/beranda');
//   };

//   return (
//     <section className="banner" id="ulasan">
//       <div className="background-overlay"></div>
//       <Container>
//         <Row className="align-items-left">
//           <Col xs={12} md={6} xl={7}>
//             <div>
//               <div className='overlap-2'>
//                 <IoIosArrowBack className='icon-2' onClick={handleBackToHome} />
//                 <h1>Museum Nasional Republik Indonesia</h1>
//               </div>
//               <p style={{ fontSize: '14px' }}>
//                 Museum Nasional Republik Indonesia, yang dikenal juga sebagai Museum Gajah,
//                 adalah museum pertama dan terbesar di Asia Tenggara. Didirikan pada tahun 1778, museum ini menyimpan
//                 lebih dari 140.000 koleksi benda bersejarah yang mencerminkan kekayaan budaya bangsa Indonesia dari
//                 masa prasejarah hingga masa kini. Berlokasi di Jakarta Pusat, museum ini menjadi destinasi wisata edukasi yang menarik untuk mempelajari sejarah dan budaya Indonesia.
//               </p>
//               <h1 className='p-1 fs-5'>Harga Tiket Masuk:</h1>
//               <p>Rp 3.000,- / orang</p>
//               <h1 className='p-1 fs-5'>Jam Operasional</h1>
//               <p>09.00–16.00 WIB</p>
//             </div>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <div className="image-container">
//               <IoIosArrowBack className='arrow-icon' onClick={handlePrevious} />
//               <img src={images[currentImageIndex]} alt={`museum${currentImageIndex + 1}`} className="gambar-ulasan" />
//               <IoIosArrowForward className='arrow-icon' onClick={handleNext} />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default UlasanPage;


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export const UlasanPage = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [museumData, setMuseumData] = useState({});
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:8084/api/museums/${id}`)
//             .then(response => {
//                 setMuseumData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, [id]);

//     const handlePrevious = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : museumData.images.length - 1));
//     };

//     const handleNext = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex < museumData.images.length - 1 ? prevIndex + 1 : 0));
//     };

//     const handleBackToHome = () => {
//         navigate('/beranda');
//     };

//     // if (!museumData.nama) return <p>Loading...</p>;

//     return (
//         <section className="banner" id="ulasan">
//             <div className="background-overlay"></div>
//             <Container>
//                 <Row className="align-items-left">
//                     <Col xs={12} md={6} xl={7}>
//                         <div>
//                             <div className='overlap-2'>
//                                 <IoIosArrowBack className='icon-2' onClick={handleBackToHome} />
//                                 <h1>{museumData.nama}</h1>
//                             </div>
//                             <p style={{ fontSize: '14px' }}>
//                                 {museumData.deskripsi}
//                             </p>
//                             <h1 className='p-1 fs-5'>Harga Tiket Masuk:</h1>
//                             <p>Rp {museumData.harga},- / orang</p>
//                             <h1 className='p-1 fs-5'>Jam Operasional</h1>
//                             <p>{museumData.jam_operasional}</p>
//                         </div>
//                     </Col>
//                     <Col xs={12} md={6} xl={5}>
//                         <div className="image-container">
//                             <IoIosArrowBack className='arrow-icon' onClick={handlePrevious} />
//                             <img src={museumData[`gambar${currentImageIndex + 1}`]} alt={`museum${currentImageIndex + 1}`} className="gambar-ulasan" />
//                             <IoIosArrowForward className='arrow-icon' onClick={handleNext} />
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default UlasanPage;


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
                            <h1 className='p-1 fs-5'>Jam Operasional</h1>
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