import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSideDetail = ({detail}) => {
    const {category_id, details, image_url, rating, title, total_view} = detail;
    
    return (
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {details} </Card.Text>
        <div>
            <p>{rating}</p>
            <p>{total_view}</p>
        </div>
        <Link to='/check'><Button variant="primary">Go To Checkout</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default RightSideDetail;