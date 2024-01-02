import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommonButton from '../common/CommonButton/CommonButton';
import parklogo from '../../assests/pictures/park-basic-logo.png'
import './NavBar.css'


function NavBar() {
    return (
        <>
            <Navbar sticky="top" expand={"sm"} className="bg-dark mb-3">
                <Container fluid className='px-2'>
                    <Navbar.Brand href="/"><img src={parklogo} style={{ width: "70%" }} /></Navbar.Brand>
                    <Navbar.Toggle className='navbar-expand-toggle' aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        
                    >
                        <Offcanvas.Header className='text-white bg-dark' closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='justify-content-center align-items-center bg-dark'>
                            <Nav className="justify-content-center flex-grow-1 pe-3 gap-5">
                                <Nav.Link className='text-white' href="/action1">Home</Nav.Link>
                                <Nav.Link className='text-white' href="/action2">Booking</Nav.Link>
                                <Nav.Link className='text-white' href="/action2">About us</Nav.Link>
                            </Nav>
                            <Nav className="justify-content-center">
                                <Nav.Link href="/action1"><CommonButton ButtonText={"Sign In"} /></Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar
