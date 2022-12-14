import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSideDetail from './RightSideDetail';

const RightSideDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {
                details.map(detail => <RightSideDetail detail={detail}></RightSideDetail>)
            }
        </div>
    );
};

export default RightSideDetails;