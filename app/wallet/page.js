"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import img1 from "@/public/metamask.png"
import img2 from "@/public/WalletConnect.png"
import img3 from "@/public/Coinbase.png"
import img4 from "@/public/pngwing.com.png"


const LoginPage = () => {

    return (
        <div className='mt-4 h-full w-full'>
            <div className='flex gap-8'>
                <div className='flex-1'>
                    <Image className='object-contain' src={"/login.png"} alt='login' width={1000} height={500} />
                </div>
                <div className='flex-1 p-12 flex flex-col gap-4 justify-center items-start'>
                    <h1 className='capitalize text-[51px] text-white font-semibold tracking-wide'>Connect wallet</h1>
                    <h5 className='text-2xl mt-2 font-normal text-white w-[510px] capitalize tracking-wider'>Choose a wallet you want to connect.
                        <br />
                        There are several wallet providers..</h5>
                    <div className='mt-8 flex items-center gap-4 bg-[#3B3B3B] rounded-3xl p-4 w-[320px] cursor-pointer border border-purple-600'>
                        <Image src={img1} alt='user' className='cursor-pointer h-[50px] w-[50px] object-cover' />
                        <h5 className='text-white font-semibold tracking-wider text-2xl'>Metamask</h5>
                    </div>
                    <div className=' flex items-center gap-3 bg-[#3B3B3B] rounded-3xl p-4 w-[320px] cursor-pointer border border-purple-600'>
                        <Image src={img2} alt='user' className='cursor-pointer h-[50px] w-[50px] object-cover' />
                        <h5 className='text-white font-semibold tracking-wider text-2xl'>Wallet Connect</h5>
                    </div>
                    <div className=' flex items-center gap-3 bg-[#3B3B3B] rounded-3xl p-4 w-[320px] cursor-pointer border border-purple-600'>
                        <Image src={img3} alt='user' className='cursor-pointer h-[50px] w-[50px] object-cover' />
                        <h5 className='text-white font-semibold tracking-wider text-2xl'>Coinbase</h5>
                    </div>
                    <div className=' flex items-center gap-3 bg-[#3B3B3B] rounded-3xl p-4 w-[320px] cursor-pointer border border-purple-600'>
                        <Image src={img4} alt='user' className='cursor-pointer h-[50px] w-[50px] object-cover' />
                        <h5 className='text-white font-semibold tracking-wider text-2xl'>Binance Wallet</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
