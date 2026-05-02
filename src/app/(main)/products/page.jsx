import ProductCard from '@/components/ui/ProductCard';
import React from 'react';

const ProductsPage = async() => {
    const res = await fetch('https://sun-cart-iota.vercel.app/data.json');
    const products = await res.json();
    return (
        <div>
            <h2 className='font-bold text-2xl mt-10 mx-10'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-10'>
                {products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>

        </div>
    );
};

export default ProductsPage;