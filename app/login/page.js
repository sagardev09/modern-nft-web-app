"use client"
import React from 'react'
import Image from 'next/image'

const LoginPage = () => {
    return (
        <div className='mt-4 h-full w-full'>
            <div className='flex gap-8'>
                <div className='flex-1'>
                    <Image className='object-contain' src={"/login.png"} alt='login' width={1000} height={500} />
                </div>
                <div className='flex-1 p-12 flex flex-col gap-4 justify-center items-start'>
                    <h1 className='capitalize text-[51px] text-white font-semibold tracking-wide'>Create account</h1>
                    <h5 className='text-2xl mt-6 font-normal text-white w-[550px] capitalize tracking-wider'>Welcome! enter your details and start creating, collecting and selling NFTs.</h5>
                    <div className='w-full relative mt-8'>
                        <Image src={"/user1.svg"} alt='user' width={16} height={16} className='absolute left-[10px] cursor-pointer top-[14px]' />
                        <input type="text" className='py-4 px-8 h-[46px] w-[360px] rounded-2xl text-sm font-normal focus:outline-none bg-gray-500 bg-opacity-50' placeholder='Username' />
                    </div>
                    <div className='w-full relative'>
                        <Image src={"/mail.svg"} alt='user' width={16} height={16} className='absolute left-[10px] cursor-pointer top-[14px]' />
                        <input type="text" className='py-4 px-8 h-[46px] w-[360px] rounded-2xl text-sm font-normal focus:outline-none  bg-gray-500 bg-opacity-50' placeholder='Email Address' />
                    </div>
                    <div className='w-full relative'>
                        <Image src={"/password.svg"} alt='user' width={16} height={16} className='absolute left-[10px] cursor-pointer top-[14px]' />
                        <input type="text" className='py-4 px-8 h-[46px] w-[360px] rounded-2xl text-sm font-normal focus:outline-none  bg-gray-500 bg-opacity-50' placeholder='Password' />
                    </div>
                    <div className='w-full relative'>
                        <Image src={"/password.svg"} alt='user' width={16} height={16} className='absolute left-[10px] cursor-pointer top-[14px]' />
                        <input type="text" className='py-4 px-8 h-[46px] w-[360px] rounded-2xl text-sm font-normal focus:outline-none  bg-gray-500 bg-opacity-50' placeholder='Confirm Password' />
                    </div>
                    <button className='bg-purple-600 w-[360px] p-3 text-white font-semibold rounded-2xl mt-8'>Create account</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
