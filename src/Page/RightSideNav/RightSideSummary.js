import React from 'react';
import { Link } from 'react-router-dom';

const RightSideSummary = ({catagory}) => {
    // console.log(catagory);
    const {id, name} = catagory;
    return (
        <div>
            <div>
            <Link to={`/catagory/${id}`}>{name}</Link>
        </div>
        </div>
    );
};

export default RightSideSummary;