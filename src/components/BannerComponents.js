import React, { useEffect, useState } from 'react';
import Banner from '../assets/images/backgroundFInal.jpg';
import HeadphoneBanner from '../assets/images/APMAX.png';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../components/BannerComponents.css';

const BannerComponents = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/shop');
    };

    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.text1', {
            duration: 1200,
            distance: '50px',
            origin: 'top',
            easing: 'ease-in-out',
        });

        ScrollReveal().reveal('.text2', {
            duration: 1200,
            distance: '150px',
            origin: 'top',
            delay: 300,
            reset: false,
            easing: 'ease-in-out',
        });

        ScrollReveal().reveal('.btn', {
            duration: 1200,
            distance: '150px',
            origin: 'top',
            delay: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div style={{ maxHeight: '100vh', width: '100%', position: 'relative' }}>
            {/* Background Image */}
            <img
                style={{ height: '94vh', width: '100%', objectFit: 'fill', rotate: '180deg' }}
                src={Banner}
                alt="Banner"
                className="w-100"
            />

            {/* Headphone Image */}
            <img
                className="headphone-image bounce-animation"
                onClick={handleButtonClick}
                src={HeadphoneBanner}
                alt="Headphone Banner"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

            {/* Text Content */}
            <div className="text-content">
                <h1 className="text-white text-5xl font-bold text1">New AirPods</h1>
                <h1 className="text-white text-6xl text1">
                    Headphones{' '}
                    <span className="text-slate-50" style={{ fontSize: '1.3em' }}>
                        AirPods Max
                    </span>
                </h1>
                <h1 className="text-slate-200 text-4xl text1">Headphones Silver</h1>
                <p className="text-white text-2xl text2">
                    Apple-designed dynamic driver
                    <br />
                    Pro-level Active Noise Cancellation
                    <br />
                    Transparency mode
                    <br />
                    Personalized Spatial Audio with dynamic head tracking
                    <br />
                    Adaptive EQ.
                </p>
            </div>

            {/* Button */}
            <button
                className="btn button"
                onClick={handleButtonClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                View Store
            </button>
        </div>
    );
};

export default BannerComponents;
