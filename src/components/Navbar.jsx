"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Spinner } from '@heroui/react';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import animationData from "@/assets/sun.json";
import NavLink from './NavLink';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">

            <header className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>

                <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mx-auto md:mx-0">
                    SunCart
                    <div className="w-8">
                        <Lottie animationData={animationData} loop />
                    </div>
                </div>
       
                <ul className="hidden md:flex items-center gap-4">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/products">Products</NavLink></li>
                    <li><NavLink href="/profile">My Profile</NavLink></li>
                </ul>

                {isPending ? (
                    <Spinner />
                ) : user ? (
                    <ul className="flex items-center gap-3">

                        <Image
                            className='rounded-2xl'
                            src={user.image}
                            alt='User Avatar'
                            width={35}
                            height={35}
                        />

                        <li>
                            <Button
                                onClick={async () => await authClient.signOut()}
                                className="bg-red-500"
                            >
                                Logout
                            </Button>
                        </li>

                    </ul>
                ) : (
                    <li>
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    </li>
                )}

            </header>

            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white shadow">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/products">Products</NavLink>
                    <NavLink href="/profile">My Profile</NavLink>
                </div>
            )}

        </nav>
    );
};

export default Navbar;