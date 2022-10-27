import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Course = () => {

    const details = useLoaderData();
    return (
        <div className='mt-4 row'>
            {
                details.map(detail => <CourseDetails key={detail.id} detail={detail}></CourseDetails>)
            }
        </div>
    );
};

export default Course;