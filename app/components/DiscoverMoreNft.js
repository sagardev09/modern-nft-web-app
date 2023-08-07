import React from 'react'
import eye from "@/public/eye.svg"
import Image from 'next/image'
import DiscoverMoreCard from './DiscoverMoreCard'

const DiscoverMoreNft = () => {
    return (
        <div className='mt-48'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-white text-4xl font-semibold capitalize'>
                        Discover More NFTs
                    </h1>
                    <h5 className='text-white text-xl font-normal capitalize mt-4'>
                        Explore new trending NFTs
                    </h5>
                </div>
                <div className='border border-purple-600 px-8 py-3 rounded-2xl flex justify-center items-center gap-4 cursor-pointer'>
                    <Image src={eye} alt='rocket' className='' />
                    <h5 className='text-base font-semibold text-white'>See All</h5>
                </div>
            </div>
            <div className='mt-12 flex justify-between gap-12 '>
                <DiscoverMoreCard />
            </div>
        </div>
    )
}

export default DiscoverMoreNft
