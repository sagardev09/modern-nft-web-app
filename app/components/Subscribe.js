import React from 'react'
import img from "@/public/astro.png"
import Image from 'next/image'
import mail from "@/public/mail.svg"

const Subscribe = () => {
    return (
        <div className='mt-44 p-20 bg-black bg-opacity-30 w-full h-[470px] rounded-3xl flex'>
            <div className='flex-1'>
                <Image src={img} className='object-contain' alt='img' />
            </div>
            <div className='flex-1 flex flex-col gap-4 justify-between'>
                <h1 className='text-white text-5xl font-bold w-[450px]'>Join our weekly digest</h1>
                <h5 className='text-white text-2xl font-normal w-[450px]'>Get exclusive promotions & updates straight to your inbox.</h5>
                <div className='flex relative w-fit' >
                    <input type="text" name="" id="" placeholder='Enter your email here' className='px-8 py-4 rounded-2xl focus:outline-none text-sm w-[450px]' />
                    <button className='flex px-8 py-4  bg-purple-600 rounded-2xl absolute right-0 text-sm gap-3 text-white'>
                        <Image src={mail} alt='icon' />
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
