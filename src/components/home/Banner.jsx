import Image from 'next/image';
import React from 'react';
import hero1 from '@/assets/hero1.jpg';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[90vh]">

            <Image
                src={hero1}
                alt="Summer Banner"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10">

                <h2 className="text-2xl md:text-5xl font-bold text-white">
                    Feel the Heat. Shop the Style
                </h2>

                <p className="mt-4 text-xl md:text-3xl font-bold text-orange-400">
                    Summer Sale 50% OFF
                </p>

                <p className="mt-3 text-sm md:text-lg text-white max-w-xl">
                    Discover sunglasses, outfits, and skincare made for your perfect summer.
                </p>

                <Link href="/products">
                    <Button className="mt-6 bg-sky-500 text-white px-6 py-2">
                        Explore Collection
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Banner;