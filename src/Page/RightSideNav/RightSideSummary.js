import React from 'react';
import { Link } from 'react-router-dom';

const RightSideSummary = ({catagory}) => {
    // console.log(catagory);
    const {id, name} = catagory;
    return (
        <div>
            <div className='ms-5'>
                <Link className='fw-bold fs-3' to={`/catagory/${id}`}>{name}</Link>
            </div>
        </div>
    );
};

export default RightSideSummary;