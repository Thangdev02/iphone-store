import React from 'react';
import BannerProduct1 from '../assets/images/AppleImac.png';

const ProductBanner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg  w-full max-w-5xl mx-auto my-4">
            {/* Right Content */}
            <div className="right-content flex flex-col items-center md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <p className="text-2xl font-bold mb-2">Best Selling Products</p>
                <p className="text-xl font-semibold mb-4">
                    <i className="bi bi-apple mr-2"></i> Apple iMac
                </p>
                <p className="text-gray-600">
                    The iMac by Apple is a sleek, all-in-one desktop computer designed for performance and style. Featuring a stunning Retina display, powerful processors, and seamless integration with macOS, it's perfect for productivity, creativity, and entertainment. Its minimalist design and advanced features make it a centerpiece for any workspace.
                </p>
            </div>

            {/* Left Content */}
            <div className="left-content md:w-1/2">
                <img
                    src={BannerProduct1}
                    alt="Apple iMac"
                    className="w-full h-64 md:h-72 object-cover object-center rounded-md"
                />
            </div>
        </div>
    );
};

export default ProductBanner;
