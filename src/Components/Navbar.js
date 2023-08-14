import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [toggale, setToggle] = useState(false)



    return (
        <div className='lg:shadow-md z-50 bg-white h-[80px] sticky top-0 py-4'>
            <nav className='container  mx-auto'>
                <div className='hidden  lg:flex justify-between items-center '>
                    <div>
                        <h2 className='text-2xl font-bold text-green-600'>Job Protal</h2>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <NavLink className={`isactive ?"active":"" `} to='/'>Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink  to='/contact '>Contact Us</NavLink>
                        <NavLink  to='/signin'>SignIn</NavLink>
                    </div>
                </div>

                {/* fot small device  */}

                <div className='lg:hidden z-50 block'>
                    <div>
                        <GiHamburgerMenu onClick={()=>setToggle(!toggale)} size={24} color='green' className='hover:opacity-75 transition w-10 h-10 p-2 rounded-full shadow-md ' />
                    </div>
                    <div className={`flex gap-4 z-50 flex-col duration-500 ease-linear   py-8 left-0  w-full bg-gray-700 items-center absolute ${ !toggale ? "top-[-300px]":'top-[0px] min-h-screen' }`}>
                        <div>
                            <h2 className='text-2xl font-bold text-green-600'>Job Protal</h2>
                        </div>
                        <div className='absolute right-5'>
                            <button onClick={()=>setToggle(false)} className='w-10 h-10 rounded-full bg-gray-900 shadow-md hover:opacity-75 transition text-white'> x</button>
                        </div>
                        <div className='flex  flex-col text-black  gap-4'>
                            <NavLink onClick={()=>setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/'>Home</NavLink>
                            <NavLink onClick={()=>setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/about'>About Us</NavLink>
                            <NavLink onClick={()=>setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/contact '>Contact Us</NavLink>
                            <NavLink onClick={()=>setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/signin'>SignIn</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;