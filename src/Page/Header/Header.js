import {  signOut, getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';



const auth = getAuth(app);

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(() => {
          console.log({})
        })
        .catch(() =>{
          console.log({})
        })
      }
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
            <button onClick={handleGoogleSignOut}>Sign Out</button>
            {<p>user?.email</p>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;