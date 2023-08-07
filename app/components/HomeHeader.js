"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import homeimg from "@/public/homeheader.png"
import avtar from "@/public/Avatar.png"
import { Tilt } from 'react-tilt'

const HomeHeader = () => {



    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        speed: 300,
        scale: 0.9,  // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }


    function formatNumberWithK(number) {
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        }
        return number.toString();
    }

    const [counter, setcounter] = useState(0)
    const [auccounter, setauccounter] = useState(0)
    const targetValue = 240000;
    const auctargetValue = 100000;
    const increment = 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            setcounter(prevCounter => {
                const newCounter = prevCounter + increment;
                return newCounter >= targetValue ? targetValue : newCounter;
            });
        }, 1);
        const aucinterval = setInterval(() => {
            setauccounter(prevCounter => {
                const newCounter = prevCounter + increment;
                return newCounter >= auctargetValue ? auctargetValue : newCounter;
            });
        }, 1);

        return () => {
            clearInterval(interval);
            clearInterval(aucinterval)
        };
    }, []);


    return (
        <div className='flex gap-12 justify-start '>
            <div className='flex-1 flex flex-col gap-4 items-start '>
                <h1 className='text-white text-7xl font-semibold w-[510px] tracking-wider'>Discover digital art & Collect NFTs</h1>
                <h5 className='text-white text-xl font-normal w-[510px] tracking-wider mt-4'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h5>
                <div className='flex items-center justify-center px-12 py-3 gap-2 cursor-pointer mt-4 bg-purple-600 w-fit rounded-xl'>
                    <Image src={"/rocket.svg"} alt='icon' height={20} width={20} />
                    <h5 className='text-base text-white'>Get Started</h5>
                </div>
                <div className='flex items-center gap-40 mt-4'>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>{formatNumberWithK(counter)}</h4>
                        <h5 className='text-white text-2xl font-normal capitalize'>Total Sale</h5>
                    </div>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>{formatNumberWithK(auccounter)}</h4>
                        <h5 className='text-white text-2xl font-normal capitalize'>Auctions</h5>
                    </div>
                    <div className='flex flex-col gap-1 justify-start'>
                        <h4 className='text-white text-2xl font-bold slashed-zero '>{formatNumberWithK(counter)}</h4>
                        <h5 className='text-white text-2xl font-normal capitalize'>Artists</h5>
                    </div>
                </div>
            </div>
            <div className='flex-1 w-[100%]  flex flex-col justify-start text-white'>
                <Tilt options={defaultOptions}>
                    <div className=' bg-slate-200 bg-opacity-20 w-fit rounded-2xl float-right'>
                        <Image className='object-cover h-[410px] w-[500px] rounded-tr-2xl rounded-tl-2xl' src={homeimg} alt='img' />
                        <div className='p-4 flex flex-col gap-2'>
                            <h5 className='font-semibold text-xl'>Space Walking</h5>
                            <div className='flex items-center justify-start gap-2'>
                                <Image className='object-contain' src={avtar} alt='icon' />
                                <span className='text-base font-normal'>Animakid</span>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default HomeHeader
