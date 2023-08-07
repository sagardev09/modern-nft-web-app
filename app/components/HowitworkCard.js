import React from 'react'
import data from '@/data/howitworkdata'
import Image from 'next/image'

const HowitworkCard = () => {
    return (
        data.map((item, index) => (
            <div key={index} className=' flex flex-col gap-8 p-8 justify-center items-center w-[330px]  h-[500px] bg-black rounded-3xl bg-opacity-30 text-white'>
                <div>
                    <Image className='h-[100px] w-[100px] object-cover' alt='img' src={item.mainImg} />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold tracking-widest'>{item.heading}</h1>
                </div>
                <div>
                    <h5 className='text-center text-base font-normal'>{item.title}</h5>
                </div>
            </div>
        ))
    )
}

export default HowitworkCard
