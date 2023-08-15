import React from 'react';
import footerimg from '../media/Images/footer.png'
import SocialMediaLink from './SocialMediaLink';
import { NavLink } from 'react-router-dom';
import { BiMailSend, BiPhone, BiSolidLocationPlus } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-gray-200 w-full min-h-[200px] mt-12'>
            <div className='container mx-auto'

            >
                <div className='grid gap-6 py-6 pt-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1'>
                    <div>
                        <p className='text-2xl font-bold hover:translate-x-2 duration-700 hover:text-green-700'>Address</p>

                        <div className='flex gap-2 items-center mt-4'>
                            <BiSolidLocationPlus />
                            <p className='hover:translate-x-2 duration-700 hover:text-green-500 font-semibold'> Dhaka,Bangladesh</p>

                        </div>
                        <div className='flex gap-2 items-center mt-4'>
                            <BiPhone />
                            <p className='hover:translate-x-2 duration-700 hover:text-green-500 font-semibold'> +8801991394353</p>

                        </div>
                        <div className='flex gap-2 items-center mt-4'>
                            <BiMailSend />
                            <p className='hover:translate-x-2 duration-700 hover:text-green-500 font-semibold'>mdgolammorshed0099@gmail.com</p>

                        </div>

                    </div>
                    <div>
                        <p className='text-2xl font-bold hover:translate-x-2 duration-700 hover:text-green-700'>Quick Link</p>
                        <div className='flex  flex-col text-black mt-4 gap-4'>
                            <NavLink className='hover:text-green-500 font-semibold  duration-1000 transition hover:translate-x-2' to='/'>Home</NavLink>
                            <NavLink className='hover:text-green-500 font-semibold  duration-1000 transition hover:translate-x-2' to='/about'>About Us</NavLink>
                            <NavLink className='hover:text-green-500 font-semibold  duration-1000 transition hover:translate-x-2' to='/contact '>Contact Us</NavLink>
                            <NavLink className='hover:text-green-500 font-semibold  duration-1000 transition hover:translate-x-2' to='/signin'>SignIn</NavLink>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-bold hover:translate-x-2 duration-700 hover:text-green-700'>Social</p>
                        <div className='flex mt-4 gap-4 '>
                            <SocialMediaLink />

                        </div>
                        <div className='relative mt-8 lg:mb-0 mb-4'>
                            <input type="text" className='py-3 pr-2 w-full pl-[110px] text-black border-none rounded-full' />
                            <button className='px-4 rounded-full absolute overflow-hidden left-0 top-0 py-3 bg-green-800 text-white font-bold'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;