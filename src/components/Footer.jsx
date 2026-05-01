import Link from 'next/link';
import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow, FaSun, FaTwitch, FaXTwitter } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold flex flex-row text-orange-500 justify-start items-center gap-2">SunCart <FaSun /></h2>
                        <p className="mt-3 text-sm">
                            Your go-to store for summer essentials. Stay stylish, stay cool.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <p className='flex flex-row justify-start gap-2 items-center'><IoLocationSharp /> Rajshahi, Bangladesh</p>
                        <p className='flex flex-row justify-start gap-2 items-center'><BiLogoGmail /> abdurrahim@gmail.com</p>
                        <p className='flex flex-row justify-start gap-2 items-center'><FaPhoneAlt />+880 1234-567890</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className='flex-col flex '>
                            <Link className='text-blue-500' href={'/'}>Home</Link>
                            <Link className='text-blue-500' href={'/products'}>Products</Link>
                            <Link className='text-blue-500' href={'/profile'}>My Profile</Link>
                            <Link className='text-blue-500' href={'/login'}>Login</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href={'/'}><FaFacebook></FaFacebook></Link>
                            <Link href={'/'}><FaInstagram></FaInstagram></Link >
                            <Link href={'/'}><FaXTwitter></FaXTwitter></Link>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
                    © 2026 SunCart. All rights reserved. | <Link href={'/'}>Privacy Policy</Link> 
                </div>
            </footer>
        </div>
    );
};

export default Footer;