"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import add from "@/public/add.svg"
import add1 from "@/public/add1.svg"
import Link from 'next/link'



const Edit = () => {

    useEffect(() => {

    }, [])



    return (
        <section>
            <div className='w-full h-[350px] bg-[#3b3b3b] relative'>
                <Image className='addimg h-[60px] w-[60px] opacity-70 cursor-pointer hover:opacity-100 transition-opacity' src={add} alt='icon' />
            </div>
            <section className='px-40 py-20 flex  gap-12'>
                <div className='w-[340px] h-full bg-[#3b3b3b] rounded-xl py-12 bg-opacity-50  edit_box_shadow'>
                    <div className='flex flex-col justify-center items-center gap-5 '>
                        <div className='h-[240px] w-[240px] rounded-full bg-black relative bg-opacity-20'>
                            <Image src={add1} className=' h-[50px] w-[50px] addimg cursor-pointer' alt='icon' />
                        </div>
                        <div className=''>
                            <button className='bg-purple-600 w-[260px] p-3 capitalize text-white font-semibold rounded-md cursor-pointer '>upload from device</button>
                        </div>
                        <div><button className='border border-purple-600 w-[260px] p-3 capitalize text-purple-600 rounded-md font-semibold cursor-pointer'>delete this image</button>
                        </div>
                    </div>
                </div>
                <div class="faq">
                    <button class="faq__question">Account information</button>
                    <div class="faq__panel flex flex-col gap-4 py-8">
                        <div className='flex gap-4 justify-between px-8 py-2'>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">first name</label>
                                <input type="text" name="" id="" placeholder='firstname' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">last name</label>
                                <input type="text" name="" id="" placeholder='lastname' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                        </div>
                        <div className='flex gap-4 justify-between px-8 py-2'>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">email address</label>
                                <input type="text" name="" id="" placeholder='email address' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">bio</label>
                                <input type="text" name="" id="" placeholder='bio' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                        </div>
                    </div>
                    <button class="faq__question">
                        social information
                    </button>
                    <div class="faq__panel flex flex-col gap-4 py-8">
                        <div className='flex gap-4 justify-between px-8 py-2'>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">your website</label>
                                <input type="text" name="" id="" placeholder='enter url' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">facebook</label>
                                <input type="text" name="" id="" placeholder='connect with facebook' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                        </div>
                        <div className='flex gap-4 justify-between px-8 py-2'>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">twitter</label>
                                <input type="text" name="" id="" placeholder='connect with twitter' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                            <div className='flex-1 flex flex-col gap-[8px]'>
                                <label className=' text-white capitalize' htmlFor="">instagram</label>
                                <input type="text" name="" id="" placeholder='connect with instagram' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                            </div>
                        </div>
                    </div>
                    <Link href={"/profile"}>
                        <div className='p-8 flex justify-end'>
                            <button className='bg-purple-600 w-[250px] p-3 rounded-md text-white font-semibold text-base capitalize '>upadte profile</button>
                        </div>
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Edit
