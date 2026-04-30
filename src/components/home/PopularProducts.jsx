import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import ProductCard from '../ui/ProductCard';

const PopularProducts = async () => {
    const res = await fetch('https://sun-cart-iota.vercel.app/data.json');
    const products = await res.json();

    return (
        <div>
            <h2>Popular Products</h2>
            <div className='grid grid-cols-3 gap-5 m-10'>
                {products.slice(0,3).map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>

        </div>
    );
};

export default PopularProducts;