import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Check = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div className='m-5 border p-3'>
            <h1 className='text-primary'>Thank You For Check Up</h1>
            <p className='text-secondary'>Your Email is: {user?.email}</p>
        </div>
    );
};

export default Check;