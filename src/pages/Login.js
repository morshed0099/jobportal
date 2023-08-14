import React, { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { user, loginUserWithEmail } = useContext(userAuth)
    const [loader, setLoader] = useState(false)

    const handelsubmit = (event) => {
        setLoader(true)
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        loginUserWithEmail(email, password)
            .then((result) => {
                const user = result.user
                toast.success('login successfully !!')
                form.reset()
                setLoader(false)
            }).catch((error) => {
                console.log(error)
                toast.error(error.message)
                setLoader(false)
            })

    }
    return (
        <div className='mt-12 flex flex-col gap-8 p-4 mx-auto lg:w-[40%] md:w-[70%] sm:w-[90%] '>
            <h2 className='text-3xl font-bold'>Login From </h2>
            <form onSubmit={handelsubmit}>
                <div className='flex mb-8  w-full relative'>
                    <AiOutlineMail size={24} className='text-green-600 absolute ' />
                    <input name='email' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your Email' type='text' />
                </div>
                <div className='flex mb-8 w-full relative'>
                    <RiLockPasswordFill size={24} className='text-green-600 absolute ' />
                    <input name='password' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your password' type='password' />
                </div>
                <button className='w-full rounded-full border px-4 py-2 bg-green-600 hover:opacity-75 transition text-white font-semibold'>{
                    loader ? 'Please Wait' : 'Login'
                }</button>
            </form>
            <div>
                <span className='text-gray-800'>Are You New Create an Account ? </span> <Link to='/signin'><span className='text-black font-semibold hover:underline cursor-pointer'>SignIn</span></Link>
            </div>
        </div>
    );
};

export default Login;