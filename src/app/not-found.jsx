"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-100">

            <h1 className="text-6xl font-bold text-orange-500">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Oops! Page Not Found
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link href="/">
                <Button className="mt-6 bg-sky-500 text-white px-6 py-2">
                    Go Back Home
                </Button>
            </Link>

        </div>
    );
};

export default NotFound;