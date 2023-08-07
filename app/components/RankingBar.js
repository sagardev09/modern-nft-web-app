import React from 'react'
import RankingData from '@/data/RankingData'
import Image from 'next/image'

const RankingBar = () => {
    const data = RankingData
    return (
        data.map((item, index) => (
            <div key={index} className='w-[100%] grid grid-cols-12 bg-[#3B3B3B]  p-4 text-gray-300  text-left rounded-2xl my-6  cursor-pointer '>
                <div className='col-span-1 flex items-center '>
                    <div className=' flex items-center justify-center w-[30px] h-[30px] bg-black rounded-full bg-opacity-40 text-zinc-300 '>
                        <span className='text-base font-normal'>{index + 1}</span>
                    </div>
                </div>
                <div className='col-span-5  flex items-center  gap-3 '>
                    <Image src={item.img} alt='img' className='rounded-full h-[50px] w-[50px] object-cover' />
                    <span className='text-xl font-normal tracking-widest text-white'>{item.heading}</span>
                </div>
                <div className=' col-span-2  flex items-center'>
                    <span className='text-base font-normal tracking-widest text-[#00AC4F]'>+1.41%</span>
                </div>
                <div className=' col-span-2  flex items-center'>
                    <span className='text-base font-normal tracking-widest'>602</span>
                </div>
                <div className=' col-span-2  flex items-center'>
                    <span className='text-base font-normal tracking-widest'>12.4 ETH</span>
                </div>
            </div>
        ))
    )
}

export default RankingBar
