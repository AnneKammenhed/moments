import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <Navbar.Brand><img src={logo} alt='logo' height='45' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link >Home <i className="fa-solid fa-house"></i></Nav.Link>
                        <Nav.Link >Sign in <i class="fa-solid fa-right-to-bracket"></i></Nav.Link>
                        <Nav.Link >Sign up <i class="fa-solid fa-pen"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar
