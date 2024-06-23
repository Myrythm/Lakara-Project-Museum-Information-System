import React from 'react';
import { Navbar, Nav, Container, InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import logo from '../dist/img/logo.png';

const NavUlasanComp = ({ isLoggedIn, handleLogout }) => {
    return (
        <div className='sticky-top'>    
            <Navbar expand="lg" className="navUlasan">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-4'>
                        <img
                            src={logo}
                            alt="Lakara Logo"
                            style={{ height: '40px' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <InputGroup className="bg-transparent border-bottom border-white">
                                <Form.Control type="search" placeholder="search" className="border-0 bg-transparent text-white me-2" />
                                <InputGroup.Text className="border-0 bg-transparent"><BsSearch className="text-white" /></InputGroup.Text>
                            </InputGroup>
                            <Nav.Link href="/beranda" className='mx-2 text-white'>Beranda</Nav.Link>
                            <Nav.Link href="/" className='mx-2 text-white'>Tentang</Nav.Link>
                            <Nav.Link href="/" className='mx-2 text-white'>Kontak</Nav.Link>
                            {isLoggedIn && (
                                <>
                                    <Nav.Link href="/profile" className='mx-2 text-white'>Profile</Nav.Link>
                                    <button type="button" className="btn btn-primary" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavUlasanComp;
