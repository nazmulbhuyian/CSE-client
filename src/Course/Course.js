import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Course = () => {

    const details = useLoaderData();
    return (
        <div>
            <h1>This is Home: {details.length}</h1>
            {
                details.map(detail => <CourseDetails key={detail.id} detail={detail}></CourseDetails>)
            }
        </div>
    );
};

export default Course;