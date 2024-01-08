"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { UserAuth } from '@/context/Context'

const Navbar = () => {
    const pathname = usePathname()
    const { user, logout } = UserAuth()
    return (
        <div className='flex justify-between items-center px-12 py-2'>
            <Link href={"/"}>
                <div className='flex gap-3'>
                    <div className='flex justify-center items-end'>
                        <Image className='object-contain' src={"/E.svg"} alt='logo' height={50} width={50} />
                    </div>
                    <div className='flex justify-center items-end'>
                        <Image src={"/M.svg"} alt='logo' height={62} width={62} />
                    </div>
                </div>
            </Link>
            <div className='flex gap-8 text-white capitalize items-center'>
                {user && <Link href={"/market"}>
                    <h5 className={pathname === "/market" ? 'bg-purple-600 px-6 py-3 rounded-2xl flex justify-center gap-4 transition-all' : " px-6 py-3 rounded-2xl flex justify-center gap-4"}>Marketplace</h5>
                </Link>}
                {user && <Link href={"/ranking"}>
                    <h5 className={pathname === "/ranking" ? 'bg-purple-600 px-6 py-3 rounded-2xl flex justify-center gap-4 transition-all' : " px-6 py-3 rounded-2xl flex justify-center gap-4"}>Rankings</h5>
                </Link>}
                {user && <Link href={"/wallet"}>
                    <h5 className={pathname === "/wallet" ? 'bg-purple-600 px-6 py-3 rounded-2xl flex justify-center gap-4 transition-all' : " px-6 py-3 rounded-2xl flex justify-center gap-4"}>Connect a wallet</h5>
                </Link>}
                {!user ? <Link href={"/login"}>
                    <div className={pathname === "/login" ? 'bg-purple-600 px-6 py-3 rounded-2xl flex justify-center gap-4 transition-all' : " px-6 py-3 rounded-2xl flex justify-center gap-4"}>
                        <Image src={"/user.svg"} alt='user' width={20} height={20} />
                        <h5>Sign Up</h5>
                    </div>
                </Link> : <button className="bg-purple-600 px-6 py-3 rounded-2xl flex justify-center gap-4 transition-all" onClick={logout}>Log out</button>
                }
            </div>

        </div>
    )
}

export default Navbar
