import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='container  mx-auto'>
                <div className='hidden lg:flex justify-between items-center '>
                    <div>
                        <h2 className='text-2xl font-bold text-green-600'>Job Protal</h2>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact '>Contact Us</NavLink>
                        <NavLink to='/signin'>SignIn</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;