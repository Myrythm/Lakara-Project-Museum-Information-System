import React from 'react'
import { Navbar, Nav, Container, InputGroup, Form } from "react-bootstrap"
import { BsSearch } from "react-icons/bs";
import gambarnav from '../dist/img/admin.png'

const NavadminComp = () => {
    return (
        <div className='sticky-top'>    
            <Navbar expand="lg" className="navadmin">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <InputGroup className="bg-transparent border-bottom border-dark">
                            <Form.Control type="search" placeholder="seacrh" className="border-0 bg-transparent text-white me-2" />
                            <InputGroup.Text className="border-0 bg-transparent"><BsSearch className="text-dark" /></InputGroup.Text>
                        </InputGroup>
                        <div className="gambarnav">
                            <img src={gambarnav} alt="gambar" />
                            <span>Admin</span>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavadminComp