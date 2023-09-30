import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-danger py-4 '>
                <Container>
                    <Navbar.Brand className='fs-1 text-light' href="#home">Flavor-Finesse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='pe-3' to='/'><Button variant="outline-light">Home</Button></Link>
                            <Link className='pe-3' to='/'><Button variant="outline-light">About</Button></Link>
                            <Link className='pe-3' to='/'><Button variant="outline-light">Service</Button></Link>
                            <Link className='pe-3' to='/'><Button variant="outline-light">Chef</Button></Link>
                        </Nav>
                        <Nav>
                            <Link to='/login'><Button variant="light">Login</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ width: '100%', border: '1px solid black' }}>
            </div>
        </div>
    );
};

export default Header;