import React from 'react'
import HowitworkCard from './HowitworkCard'
import Image from 'next/image'
import uparr from "@/public/uparr.svg"
import downarr from "@/public/downarr.svg"

const HowItWork = () => {
    return (
        <div className=''>
            <div>
                <h1 className='text-white text-4xl font-semibold capitalize'>
                    How it works
                </h1>
                <h5 className='text-white text-xl font-normal capitalize mt-4'>
                    Find out how to get started
                </h5>
            </div>
            <div className=' mt-12 flex justify-between items-center gap-4 relative'>
                <Image src={uparr} alt='icon' className='absolute left-[22%] w-[240px] top-4' />
                <HowitworkCard />
                <Image src={downarr} alt='icon' className='absolute right-[22%] w-[240px] bottom-4' />
            </div>

        </div>
    )
}

export default HowItWork
