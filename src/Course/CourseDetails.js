import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({detail}) => {
    const {id, image_url, name, rating, total_view } = detail;
    return (
        <div>
            <img src={image_url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <div>
                    <p>{rating}</p>
                    <p>{total_view}</p>
                </div>
            </div>
            <Link to={`course/${id}`}>Go to detail</Link>
        </div>
    );
};

export default CourseDetails;