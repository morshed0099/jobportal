import React, { useEffect, useState } from 'react';


import ItCompany from '../Components/ItCompany';
import Jobs from '../Components/Jobs'

import ReactPlayer from 'react-player';
import morshed from '../media/Images/mdgolam_morshed.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai';
import backgorun from '../media/Images/backgorund.jpg'
import Accordian from '../Components/Accordian';
import SocialMediaLink from '../Components/SocialMediaLink';
import { Link } from 'react-router-dom';
import Projects from '../Components/Projects';



const Home = () => {
    const [activeRoute, setActiveRoute] = useState('')
    const [jobSeecker, setJobSeecker] = useState(true)
    const [category, setCategory] = useState([])
    const [alljob, setAlljob] = useState([])
    const [loader, setLoader] = useState(false)
    const [it, setIt] = useState([])

    const handelToggle = () => {
        setJobSeecker(false)
    }
    const handelToggle2 = () => {
        setJobSeecker(true)
    }

    useEffect(() => {
        fetch('https://jobportal-sarver.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])

    useEffect(() => {
        setLoader(true)
        fetch(`https://jobportal-sarver.vercel.app/jobs/?categoyname=${activeRoute}`)
            .then(res => res.json())
            .then(data => {
                setAlljob(data)
                setLoader(false)
            })
    }, [activeRoute])

    useEffect(() => {
        fetch('https://jobportal-sarver.vercel.app/it')
            .then(res => res.json())
            .then(data => setIt(data))
    }, [])
    const handelCategory = (e) => {
        setActiveRoute(e.target.value)

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
                <div  className='flex justify-center top-12 lg:top-56 items-center relative '>
                    <button data-aos="fade-up" onClick={handelToggle2} className={` px-8 py-4  font-semibold rounded-s-full lg:text-2xl text-1xl  hover:bg-green-600    duration-1000 border ${jobSeecker ? "bg-green-600 text-white" : "text-white"}`}>Job Seecker </button>
                    <Link to='/postajob'><button onClick={handelToggle} className={`px-8 py-4  font-semibold rounded-e-full duration-1000 border lg:text-2xl text-1xl hover:bg-green-600   ${jobSeecker ? "text-white" : "bg-green-600 text-white "}`}>Post a Job </button></Link>
                </div>
                <div className='flex flex-col justify-center mt-5 top-12 lg:top-64 items-center relative '>
                    <p className='text-white'>Job portal is a side for find your drem job</p>
                    <p className='text-green-600 font-bold mt-4 text-2xl '>Connented With Us</p>
                    <div data-aos="fade-up" className='flex mt-8  gap-4 '>
                        <SocialMediaLink />
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>

                {/* category buton  */}


                <div className='flex justify-end gap-4 mt-14'>
                    {
                        category.map(cat => <button key={cat.category_id} onClick={(e) => handelCategory(e)} className={`${activeRoute === cat.categoryName ? "px-4 py-3 bg-green-500 rounded-2xl text-white font-bold" : "px-4 border  py-3 rounded-2xl bg-white font-bold"}`} value={cat.categoryName}>{cat.categoryName}</button>)
                    }
                </div>


                {/* all jobs          */}

                <div className='grid xl:grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {
                        loader && <h1 className='text-2xl mt-8 font-bold text-green-500 text-center'>Please wait </h1>
                    }
                    {
                        alljob.map(job => <Jobs 
                            companyLogo={job.logo}
                            companyName={job.conpanyName}
                            email={job.email}
                            location={job.location}
                            title={job.jobTitle}
                            key={job._id}
                            id={job._id}
                            phoneNumber={job.phoneNumber}
                        >

                        </Jobs>)
                    }
                </div>
                <div className='mt-8 flex justify-end'>
                    <Link to='/alljobs'> <button className='text-1xl text-white font-bold mt-8 px-4 py-3 bg-green-500 hover:opacity-75 transition rounded-2xl '>See All Jobs</button></Link>
                </div>
                {/* top it comapny section  */}

                <div className='mt-28 '>
                    <h2 className='text-3xl font-bold text-center'>Top IT Company of Bangladesh</h2>
                    <div className='grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                        {
                            it.map(i => <ItCompany
                                companyName={i.comapany_name}
                                description={i.description}
                                imagesrc={i.image}
                                key={i._id}
                                id={i._id}
                            />)
                        }


                    </div>
                </div>

                {/* My Profile section  */}

                <div data-aos="fade-up" className='mt-28'>
                    <div className='flex justify-center items-center'>
                        <img className='w-48 h-48 p-4 bg-gray-600 shadow-2xl mb-4 rounded-full' src={morshed} alt="" />
                    </div>
                    <h3 className='text-gray-900 text-1xl font-bold text-center'>Md.Golam Morshed</h3>
                    <p className='font-semibold text-1xl text-center text-gray-600'>Web Developer</p>
                    <p className='font-semibold text-1xl text-center text-gray-600 '>video Resume </p>

                    {/* social media link for small device  */}
                    <div data-aos="fade-up" className='lg:hidden gap-4 justify-center items-center mt-4 flex flex-row'>
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
                {/* some project  */}
                <div className='mt-28 mb-4'>
                    <h2 className='text-3xl font-bold text-center'>Some of My Project</h2>
                </div>
                <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <Projects
                        image='https://i.ibb.co/VTb5tRJ/Web-capture-12-12-2022-17546-sell-phone-d2784-web-app.jpg'
                        descripion='Details: Sell Phone is site for sell old used phone and also buye phone

                     * firebase authentication apply for login and sign up
                     
                     * user can login as a buyer or seller
                     
                     * for paid system use srtipe'
                        link1='https://github.com/morshed0099/sell-phone-client'
                        link2='https://sell-phone-d2784.web.app/'
                    />
                    <Projects
                        image='https://i.ibb.co/jr5ffVV/Web-capture-12-12-2022-17511-learn-programing-cbb02-web-app.jpg'
                        descripion='Details: Learn Programming is a site for tutorial publish free and also paid

                     * firebase authentication apply for login and sign up
                     
                     * user after login get premium access and also download information
                     
                     * user choose their tutorial very eassily from tutorial category'
                        link1='https://github.com/morshed0099/learn-programing-'
                        link2='https://learn-programing-cbb02.web.app/'
                    />
                    <Projects
                        image='https://i.ibb.co/HYQYrdH/Web-capture-12-12-2022-17218-your-photographer-e2b13-web-app.jpg'
                        descripion='Details: your photographer is a site for photographer

                     * firebase authentication apply for login and sign up
                     
                     * any one can upload photo and share it for client
                     
                     * photogaraphe site user also commented another post and delete comment and updata also'
                        link1='https://github.com/morshed0099/your-photograper-client'
                        link2='https://your-photographer-e2b13.web.app/'
                    />

                </div>
                <div className='mt-28'>
                    <h2 className='text-3xl text-center font-bold mb-6'>Some Uesfull MERN stack question and answer</h2>
                    <Accordian
                        title='What is React'
                        isactive
                        answer='React, often referred to as React.js or ReactJS, is an open-source JavaScript library developed by Facebook. It is widely used for building user interfaces (UIs) for web applications and provides a way to efficiently create interactive and dynamic front-end experiences.'
                    />
                    <Accordian
                        title='What is cors'
                        answer='CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented in web browsers that allows or restricts web pages hosted on different domains from making requests to each other resources (such as APIs, fonts, or images). CORS is a crucial mechanism that helps prevent unauthorized or malicious actions that could compromise the security and integrity of web applications.'
                    />
                    <Accordian
                        title='what is nodejs'
                        answer='
                        Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build and run web applications on the server using JavaScript. It was created by Ryan Dahl and first released in 2009. Node.js is designed to be efficient and lightweight, making it well-suited for building scalable and real-time applications.'
                    />
                    <Accordian
                        title='Expalin event loop'
                        answer='                        
                        The event loop is a fundamental concept in asynchronous programming, particularly in environments like Node.js or web browsers, where non-blocking I/O operations are prevalent. Its the mechanism that allows a single-threaded program to handle multiple concurrent operations without getting blocked or slowed down by waiting for individual tasks to complete.'
                    />
                    <Accordian
                        title='How does react work'
                        answer='React simplifies the process of building UIs by providing a structured approach, efficient updates through the virtual DOM, and a focus on reusable components. Its architecture promotes a clear separation of concerns and enhances the development of interactive and dynamic web applications'
                    />
                </div>


            </div>
        </>

    );
};

export default Home;