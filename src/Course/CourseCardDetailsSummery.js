import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseCardDetailsSummery = ({detail}) => {
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default CourseCardDetailsSummery;