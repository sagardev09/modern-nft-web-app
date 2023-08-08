import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer w-full px-20 py-10 h-[370px]  bottom-0 '>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col gap-8'>
                    <div className='flex justify-start items-center gap-2'>
                        <Image src={"/footer.svg"} alt='footer' height={30} width={30} />
                        <h4 className='text-white uppercase text-xl font-semibold'>Enigma Mint</h4>
                    </div>
                    <h5 className='text-slate-300 text-base font-medium w-[310px] tracking-widest'>NFT marketplace UI created with Anima for Figma.</h5>
                    <h5 className='text-slate-300 text-base font-medium w-[310px] tracking-widest'>Join our community</h5>
                    <div className='flex justify-start items-center gap-2'>
                        <Image src={"/discord.svg"} alt='social' height={30} width={30} />
                        <Image src={"/yt.svg"} alt='social' height={30} width={30} />
                        <Image src={"/twitter.svg"} alt='social' height={30} width={30} />
                        <Image src={"/insta.svg"} alt='social' height={30} width={30} />
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h4 className='text-white uppercase text-xl font-semibold'>Explore</h4>
                    <h5 className='text-slate-300 text-base font-medium w-[310px] tracking-widest'>Marketplace</h5>
                    <h5 className='text-slate-300 text-base font-medium w-[310px] tracking-widest'>Rankings</h5>
                    <h5 className='text-slate-300 text-base font-medium w-[310px] tracking-widest'>Rankings</h5>
                </div>
                <div className='flex flex-col gap-8'>
                    <h4 className='text-white uppercase text-xl font-semibold'>Join our weekly digest</h4>
                    <h1 className='text-slate-300 text-base font-medium w-[350px] tracking-widest'>Get exclusive promotions & updates straight to your inbox.</h1>
                    <div className='w-full relative'>
                        <input type="text" name="" id="" placeholder='Enter your email here' className='text-sm p-4 rounded-2xl w-[420px] focus:outline-none pr-[200px]' />
                        <button className='bg-purple-600 p-4 text-sm rounded-2xl absolute right-0 w-[180px] text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-slate-100 mt-6'></div>
            <div className='mt-4'>
                <h5 className='text-slate-300 text-base font-medium  tracking-widest'>Ⓒ NFT Market. Use this template freely.</h5>
            </div>
        </div>
    )
}

export default Footer
