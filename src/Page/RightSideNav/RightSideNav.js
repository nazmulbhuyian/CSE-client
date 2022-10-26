import React, { useEffect, useState } from 'react';
import RightSideSummary from './RightSideSummary';

const RightSideNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/course')
        .then(res => res.json())
        .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h1>This is right side</h1>
            <div>
                {
                    catagories.map(catagory => <RightSideSummary key={catagory.id} catagory={catagory}></RightSideSummary>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;