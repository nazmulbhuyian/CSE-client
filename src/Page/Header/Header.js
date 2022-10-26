import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbNqmk1Sqpia56xioVWbnzVFOkznv6SPSjW3I2DBT&s'></Image>
          <Navbar.Brand href="#home">About CSE</Navbar.Brand>
          </Nav>
          <Nav>
            <Link className='me-3 text-white fw-bold fs-5' to='/'>Courses</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/blog'>Blog</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/faq'>FAQ</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/dark'>Dark</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/login'>Login</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/register'>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;