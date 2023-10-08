import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='z-20'>
                <Header></Header>
            </div>
            <div className='w-full -z-40 mt-[-40px] rounded-t-[50px] bg-white'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;