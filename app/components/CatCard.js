import React from 'react'
import Image from 'next/image'
import data from '@/data/CatCardData'

const CatCard = () => {
    return (
        data.map((item, index) => (
            <div key={item.id} className='col-span-1 bg-black h-[400px] w-[340px] gap-4 rounded-2xl bg-opacity-20 relative'>
                <Image src={item.secimg} alt='icon' className='absolute top-[22%] z-10 left-[32%] h-[120px] w-[120px]' />
                <Image className='w-[340px] h-[290px] object-cover rounded-tr-2xl rounded-tl-2xl blur-sm' src={item.img} alt='img' />
                <div className='p-6'>
                    <h5 className='text-white font-semibold text-2xl capitalize'>{item.heading}</h5>
                </div>
            </div>
        ))
    )
}

export default CatCard
