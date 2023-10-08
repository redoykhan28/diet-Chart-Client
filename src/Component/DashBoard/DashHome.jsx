import React, { useContext } from 'react';
import image from '../../assets/Screenshot_3.png'
import { authProvider } from '../../Context/AuthContext';

const DashHome = () => {
    const { user } = useContext(authProvider)
    return (
        <div>
            <img src={image} className='w-80 mt-40 mx-auto animate-bounce ' alt="Dashboard" />
            <h1 className='text-5xl capitalize text-[#EB5C31] font-bold font-mono mt-12'>Welcome {user?.displayName} </h1>
        </div>
    );
};

export default DashHome;