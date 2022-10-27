import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCardDetailsSummery = ({detail}) => {
    const {category_id, details, image_url, rating, title, total_view} = detail;
    return (
        <Card className='mb-5'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {details} </Card.Text>
        <div>
            <p>{rating}</p>
            <p>{total_view}</p>
        </div>
        <div className='justify-content-between d-flex'>
        <Link to='/check'><Button variant="primary">Go To Checkout</Button></Link>
        <Button variant="primary">Download</Button>
        </div>
      </Card.Body>
    </Card>
    );
};

export default CourseCardDetailsSummery;