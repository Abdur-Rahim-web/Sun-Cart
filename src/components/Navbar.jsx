import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold text-2xl text-orange-500">SunCart</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                    </ul>
                    <ul className="flex items-center gap-4">
                        <li><Button>Sign Up</Button></li>
                    </ul>
                </header>
            </nav>

        </div>
    );
};

export default Navbar;