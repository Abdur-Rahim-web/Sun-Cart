"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSun } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log('user', user)


    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold flex flex-row text-orange-500 justify-start items-center gap-2">SunCart <FaSun /></h2>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                    </ul>
                    {isPending ? (<Spinner />) : user ? (<ul className="flex items-center gap-4">

                        <Image className='rounded-full' src={user.image} alt='User Avatar' width={35} height={35}></Image>

                        <li><Link href="/login "><Button onClick={async() => await authClient.signOut()} className="bg-red-500 ">Logout </Button></Link></li>

                    </ul>) : (<li><Link href="/login"><Button>Login</Button></Link></li>)}
                </header>
            </nav>

        </div>
    );
};

export default Navbar;