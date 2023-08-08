"use client"
import React, { useState, useEffect } from 'react'
import TodayRanking from '../components/TodayRanking'
import WeekRanking from '../components/WeekRanking'
import MonthRanking from '../components/MonthRanking'
import AllTime from '../components/AllTime'

const Ranking = () => {
    const [today, settoday] = useState(true)
    const [week, setweek] = useState(false)
    const [month, setmonth] = useState(false)
    const [alltime, setalltime] = useState(false)




    const handletoday = () => {
        settoday(true)
        setweek(false)
        setmonth(false)
        setalltime(false);
    }
    const handleweek = () => {
        setweek(true)
        settoday(false)
        setmonth(false)
        setalltime(false);
    }
    const handlemonth = () => {
        setmonth(true)
        settoday(false)
        setweek(false)
        setalltime(false)
    }
    const handlealltime = () => {
        setalltime(true)
        settoday(false)
        setweek(false)
        setmonth(false)
    }


    return (
        <section className='h-full'>
            <section className='px-48 py-20 h-[100%] w-[100%] flex flex-col gap-8'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-white font-semibold text-6xl'>Top Creators</h1>
                    <h5 className='text-white font-normal text-xl'>Check out top ranking NFT artists on the NFT Marketplace.</h5>
                </div>
            </section>
            <section className='px-48  h-full w-[100%]'>
                <div className='w-full  h-[60px] flex justify-between'>
                    <div className={today ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1   flex justify-center items-center  cursor-pointer'} onClick={handletoday}>
                        <span className={today ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>Today</span>

                    </div>
                    <div className={week ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1  flex justify-center items-center  cursor-pointer'} onClick={handleweek}>
                        <span className={week ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>This Week</span>

                    </div>
                    <div className={month ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1  flex justify-center items-center  cursor-pointer'} onClick={handlemonth}>
                        <span className={month ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>This Month</span>

                    </div>
                    <div className={alltime ? 'flex-1 border-b-2 border-b-[#858584] flex justify-center items-center  cursor-pointer transition-all' : 'flex-1  flex justify-center items-center  cursor-pointer'} onClick={handlealltime}>
                        <span className={alltime ? "font-semibold text-white text-xl transition-all" : "font-semibold text-gray-500 text-xl"}>All Time</span>

                    </div>
                </div>
                <div className='mt-10 mb-4 w-[100%] grid grid-cols-12 bg-transparent border-[0.5px] border-zinc-50 p-4 text-gray-300  text-left rounded-3xl '>
                    <div className='col-span-1 '>
                        <span className='text-base font-normal tracking-widest px-2 py-1'>#</span>
                    </div>
                    <div className='col-span-5 '>
                        <span className='text-base font-normal tracking-widest'>Artist</span>
                    </div>
                    <div className=' col-span-2'>
                        <span className='text-base font-normal tracking-widest'>Change</span>
                    </div>
                    <div className=' col-span-2'>
                        <span className='text-base font-normal tracking-widest'>NFTs Sold</span>
                    </div>
                    <div className=' col-span-2'>
                        <span className='text-base font-normal tracking-widest'>Volume</span>
                    </div>
                </div>
                <div className='my-6'>
                    {
                        today ? <TodayRanking /> : ""
                    }
                    {
                        week ? <WeekRanking /> : ""
                    }
                    {
                        month ? <MonthRanking /> : ""
                    }
                    {
                        alltime ? <AllTime /> : ""
                    }


                </div>
            </section>
        </section>
    )
}

export default Ranking
