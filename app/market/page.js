"use client"
import { useState } from 'react'
import search from "@/public/search.svg"
import Image from 'next/image'
import MarketNft from '../components/MarketNft'
import MarketCollection from '../components/MarketCollection'

const MarketPlace = () => {

    const [isnft, setisnft] = useState(true)
    const [iscollection, setiscollection] = useState(false)

    const handlenft = () => {
        setisnft(true)
        setiscollection(false)
    }
    const handlecollection = () => {
        setiscollection(true)
        setisnft(false)
    }
    return (
        <>
            <section className='px-48 py-20 h-full w-[100%] flex flex-col gap-8'>
                <h1 className='text-white font-semibold text-6xl'>Browse Marketplace</h1>
                <h5 className='text-white font-normal text-xl'>Browse through more than 50k NFTs on the NFT Marketplace.</h5>
                <div className='relative'>
                    <input className='w-[100%] px-4 py-3 focus:outline-none rounded-2xl bg-transparent border border-zinc-50 text-white' type="text" name="" id="" placeholder='Search your favourite NFTs' />
                    <Image className='absolute top-3 right-5' src={search} alt='icon' />
                </div>
            </section>
            <div className='w-full h-[0.3px] bg-gray-400'></div>
            <section className='px-48  h-full w-[100%]'>
                <div className='w-full  h-[60px] flex justify-between'>
                    <div className={isnft ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center gap-3 cursor-pointer transition-all' : 'flex-1   flex justify-center items-center gap-3 cursor-pointer'} onClick={handlenft}>
                        <span className={isnft ? "font-semibold text-white text-2xl transition-all" : "font-semibold text-gray-500 text-2xl"}>NFTs</span>
                        <span className='px-3 py-1 bg-black bg-opacity-20 rounded-3xl text-white w-fit'>302</span>
                    </div>
                    <div className={iscollection ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center gap-3 cursor-pointer transition-all' : 'flex-1  flex justify-center items-center gap-3 cursor-pointer'} onClick={handlecollection}>
                        <span className={iscollection ? "font-semibold text-white text-2xl transition-all" : "font-semibold text-gray-500 text-2xl"}>Collections</span>
                        <span className='px-3 py-1 bg-black bg-opacity-20 rounded-3xl text-white w-fit'>67</span>
                    </div>
                </div>

                <div>
                    {
                        isnft ? <MarketNft /> : ""
                    }
                    {
                        iscollection ? <MarketCollection /> : ""
                    }


                </div>

            </section>
        </>
    )
}

export default MarketPlace
