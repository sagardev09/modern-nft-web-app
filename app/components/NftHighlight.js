"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import avtar from "@/public/Avatar.png"
import eye from "@/public/eye.svg"

const NftHighlight = () => {

    const initialTime = {
        hours: 59,
        minutes: 59,
        seconds: 60,
    };

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(timer);
            } else {
                if (time.minutes === 0 && time.seconds === 0) {
                    setTime(prevTime => ({
                        hours: prevTime.hours - 1,
                        minutes: 59,
                        seconds: 59,
                    }));
                } else if (time.seconds === 0) {
                    setTime(prevTime => ({
                        hours: prevTime.hours,
                        minutes: prevTime.minutes - 1,
                        seconds: 59,
                    }));
                } else {
                    setTime(prevTime => ({
                        hours: prevTime.hours,
                        minutes: prevTime.minutes,
                        seconds: prevTime.seconds - 1,
                    }));
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time]);




    return (
        <div className='nftbg'>
            <div className='px-48 py-20 flex justify-start items-end h-full'>
                <div className='flex flex-col gap-10 flex-1'>
                    <div className='bg-[#3B3B3B] px-8 rounded-2xl w-fit items-center  py-4 flex gap-2 cursor-pointer'>
                        <Image src={avtar} alt='avtar' className='object-contain' />
                        <h5 className='text-white  text-base font-normal'>Shroomie</h5>
                    </div>
                    <div>
                        <h1 className='text-white text-5xl font-bold tracking-widest'>Magic Mashrooms</h1>
                    </div>
                    <div className='bg-white w-fit flex items-center justify-between gap-3 px-14 py-5 rounded-2xl cursor-pointer'>
                        <Image src={eye} alt='icon' />
                        <h5 className='font-bold text-base'>See NFT</h5>
                    </div>
                </div>
                <div className='text-white flex-1 flex justify-end '>

                    <div className='w-[450px] h-[250px] p-8 bg-black flex flex-col justify-center gap-7 rounded-3xl bg-opacity-30'>
                        <div>
                            <h5 className='text-lg font-semibold'>Auction ends in:</h5>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-4xl font-semibold'>{time.hours.toString().padStart(2, '0')}</h1>
                                <span className='text-xl font-medium'>Hours</span>
                            </div>
                            <span className='text-5xl mb-4'>:</span>
                            <div>
                                <h1 className='text-4xl font-semibold'>{time.minutes.toString().padStart(2, '0')}</h1>
                                <span className='text-xl font-medium'>Minutes</span>
                            </div>
                            <span className='text-5xl mb-4'>:</span>
                            <div>
                                <h1 className='text-4xl font-semibold'>{time.seconds.toString().padStart(2, '0')}</h1>
                                <span className='text-xl font-medium'>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftHighlight
