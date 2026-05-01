import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { id, name, rating, price, image } = product;

    return (
        <Card className="w-full p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

            <div className="relative w-full h-52 overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-110 transition duration-300"
                />
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{name}</h3>

                <p className="font-bold">
                    Price: <span className="text-orange-500">${price}</span>
                </p>

                <div className="flex items-center gap-2 text-sm">
                    <FaStar className="text-yellow-500" />
                    {rating}
                </div>

                <Link href={`/products/${id}`}>
                    <Button className="mt-3 w-full">
                        View Details
                    </Button>
                </Link>
            </div>

        </Card>
    );
};

export default ProductCard;