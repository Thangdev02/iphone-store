import React, { useEffect, useState } from 'react';
import AppleWatchBanner from '../../assets/images/APWBanner1.png';
import WhiteBanner from '../../assets/images/WhiteBanner.jpg';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../store/storeBanner.css';
const StoreBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/shop');
  };

  useEffect(() => {
    // ScrollReveal animations
    ScrollReveal().reveal('.banner-background', {
      duration: 1200,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.banner-watch', {
        duration: 1400,     
        distance: '150px',   
        origin: 'right',    
        delay: 500,          
        reset: false,    
        easing: 'ease-in-out',
      });
      

    ScrollReveal().reveal('.banner-text', {
      duration: 1200,
      distance: '40px',
      origin: 'left',
      delay: 300,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div style={{ maxHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <img
        className="banner-background"
        style={{
          height: '80vh',
          width: '100%',
          objectFit: 'cover',
          transform: 'rotate(180deg)',
        }}
        src={WhiteBanner}
        alt="Background Banner"
      />

      {/* Apple Watch Image */}
      <img
  className="banner-watch bounce-animation"
  style={{
    width: '36%',
    objectFit: 'contain',
    position: 'absolute',
    top: '8%',
    right: '2%',
    filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))',
    cursor: 'pointer',
  }}
  src={AppleWatchBanner}
  alt="Apple Watch Banner"
  onClick={handleButtonClick}
/>


      {/* Text Content */}
      <div
        className="banner-text"
        style={{ position: 'absolute', top: '24%', left: '6%', width: '45%' }}
      >
        <h1 style={{ fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: '3rem', marginBottom: '10px' }}>
          Our Collection
        </h1>
        <h1 style={{ fontFamily: 'Quicksand', fontSize: '3.5rem', marginBottom: '10px' }}>
          Apple Watch <span style={{ fontSize: '1.5rem', color: '#333' }}>Series 7</span>
        </h1>
        <h2 style={{ fontFamily: 'Quicksand', color: '#555', marginBottom: '20px' }}>
          Nov 19 - Nov 25
        </h2>
        <p style={{ fontFamily: 'Quicksand', fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
          Apple Watch Series 7, Apple Watch SE, and Apple Watch Series 3 have a water resistance rating of 50 meters under ISO standard 22810:2010.
        </p>
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: isHovered ? '#a8a8a8' : '#272728',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: 'none',
            fontFamily: 'Quicksand',
            fontWeight: 'bold',
            fontSize: '20px',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'background-color 0.3s, transform 0.2s',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          View Collection
        </button>
      </div>
    </div>
  );
};

export default StoreBanner;
