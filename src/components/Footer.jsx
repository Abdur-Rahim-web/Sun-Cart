import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">SunCart ☀️</h2>
                        <p className="mt-3 text-sm">
                            Your go-to store for summer essentials. Stay stylish, stay cool.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <p>📍 Nator, Bangladesh</p>
                        <p>📧 support@suncart.com</p>
                        <p>📞 +880 1234-567890</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>My Profile</li>
                            <li>Login</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            <span>🌐</span>
                            <span>📘</span>
                            <span>📸</span>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
                    © 2026 SunCart. All rights reserved. | Privacy Policy
                </div>
            </footer>
        </div>
    );
};

export default Footer;