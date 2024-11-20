import React from 'react';
import BannerProduct1 from '../assets/images/AppleImac.png';

const ProductBanner = () => {
    return (
        <div style={{ fontFamily: 'sans-serif', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className='right-content' style={{width:'50%'}}>
                <p style={{ fontSize: '2rem', fontWeight: 'bold'}}>
                    Best Selling Products
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>
                <i class="bi bi-apple"></i> Apple iMac  
                </p>
              
                <p>
                The iMac by Apple is a sleek, all-in-one desktop computer designed for performance and style. Featuring a stunning Retina display, powerful processors, and seamless integration with macOS, it's perfect for productivity, creativity, and entertainment. Its minimalist design and advanced features make it a centerpiece for any workspace.                </p>
            </div>
            <div className='left-content' style={{width:'50%'}}>
                <img src={BannerProduct1} alt="Banner" className="w-100" />
            </div>
        </div>
    );
};

export default ProductBanner;