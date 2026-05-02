"use client";
import { FaSun, FaLeaf, FaTshirt, FaSpa } from "react-icons/fa";

const TopBrands = () => {
    return (
        <div className="py-16 px-4 md:px-10 bg-slate-50">

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                 Top Brands
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
                    <FaSun className="text-4xl text-yellow-500 mx-auto mb-3" />
                    <h3 className="font-semibold">SunnyStyle</h3>
                    <p className="text-sm text-gray-500">Trendy summer accessories</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
                    <FaSpa className="text-4xl text-pink-500 mx-auto mb-3" />
                    <h3 className="font-semibold">SkinGuard</h3>
                    <p className="text-sm text-gray-500">Premium skincare solutions</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
                    <FaTshirt className="text-4xl text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold">BloomWear</h3>
                    <p className="text-sm text-gray-500">Light & stylish outfits</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
                    <FaLeaf className="text-4xl text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold">NatureGlow</h3>
                    <p className="text-sm text-gray-500">Natural beauty care</p>
                </div>

            </div>
        </div>
    );
};

export default TopBrands;