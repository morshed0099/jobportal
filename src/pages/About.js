import React from 'react';
import morserd from '../media/Images/mdgolam_morshed.jpg';
import backgroun from '../media/Images/backgorund.jpg'
import SocialMediaLink from '../Components/SocialMediaLink';

const About = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${backgroun})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '40vh',

            }} className='relative'>
                <div className='absolute bg-opacity-60 bg-green-900 w-full h-full'></div>
                <div className='absolute w-full h-full '>
                    <h2 className='text-white text-3xl lg:mt-8 mt-2 font-bold text-center '>About Us</h2>
                    <p className='text-2xl p-2 text-white text-center font-bold'>we belive that we can do that</p>
                </div>
            </div>
            <div className='container mx-auto'>

                <div>
                    <h2 className='text-2xl font-bold text-center mt-12 mb-4 '> Meet Our Ceo </h2>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 p-4'>
                        <div className='w-full lg:W-1/2'>
                            <img className='rounded-2xl md:mt-0 lg:mt-[-60px]' src={morserd} alt="" />
                        </div>
                        <div className='lg:w-full '>
                            <h4>

                            </h4>
                            <p className='text-justify'>
                                It is with great pleasure and excitement that I stand before you as the CEO of job potal, a beacon of innovation in the dynamic world of software solutions. Our journey has been one of relentless dedication to pushing boundaries and driving progress.


                                Our success is rooted in a commitment to excellence, a commitment that drives us to deliver solutions that not only meet but exceed expectations. We thrive on challenges, viewing each obstacle as an opportunity to innovate and create something remarkable. Our passion for innovation has fueled our growth, and we remain steadfast in our pursuit of excellence.


                                As we move forward, we embrace the future with open arms, ready to embrace new technologies, navigate uncharted territories, and create solutions that redefine industries. Together, we will continue to shape the landscape of software innovation and drive positive change.

                                Thank you for your unwavering support and trust in [Company Name]. Together, we will continue to script a story of innovation, growth, and success.

                                Thank you.
                            </p>
                            <h2 className='text-2xl font-bold mt-8'>Follow Me</h2>
                            <div className='flex gap-4 mt-8'>

                                <SocialMediaLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;