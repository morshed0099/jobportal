import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const PostAjob = () => {

    const [cate, setCategory] = useState('')
    const [category, setCat] = useState([])
    const [loader, setLoader] = useState(false)
    const { user } = useContext(userAuth)


    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCat(data)
            })
    }, [])
    const handelSubmit = (event) => {
        setLoader(true)
        event.preventDefault()
        const form = event.target
        const jobTitle = form.jobTitle.value
        const email = form.email.value
        const location = form.location.value
        const conpanyName = form.conpanyName.value
        const phoneNumber = form.phoneNumber.value
        const description = form.description.value
        const category = cate
        const r1 = form.r1.value
        const r9 = form.r9.value
        const r2 = form.r2.value
        const r3 = form.r3.value
        const r4 = form.r4.value
        const r5 = form.r5.value
        const r6 = form.r6.value
        const r7 = form.r7.value
        const r8 = form.r8.value
        const responsibilities = [r1, r2, r3, r4, r5, r6, r7, r8, r9]
        const image = form.image.files[0];

        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const logo = (data.data.display_url);
                const job = {
                    jobTitle,
                    logo,
                    email,
                    location,
                    conpanyName,
                    phoneNumber,
                    description,
                    category,
                    responsibilities,
                    userEmail: user?.email,
                    userName: user?.name,
                }
                fetch('http://localhost:5000/jobs', {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(job)
                }).then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('job created successfully !!')
                            setLoader(false)
                            form.reset()
                        } else {
                            setLoader(false)
                        }
                    })
            })


    }
    return (
        <div className='container mt-14 mx-auto'>
            <Link to='/'> <span className='flex mb-8 cursor-pointer hover:underline '>  <AiOutlineArrowLeft size={24} /> Back </span>   </Link>
            <h2 className='text-3xl font-bold text-center mt-4 mb-6'>Post Your Job </h2>

            <form onSubmit={handelSubmit}>
                <div className='flex w-full  xl:mb-8 md:mb-6 mb-4  relative'>
                    <CgProfile size={24} className='text-green-600 absolute ' />
                    <input required name='jobTitle' className='outline-none w-full px-8 focus:outline-none border-b-2 border-b-black' placeholder='Your Job title' type='text' />
                </div>
                <div className='flex  xl:mb-8 md:mb-6 mb-4 w-full relative'>
                    <AiOutlineMail size={24} className='text-green-600 absolute ' />
                    <input required name='email' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your Email' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>
                    <RiLockPasswordFill size={24} className='text-green-600 absolute ' />
                    <input required name='location' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your Location' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='conpanyName' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your CompanyName' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='phoneNumber' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your Phone Number' type='text' />
                </div>
                <div>
                    <textarea required name='description' placeholder='type short desctipion ' className='w-full p-2 border'>

                    </textarea>
                </div>
                <select required onChange={(e) => setCategory(e.target.value)} className='p-2 border mt-4 mb-4 rounded-md' name="" id="">
                    <option selected disabled>Choose Job category</option>
                    {
                        category.map(cat => <option>{cat.categoryName}</option>)
                    }
                </select>
                <div className='xl:mb-8 md:mb-6 mt-4 mb-4'>
                    <input name='image' type="file" />
                </div>
                <h2 className='text-2xl font-bold mt-4 mb-4'>Responsibility and Requirments :</h2>

                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r2' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>

                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r3' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input name='r4' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r5' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input name='r1' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r6' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input name='r7' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r8' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>
                <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>

                    <input required name='r9' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your responsibility ' type='text' />
                </div>

                <button className='px4 py-3 rounded-full bg-green-500 w-full hover:opacity-75 font-semibold
          text-white'>{
                        loader ? 'Please wait' : 'Save'
                    }</button>
            </form>
        </div>
    );
};

export default PostAjob;