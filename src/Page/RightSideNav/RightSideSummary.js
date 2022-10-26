import React from 'react';
import { Link } from 'react-router-dom';

const RightSideSummary = ({catagory}) => {
    console.log(catagory);
    const {name} = catagory;
    return (
        <div>
            <div>
            <Link to='/faq/:id'>{name}</Link>
        </div>
        </div>
    );
};

export default RightSideSummary;