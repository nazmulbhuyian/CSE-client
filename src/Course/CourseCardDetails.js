import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardDetailsSummery from './CourseCardDetailsSummery';

const CourseCardDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    return (
        <div className='mb-5 mt-5'>
            {
                details.map(detail => <CourseCardDetailsSummery key={detail._id} detail={detail}></CourseCardDetailsSummery>)
            }
        </div>
    );
};

export default CourseCardDetails;