import React, { useState } from 'react';
import lemonhive from '../media/Images/lemon-hive.jpeg'
import mediaus from '../media/Images/mediaus ware.jpeg'
import ItCompany from '../Components/ItCompany';
import Jobs from '../Components/jobs'
import meta from '../media/Images/meta.png';
import ReactPlayer from 'react-player';
import morshed from '../media/Images/mdgolam_morshed.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Accordian from '../Components/Accordian';



const Home = () => {
    const [activeRoute, setActiveRoute] = useState('all')


    return (
        <>
            {/* job section  */}
            <div className='mt-14 flex justify-end gap-4'>
                <button onClick={() => setActiveRoute('all')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute === 'all' ? 'bg-green-600 text-white' : ""} `} >All Jobs</button>
                <button onClick={() => setActiveRoute('fresher')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute === 'fresher' && 'bg-green-600 text-white'} `} >Fresher Jobs</button>
                <button onClick={() => setActiveRoute('experience')} className={`px-6 py-2 bg-white border shadow-md  font-medium rounded-md ${activeRoute === 'experience' && 'bg-green-600 text-white'} `}  >Experience Jobs</button>
            </div>
            <div>
                {activeRoute === 'all' && (
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        <Jobs
                            companyLogo={meta}
                            companyName='Meta Ltd.'
                            email='meta@gmail.com'
                            location='New York,America'
                            phoneNumber='+8801991394353'
                            title='Reactjs Developer'
                        />
                        <Jobs
                            companyLogo={meta}
                            companyName='Meta Ltd.'
                            email='meta@gmail.com'
                            location='New York,America'
                            phoneNumber='+8801991394353'
                            title='Reactjs Developer'
                        />
                        <Jobs
                            companyLogo={meta}
                            companyName='Meta Ltd.'
                            email='meta@gmail.com'
                            location='New York,America'
                            phoneNumber='+8801991394353'
                            title='Reactjs Developer'
                        />

                    </div>
                )}
                {activeRoute === 'fresher' && (
                    <div>
                        fresher
                    </div>
                )}
                {activeRoute === 'experience' && (
                    <div>
                        experience
                    </div>
                )}
            </div>

            {/* top it comapny section  */}

            <div className='mt-14 '>
                <h2 className='text-3xl font-bold '>Top IT Company of Bangladesh</h2>
                <div className='grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <ItCompany
                        companyName='Lemon Hive'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
                        imagesrc={lemonhive}
                    />
                    <ItCompany
                        companyName='Lemon Hive'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
                        imagesrc={mediaus}
                    />
                    <ItCompany
                        companyName='Lemon Hive'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
                        imagesrc={lemonhive}
                    />
                </div>
            </div>

            {/* My Profile section  */}

            <div className='mt-14'>
                <div className='flex justify-center items-center'>
                    <img className='w-48 h-48 p-4 bg-gray-600 shadow-2xl mb-4 rounded-full' src={morshed} alt="" />
                </div>
                <h3 className='text-gray-900 text-1xl font-bold text-center'>Md.Golam Morshed</h3>
                <p className='font-semibold text-1xl text-center text-gray-600'>Web Developer</p>
                <p className='font-semibold text-1xl text-center text-gray-600 '>video Resume </p>
                <div className='flex justify-center mt-6 mb-6 items-center'>
                    <span className='move'>
                        <AiOutlineArrowDown size={34} />
                    </span>
                </div>

                <div className='flex xl:gap-12 md:gap-6 gap-4 mt-2 '>
                    <div className='flex flex-col gap-4 '>
                        <Link to='https://www.facebook.com/morshed0099/'><BsFacebook className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
                        <Link to='https://www.youtube.com/channel/UCLQGk6b6p1z-zV6bHC2zcJA'> <BsYoutube className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
                        <Link to='https://www.linkedin.com/in/md-goalm-morshed/'> <BsLinkedin className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
                        <Link to='https://github.com/morshed0099'> <BsGithub className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
                    </div>
                    <div className='flex-1'>
                        <ReactPlayer width={``} controls={true} url='https://youtu.be/JhuOCpT6Fyw' />
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <h2 className='text-2xl font-bold mb-6'>Some Uesfull MERN stack question and answer</h2>
            <Accordian 
             title='What is React'
             isactive
             answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
            />
            <Accordian 
             title='What is React'
             answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
            />
            <Accordian 
             title='What is React'
             answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat doloribus velit et ratione quaerat porro autem quia iure quibusdam corporis, sint, animi neque quasi consectetur eveniet atque aliquid repudiandae!'
            />
            </div>
           
            
        </>
    );
};

export default Home;