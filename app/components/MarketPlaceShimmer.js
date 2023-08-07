import React from 'react'

const MarketPlaceShimmer = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        data.map((item, index) => (
            <div key={index} className=' bg-[#ccc] h-[520px] w-[380px]  rounded-2xl  relative'>
                <div className='h-[339px] bg-gray-400 rounded-tr-2xl rounded-tl-2xl'></div>
                <div className='p-4 flex flex-col justify-between'>
                    <span className='capitalize  bg-gray-400 w-[150px] h-[30px] text-sm font-normal tracking-wider'></span>
                    <div className='mt-2 flex items-center gap-3'>
                        <div className='rounded-full h-[24px] w-[24px] bg-gray-400'></div>
                        <span className=' bg-gray-400 w-full h-[20px] font-normal text-base'></span>
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <div className='flex flex-col gap-2'>
                            <span className='capitalize  bg-gray-400 w-[150px] h-[20px] text-sm font-normal tracking-wider'></span>
                            <span className=' bg-gray-400 w-[150px] h-[20px] font-normal text-base'></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='capitalize  bg-gray-400 w-[150px] h-[20px] text-sm font-normal tracking-wider'></span>
                            <span className=' bg-gray-400 w-[150px] h-[20px] font-normal text-base'></span>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default MarketPlaceShimmer
