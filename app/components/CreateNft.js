import Image from 'next/image'
import React from 'react'
import plus from "@/public/add1.svg"
import Link from 'next/link'

const CreateNft = () => {
    return (
        <Link href={"/profile/upload"}>
            <div className='h-[80px] w-[80px] rounded-full bg-purple-600 flex items-center justify-center fixed bottom-[100px] right-[50px] btnshadow z-50'>
                <Image src={plus} className='object-contain h-[30px] w-[30px]' alt='icon' />
            </div>
        </Link>
    )
}

export default CreateNft
