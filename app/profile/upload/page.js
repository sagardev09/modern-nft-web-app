import React from 'react'
import Image from 'next/image'
import arr from "@/public/arr1.svg"
import img from "@/public/nftbid.png"

const page = () => {
    return (
        <section className='px-40 py-12'>
            <h1 className='text-center text-white font-semibold text-4xl capitalize tracking-widest'>Upload your nft</h1>
            <section className='px-40 py-20 flex gap-8 '>
                <div className='flex flex-col gap-8 flex-1'>
                    <div className='border-[3px]  border-slate-500 border-dashed w-[840px] h-[250px] flex justify-center items-center flex-col gap-5'>
                        <h5 className='text-white font-medium text-lg tracking-wider'>PNG,GIF,WEBP,MP4 or MP3.Max 100mb</h5>
                        <button className='bg-purple-600 w-[160px] p-3 rounded-sm text-white hover:bg-purple-700 capitalize'>Browse file</button>
                    </div>
                    <div>
                        <div className='edit_box_shadow border-[0.5px] border-zinc-500 border-opacity-20'>
                            <div className='flex justify-between items-center bg-black bg-opacity-30 px-4 py-3'>
                                <h5 className='text-white capitalize text-lg font-medium'>item</h5>
                                <div className='flex border border-gray-200 p-[6px] rounded-md'>
                                    <Image src={arr} className='object-contain h-[15px] w-[15px]' alt='icon' />
                                </div>
                            </div>
                            <div className='p-4 '>
                                <div className='flex justify-between gap-6'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label htmlFor="" className='text-white capitalize text-base font-normal'>item name</label>
                                        <input type="text" name="" id="" placeholder='item name' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label htmlFor="" className='text-white capitalize text-base font-normal'>title</label>
                                        <input type="text" name="" id="" placeholder='title' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                    </div>
                                </div>
                                <div className='flex justify-between gap-4 mt-4'>
                                    <div className='flex flex-1 gap-4'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>royalty</label>
                                            <input type="text" name="" id="" placeholder='royalty' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>copies</label>
                                            <input type="tel" name="" id="" placeholder='copies' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base   focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>description</label>
                                            <input type="text" name="" id="" placeholder='enter here' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='edit_box_shadow border-[0.5px] border-zinc-500 border-opacity-20'>
                            <div className='flex justify-between items-center bg-black bg-opacity-30 px-4 py-3'>
                                <h5 className='text-white capitalize text-lg font-medium'>item size</h5>
                                <div className='flex border border-gray-200 p-[6px] rounded-md'>
                                    <Image src={arr} className='object-contain h-[15px] w-[15px]' alt='icon' />
                                </div>
                            </div>
                            <div className='p-4 '>
                                <div className='flex justify-between gap-6'>
                                    <div className='flex-1'>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>item size</label>
                                            <input type="text" name="" id="" placeholder='item name' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 flex gap-4'>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>item currency</label>
                                            <select name="" id="" className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white h-full'>
                                                <option value="" className="text-white capitalize text-base font-normal">Eth</option>
                                                <option className="text-white capitalize text-base font-normal" value="">bitcoin</option>
                                                <option className="text-white capitalize text-base font-normal" value="">ripple</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>item price</label>
                                            <input type="text" name="" id="" placeholder='MIN:' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <label htmlFor="" className='text-white capitalize text-base font-normal'>title</label>
                                            <input type="text" name="" id="" placeholder='MAX:' className='w-full bg-transparent border border-zinc-500 p-3 rounded-md text-base focus:outline-none font-medium capitalize text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-white py-4 capitalize text-lg font-semibold'>choose a category</h5>
                                    <div className='flex gap-4 flex-wrap'>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>3D art</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>game</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>painting</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>wall art</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>virtual</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>gift art</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>entertainment</h5>
                                        </div>
                                        <div className='bg-transparent border border-zinc-500 w-fit px-3 py-1 rounded-sm text-white capitalize cursor-pointer hover:bg-black hover:bg-opacity-20 text-sm'>
                                            <h5>others</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center pt-8 pb-4'>
                                    <button className=' bg-purple-600 px-8 py-2 text-white font-medium text-base'>upload your item</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-transparent border-2 border-purple-600 flex-1 w-full h-[480px] relative'>
                    <div className=''>
                        <Image src={img} alt='img' className='object-cover h-[270px] w-[320px]' />
                    </div>
                    <div className='flex justify-between px-4'>
                        <span className='text-white font-semibold text-lg'>3D superhero</span>
                        <span className='bg-purple-600 text-white px-4 py-1 rounded-md '>Art</span>
                    </div>
                    <div className='py-1 flex flex-col px-4'>
                        <span className='text-white font-medium text-lg capitalize text-opacity-50'>price</span>
                        <span className='text-white font-medium text-base capitalize'>420ETH(USD 20.35)</span>
                    </div>
                    <div className='flex justify-between px-4 mt-3 '>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-white capitalize text-lg'>created by</span>
                            <span className='text-white text-opacity-50'>@Sagar</span>
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-white capitalize text-lg'>owner</span>
                            <span className='text-white text-opacity-50'>Sagar</span>
                        </div>
                    </div>
                    <button className='absolute bg-purple-600 px-8 py-2 text-white font-medium text-base bottom-[-20px] right-[56px]'>Place bid &#8594;</button>
                </div>
            </section>
        </section>
    )
}

export default page
