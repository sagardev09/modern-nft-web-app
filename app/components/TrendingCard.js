import Image from 'next/image'
import React from 'react'
import avtar from "@/public/Avatar.png"
import data from '@/data/TrendingcardData'

const TrendingCard = () => {
    return (
        data.map((item, index) => (
            <div key={index} className='h-fit w-fit'>
                <Image src={item.mainImg} alt='img' className='object-contain' />
                <div className='flex justify-between mt-4'>
                    <Image className='object-contain' src={item.secondaryImg1} alt='img' />
                    <Image className='object-contain' src={item.secondaryImg2} alt='img' />
                    <div className='w-[100px] h-[100px] bg-purple-600 rounded-2xl flex justify-center items-center text-white text-xl font-medium cursor-pointer'>1025+</div>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <h5 className='text-white text-xl font-medium'>{item.heading}</h5>
                    <div className='flex items-center gap-2'>
                        <Image src={avtar} alt='avtar' />
                        <span className='text-white text-base font-normal'>{item.title}</span>
                    </div>
                </div>
            </div>
        ))
    )
}

export default TrendingCard
