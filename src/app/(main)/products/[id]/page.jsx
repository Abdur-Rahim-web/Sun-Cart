import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ProductsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://sun-cart-iota.vercel.app/data.json');
    const products = await res.json();

    const product = products.find(product => product.id === parseInt(id));

    return (
        <div className="px-6 md:px-16 py-10">

            <div className="grid md:grid-cols-2 gap-10 items-center p-4 bg-amber-100 rounded-2xl">
                <div className="relative w-full h-100 rounded-xl overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {product.name}
                    </h1>

                    <p className="text-gray-500 font-bold">
                        Brand: {product.brand}
                    </p>

                    <p className="text-orange-500 text-2xl font-bold">
                        ${product.price}
                    </p>

                    <p className="flex items-center gap-2 font-bold text-yellow-400">
                        <FaStar></FaStar> {product.rating}
                    </p>

                    <p className="text-gray-600 font-bold">
                        Category: {product.category}
                    </p>

                    <p className="text-gray-600 font-semibold">
                        {product.description}
                    </p>

                    <p className="text-md font-bold">
                        Stock: {product.stock}
                    </p>

                    <button className="mt-4 px-6 py-3 bg-sky-500 text-white rounded-lg">
                        Buy Now
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProductsDetailsPage;