
import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';



const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleGoogleSignOut = () => {
    logOut()
      .then(() => {
        console.log({})
      })
      .catch(() => {
        console.log({})
      })
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbNqmk1Sqpia56xioVWbnzVFOkznv6SPSjW3I2DBT&s'></Image>
            <Navbar.Brand className='ms-3 fs-3 text-primary'>Developer Training</Navbar.Brand>
          </Nav>
          <Nav>
            <Link className='me-3 text-white fw-bold fs-5' to='/'>Courses</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/blog'>Blog</Link>
            <Link id='toogle' className='me-3 text-white fw-bold fs-5' to='/dark'>Dark</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/login'>Login</Link>
            <Link className='me-3 text-white fw-bold fs-5' to='/register'>Register</Link>
            <button onClick={handleGoogleSignOut}>Sign Out</button>
          </Nav>
        </Navbar.Collapse>
        {user?.uid ?
          // <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName}>
            <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
          </button>
          :
          <FaUserAlt></FaUserAlt>
        }
      </Container>
    </Navbar>
  );
};

export default Header;
