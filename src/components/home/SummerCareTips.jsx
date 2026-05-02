import { FaSun, FaTint, FaAppleAlt, FaHatCowboy } from "react-icons/fa";

const SummerCareTips = () => {
    return (
        <div className="py-12 px-4 md:px-10 bg-slate-50">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Summer Care Tips
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <FaSun className="text-3xl text-orange-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Use Sunscreen</h3>
                    <p className="text-sm text-gray-500">
                        Protect your skin from harmful UV rays.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <FaTint className="text-3xl text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Stay Hydrated</h3>
                    <p className="text-sm text-gray-500">
                        Drink enough water to stay fresh.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <FaHatCowboy className="text-3xl text-yellow-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Wear Protection</h3>
                    <p className="text-sm text-gray-500">
                        Use sunglasses & hats to block sun.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <FaAppleAlt className="text-3xl text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Eat Fresh Fruits</h3>
                    <p className="text-sm text-gray-500">
                        Keep your body cool with healthy foods.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SummerCareTips;