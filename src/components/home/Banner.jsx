import Image from 'next/image';
import React from 'react';
import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className="w-full">
            <div className="relative h-[50vh] md:h-[90vh]">
                <Image
                    src={hero1}
                    alt="Summer Banner"
                    fill
                    className="object-cover"
                    priority
                />

                <h2 className="absolute top-10 left-90 font-bold text-6xl text-white">Feel the Heat. Shop the Style</h2>

                <p className='absolute bottom-43 left-125 font-bold text-5xl text-orange-500'>“Summer Sale 50% OFF”</p>

                <p className='absolute bottom-30 left-90 font-bold text-2xl text-white'>Discover sunglasses, outfits, and skincare made for your perfect summer.</p>

                <Link href={'/products'}><Button className=' absolute bottom-15 left-170 bg-sky-500'>Explore Collection</Button></Link>

            </div>


        </div >
    );
};

export default Banner;