import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto min-h-[400px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;