import React, { useState } from 'react';
import lemonhive from '../media/Images/lemon-hive.jpeg'
import mediaus from '../media/Images/mediaus ware.jpeg'
import ItCompany from '../Components/ItCompany';
import Jobs from '../Components/jobs'
import meta from '../media/Images/meta.png';


const Home = () => {
    const [activeRoute, setActiveRoute] = useState('all')

    return (
        <>
            {/* job section  */}
            <div className='mt-14 flex justify-end gap-4'>
                <button onClick={()=> setActiveRoute('all')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute ==='all' ? 'bg-green-600 text-white':""} `} >All Jobs</button>
                <button onClick={()=> setActiveRoute('fresher')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute ==='fresher' && 'bg-green-600 text-white'} `} >Fresher Jobs</button>
                <button onClick={()=> setActiveRoute('experience')} className={`px-6 py-2 bg-white border shadow-md  font-medium rounded-md ${activeRoute ==='experience' && 'bg-green-600 text-white'} `}  >Experience Jobs</button>
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
        </>
    );
};

export default Home;