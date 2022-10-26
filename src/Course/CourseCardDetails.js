import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardDetailsSummery from './CourseCardDetailsSummery';

const CourseCardDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    return (
        <div>
            <h1>This is course card details: {details.length}</h1>
            {
                details.map(detail => <CourseCardDetailsSummery key={detail._id} detail={detail}></CourseCardDetailsSummery>)
            }
        </div>
    );
};

export default CourseCardDetails;