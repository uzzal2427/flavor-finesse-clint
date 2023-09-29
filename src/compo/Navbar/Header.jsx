import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-danger-subtle py-4 '>
                <Container>
                    <Navbar.Brand className='fs-1 text-danger' href="#home">Flavor-Finesse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='me-4 fs-4 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ' to='/'>Home</Link>
                            <Link className='me-4 fs-4 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ' to='/'>About</Link>
                            <Link className='me-4 fs-4 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ' to='/'>Services</Link>
                            <Link className='me-4 fs-4 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ' to='/'>Chef</Link>
                        </Nav>
                        <Nav>
                            <Link><Button variant="outline-danger">Login</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{width:'100%', border:'1px solid black'}}>
            </div>
        </div>
    );
};

export default Header;