import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Footer/Footer';
import Header from '../Page/Header/Header';
import RightSideNav from '../Page/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
            <Col lg="8">
                    <Outlet></Outlet>
                </Col>
                <Col lg="4" className='d-none d-lg-block'>
                    <RightSideNav></RightSideNav>
                </Col>     
            </Row>
        </Container>
        <Footer className='ms-auto'></Footer>
        </div>
    );
};

export default Main;