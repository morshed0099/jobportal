import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { userAuth } from '../AuthProvider/AuthProvider';
import { AiFillAccountBook } from 'react-icons/ai';
import ScrollToTop from '../hooks/ScrollTop';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [toggale, setToggle] = useState(false)
    const { user, logOut } = useContext(userAuth)

    const handelLogout = () => {
        logOut()
            .then((result) => {
                console.log(result)
                toast.success('logut')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='lg:shadow-md z-50 bg-white h-[80px] sticky top-0 py-4'>
            <nav className='container  mx-auto'>
                <div className='hidden  lg:flex justify-between items-center '>
                    <div>
                        <Link to='/'>
                            <div className='flex gap-2'>
                                <AiFillAccountBook size={24} className='text-green-600 mt-1' /> <h2 className='text-2xl font-bold text-green-600'>Job Protal</h2>
                            </div>
                        </Link>
                        <i className='ml-8 font-light'>Find you job</i>
                    </div>
                    <ScrollToTop >
                        <div className='flex flex-row mt-4 gap-4'>
                            <NavLink className={` isactive ?"active":" hover:text-green-600 " `} to='/'>Home</NavLink>
                            <NavLink className={` isactive ?"active":" hover:text-green-600 " `} to='/about'>About Us</NavLink>
                            <NavLink className={` isactive ?"active":" hover:text-green-600 " `} to='/contact '>Contact Us</NavLink>
                            {
                                user ? <button onClick={handelLogout} className='bg-white shadow-sm p-2 rounded-2xl mt-[-9px] hover:shadow-md'>Logout</button>
                                    :
                                    <NavLink to='/signin'>SignIn</NavLink>
                            }
                        </div>
                    </ScrollToTop>
                </div>

                {/* fot small device  */}

                <div className='lg:hidden z-50 block'>
                    <div>
                        <GiHamburgerMenu onClick={() => setToggle(!toggale)} size={24} color='green' className='hover:opacity-75 transition w-10 h-10 p-2 rounded-full shadow-md ' />
                    </div>
                    <div className={`flex gap-4 z-50 flex-col duration-500 ease-linear   py-8 left-0  w-full bg-gray-700 items-center absolute ${!toggale ? "top-[-300px]" : 'top-[0px] min-h-screen'}`}>
                        <div>
                            <h2 className='text-2xl font-bold text-green-600'>Job Protal</h2>
                        </div>
                        <div className='absolute right-5'>
                            <button onClick={() => setToggle(false)} className='w-10 h-10 rounded-full bg-gray-900 shadow-md hover:opacity-75 transition text-white'> x</button>
                        </div>
                        <ScrollToTop>
                            <div className='flex  flex-col text-black  gap-4'>
                                <NavLink onClick={() => setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/'>Home</NavLink>
                                <NavLink onClick={() => setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/about'>About Us</NavLink>
                                <NavLink onClick={() => setToggle(false)} className='hover:text-white duration-1000 transition hover:translate-x-2' to='/contact '>Contact Us</NavLink>
                                {
                                user ? <button onClick={handelLogout} className='bg-white shadow-sm p-2 rounded-2xl mt-[-9px] hover:shadow-md'>Logout</button>
                                    :
                                    <NavLink onClick={() => setToggle(false)} to='/signin'>SignIn</NavLink>
                            }
                            </div>
                        </ScrollToTop>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;