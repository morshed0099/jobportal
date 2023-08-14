import React, { useState } from 'react';
import lemonhive from '../media/Images/lemon-hive.jpeg'
import mediaus from '../media/Images/mediaus ware.jpeg'
import ItCompany from '../Components/ItCompany';
import Jobs from '../Components/jobs'
import meta from '../media/Images/meta.png';
import ReactPlayer from 'react-player';
import morshed from '../media/Images/mdgolam_morshed.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai';
import backgorun from '../media/Images/backgorund.jpg'
import Accordian from '../Components/Accordian';
import SocialMediaLink from '../Components/SocialMediaLink';



const Home = () => {
    const [activeRoute, setActiveRoute] = useState('all')
    const [jobSeecker, setJobSeecker] = useState(true)

    const handelToggle = () => {
        setJobSeecker(false)
    }
    const handelToggle2 = () => {
        setJobSeecker(true)
    }
    return (
        <>
            <div className='relative' style={{
                backgroundImage: `url(${backgorun})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'


            }}>
                <div className='absolute w-full h-full bg-black bg-opacity-75'></div>
                <div className='flex justify-center top-4 lg:top-56 items-center relative '>
                    <button onClick={handelToggle2} className={` px-8 py-4  font-semibold rounded-s-full lg:text-2xl text-1xl duration-1000 border ${jobSeecker ? "bg-green-600 text-white" : "text-white"}`}>Job Seecker </button>
                    <button onClick={handelToggle} className={`px-8 py-4  font-semibold rounded-e-full duration-1000 border lg:text-2xl text-1xl  ${jobSeecker ? "text-white" : "bg-green-600 text-white "}`}>Post a Job </button>
                </div>
                <div className='flex flex-col justify-center mt-5 top-4 lg:top-64 items-center relative '>
                    <p className='text-white'>Job portal is a side for find your drem job</p>
                    <p className='text-green-600 font-bold mt-4 text-2xl '>Connented With Us</p>
                    <div className='flex mt-4  gap-4 '>
                        <SocialMediaLink />
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>

                {/* job section  */}
                <div className='mt-14  flex justify-end gap-4'>
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

                <div className='mt-28 '>
                    <h2 className='text-3xl font-bold text-center'>Top IT Company of Bangladesh</h2>
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

                <div className='mt-28'>
                    <div className='flex justify-center items-center'>
                        <img className='w-48 h-48 p-4 bg-gray-600 shadow-2xl mb-4 rounded-full' src={morshed} alt="" />
                    </div>
                    <h3 className='text-gray-900 text-1xl font-bold text-center'>Md.Golam Morshed</h3>
                    <p className='font-semibold text-1xl text-center text-gray-600'>Web Developer</p>
                    <p className='font-semibold text-1xl text-center text-gray-600 '>video Resume </p>

                    {/* social media link for small device  */}
                    <div className='lg:hidden gap-4 justify-center items-center mt-4 flex flex-row'>
                      <SocialMediaLink />
                    </div>
                    <div className='flex justify-center mt-6 mb-6 items-center'>
                        <span className='move'>
                            <AiOutlineArrowDown size={34} />
                        </span>
                    </div>

                    <div className='flex xl:gap-12 md:gap-6 gap-4 mt-2 '>
                        <div className='lg:flex lg:flex-col hidden gap-4 '>
                            
                            {/* social medial link for large device  */}
                           <SocialMediaLink />
                        </div>
                        <div className='flex-1'>
                            <ReactPlayer width={``} controls={true} url='https://youtu.be/JhuOCpT6Fyw' />
                        </div>
                    </div>
                </div>
                <div className='mt-28'>
                    <h2 className='text-3xl text-center font-bold mb-6'>Some Uesfull MERN stack question and answer</h2>
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


            </div>
        </>

    );
};

export default Home;