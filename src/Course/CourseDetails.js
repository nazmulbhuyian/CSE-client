import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({detail}) => {
    const {id, image_url, name, rating, total_view } = detail;
    return (
        <div className='col-6 border border-primary p-2'>
            <img src={image_url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <div className='d-flex justify-content-between text-secondary fw-bold mt-2'>
                    <p>Rating: {rating}</p>
                    <p>Total-View: {total_view}</p>
                </div>
            </div>
            <Link className='btn btn-primary' to={`course/${id}`}>Go to detail</Link>
        </div>
    );
};

export default CourseDetails;