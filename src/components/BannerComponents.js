import React, { useEffect, useState } from 'react';
import Banner from '../assets/images/ backgroundFInal.jpg';
import HeadphoneBanner from '../assets/images/APMAX.png';
import { useNavigate } from 'react-router-dom';
import "../components/store/storeBanner.css";
import ScrollReveal from 'scrollreveal';

const BannerComponents = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/shop');
    }
    const buttonStyle = {
        marginTop: "6%",
        backgroundColor: isHovered ? "#c0c0c0" : "#8c8c8c",
        color: "white",
        padding: "2% 3%",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: "20px",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "background-color 0.3s, transform 0.2s",
    };

    const imageMove = {
        width: "24%",
        objectFit: "fill",
        position: "absolute",
        top: "20%",
        right: "10%",
        filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
        transform: isHovered ? "translateY(-30px)" : "translateY(0)",
        transition: "transform 0.3s ease",
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
            <img style={{ height: '94vh', width: '100%', objectFit: 'fill', rotate: '180deg', }} src={Banner} alt="Banner" className="w-100" />
            <img className='bounce-animation'
                onClick={handleButtonClick}
                style={imageMove}
                src={HeadphoneBanner}
                alt="Headphone Banner"
                onMouseEnter={() => setIsHovered(true)} // Hover starts
                onMouseLeave={() => setIsHovered(false)} // Hover ends
            />            <div style={{ position: 'absolute', top: '26%', left: '6%', width: '50%' }}>
                <h1 className='text-white text-5xl font-bold text1' style={{ fontFamily: 'Quicksand' }}>New AirPods </h1>
                <h1 className='text-white text-6xl text1' style={{ fontFamily: 'Quicksand' }}>Headphones <span className='text-slate-50' style={{ fontSize: '1.3em', }}>AirPods Max</span> </h1>
                <h1 className='text-slate-200 text-4xl text1' style={{ fontFamily: 'Quicksand' }}>Headphones Silver</h1>
                <p className='text-white text-2xl text2' style={{ fontFamily: 'Quicksand' }}>Apple-designed dynamic driver
                    Pro-level Active Noise Cancellation1
                    Transparency mode
                    Personalized Spatial Audio with dynamic head tracking2
                    Adaptive EQ. </p>
                <button className='btn'
                    onClick={handleButtonClick}
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    View Store
                </button>
                ;            </div>
        </div>
    );
};

export default BannerComponents;