import Image from 'next/image'
import React from 'react'
import rocket from "@/public/rankingrocket.svg"
import TopCreatorCard from './TopCreatorCard'

const TopCreators = () => {
    return (
        <div className='mt-48'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-white text-4xl font-semibold capitalize'>
                        Top creators
                    </h1>
                    <h5 className='text-white text-xl font-normal capitalize mt-4'>
                        Checkout Top Rated Creators on the NFT Marketplace
                    </h5>
                </div>
                <div className='border border-purple-600 px-12 py-3 rounded-2xl flex justify-center items-center gap-4 cursor-pointer'>
                    <Image src={rocket} alt='rocket' className='' />
                    <h5 className='text-base font-semibold text-white'>View Rankings</h5>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-4 gap-4 '>
                <TopCreatorCard />
            </div>
        </div>
    )
}

export default TopCreators
