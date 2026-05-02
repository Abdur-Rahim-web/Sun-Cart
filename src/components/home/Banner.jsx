"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import Lottie from "lottie-react";
import hero2 from "@/assets/hero2.jpg";
import animationData from "@/assets/summer.json";

const Banner = () => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden">

            <Image
                src={hero2}
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-2 pt-10 md:pt-0">

                <div className="w-full md:w-2/3 text-center md:text-left text-white">

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Feel the Heat. Shop the Style
                    </h2>

                    <p className="mt-4 text-orange-400 text-xl md:text-3xl font-bold">
                        Summer Sale 50% OFF
                    </p>

                    <p className="mt-4 text-sm md:text-lg max-w-xl">
                        Discover sunglasses, outfits, and skincare made for your perfect summer lifestyle. Stay cool, stay stylish, and enjoy the season with our exclusive collection.
                    </p>

                    <Link href="/products">
                        <Button className="mt-6 bg-sky-500 text-white px-6 py-2">
                            Explore Collection
                        </Button>
                    </Link>

                </div>

                <div className="w-full md:w-2/3 flex justify-center -mt-4 md:mt-0">

                    <div className="w-120 mb-20 md:mb-0 md:w-170">
                        <Lottie animationData={animationData} loop />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;