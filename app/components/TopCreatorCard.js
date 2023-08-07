import Image from 'next/image'
import React from 'react'
import avtar1 from "@/public/Avatar1.png"
import data from '@/data/TopCreatorData'

const TopCreatorCard = () => {


    return (
        data.map((item, index) => (

            <div key={item.id} className='col-span-1 bg-black h-[340px] w-[340px] rounded-2xl bg-opacity-20 flex justify-center items-center flex-col relative gap-3 cursor-pointer'>
                <div className='absolute bg-[#2b2b2b]  text-[#858584] h-[40px] w-[40px] rounded-full top-5 left-5 flex items-center justify-center'>
                    {item.id}
                </div>
                <div>
                    <Image className='object-contain h-[180px] w-[180px]' src={item.img} alt='avtar' />
                </div>
                <div className=''>
                    <h5 className='text-2xl font-semibold text-white'>{item.heading}</h5>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-base font-normal text-[#858584]'>Total Sales:</span>
                    <span className='text-base font-normal text-white'>34.53 ETH</span>
                </div>
            </div>
        ))
    )
}

export default TopCreatorCard
