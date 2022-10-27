import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSideDetail = ({detail}) => {
    const {category_id, details, image_url, rating, title, total_view} = detail;
    
    return (
        <Card className='mt-5 mb-5'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className='fs-3'>{title}</Card.Title>
        <Card.Text> {details} </Card.Text>
        <div className='d-flex justify-content-between fw-bold'>
            <p>Ratting: {rating}</p>
            <p>Total-View: {total_view}</p>
        </div>
        <Link to='/check'><Button variant="primary">Go To Checkout</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default RightSideDetail;