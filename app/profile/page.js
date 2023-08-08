"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import dp from "@/public/pp.png"
import artist from "@/public/artist.png"
import copy from "@/public/copy.svg"
import edit from "@/public/edit.svg"
import MarketNft from '../components/MarketNft'
import MarketCollection from '../components/MarketCollection'
import Link from 'next/link'

const Profile = () => {
    const [created, setcreated] = useState(true)
    const [own, setown] = useState(false)
    const [collection, setcollection] = useState(false)


    const handlecreated = () => {
        setcreated(true)
        setown(false)
        setcollection(false)
    }
    const handleown = () => {
        setown(true)
        setcreated(false)
        setcollection(false)

    }
    const handlecollection = () => {
        setcollection(true)
        setcreated(false)
        setown(false)
    }




    return (
        <section className='flex-1'>
            <div className='w-full h-[350px] relative'>
                <Image className=' w-full object-cover h-full' src={artist} alt='icon' />
                <Image src={dp} className='h-[200px] w-[200px] object-contain absolute bottom-[-100px] left-[180px] border-[4px] rounded-full border-[#2b2b2b] border-g ' alt='icon' />
            </div>
            <div className='px-48 pt-36 pb-8 flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h4 className='font-semibold text-5xl text-white tracking-widest'>Animakid</h4>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <button className='flex items-center justify-center gap-3 w-[220px] p-3 text-white font-medium rounded-md bg-purple-600'>
                            <Image src={copy} alt='icon' />
                            0xc0E3...B79C
                        </button>
                        <Link href={"/profile/edit"}>
                            <button className='flex items-center justify-center gap-3 w-[220px] p-3 text-white font-medium rounded-md bg-transparent border border-purple-600'>
                                <Image src={edit} alt='icon' />
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-20 mt-4'>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>250k</h4>
                        <h5 className='text-white text-xl font-normal capitalize'>volume</h5>
                    </div>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>50+</h4>
                        <h5 className='text-white text-xl font-normal capitalize'>nfts sold</h5>
                    </div>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>3000</h4>
                        <h5 className='text-white text-xl font-normal capitalize'>Followers</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <h5 className='text-[#858584] font-semibold text-base'>Bio</h5>
                    <span className='text-white font-normal text-lg'>The internet's friendliest designer kid.</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <h5 className='text-[#858584] font-semibold text-base'>Links</h5>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Image className='cursor-pointer' src={"/globe.svg"} alt='social' height={30} width={30} />
                        <Image className='cursor-pointer' src={"/discord.svg"} alt='social' height={30} width={30} />
                        <Image className='cursor-pointer' src={"/yt.svg"} alt='social' height={30} width={30} />
                        <Image className='cursor-pointer' src={"/twitter.svg"} alt='social' height={30} width={30} />
                        <Image className='cursor-pointer' src={"/insta.svg"} alt='social' height={30} width={30} />
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-slate-600 mt-6 bg-opacity-40'></div>
            <section className='px-48 h-full w-[100%]'>
                <div className='w-full  h-[60px] flex justify-between'>
                    <div className={created ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1   flex justify-center items-center  cursor-pointer'} onClick={handlecreated}>
                        <span className={created ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>Created</span>

                    </div>
                    <div className={own ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1  flex justify-center items-center  cursor-pointer'} onClick={handleown}>
                        <span className={own ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>Own</span>

                    </div>
                    <div className={collection ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1  flex justify-center items-center  cursor-pointer'} onClick={handlecollection}>
                        <span className={collection ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>Collection</span>
                    </div>
                </div>
                <div>
                    {
                        created ? <MarketNft /> : ""
                    }
                    {
                        own ? <MarketCollection /> : ""
                    }
                    {
                        collection ? <MarketNft /> : ""
                    }
                </div>
            </section>
            <div className='w-full h-[1px] bg-slate-900 mt-8 '></div>
        </section>
    )
}

export default Profile
