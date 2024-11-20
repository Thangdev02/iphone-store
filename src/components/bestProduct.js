import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const BestProduct = (props) => {
    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.right-content', {
            duration: 1200,
            distance: '40px',
            origin: 'top',
            easing: 'ease-in-out',
        });

        ScrollReveal().reveal('.left-content', {
            duration: 1200,
            distance: '50px',
            origin: 'right',
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
        <div style={{ width: '80%', height: '30vh',fontFamily: 'sans-serif',display: 'flex', justifyContent: 'space-around', alignItems: 'center',backgroundColor: '#f7f7f7', padding:'2% 3 %', borderRadius: '8px' ,boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
        <div className='right-content text-center md:text-left flex-col md:flex-col ' style={{width:'30%',marginLeft:'6%'}}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>
              {props.productName}
            </p>
            <p  style={{ fontSize: '1rem', fontWeight: 'bold', color: 'gray'}}>
                {props.description}
            </p>
            <button style={{backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',border:'none' }}>View</button>
        </div>
        <div className='left-content' style={{width:'50%', height:'25vh'}}>
            <img style={{ height: '100%', width: '100%', objectFit: 'cover  ', objectPosition: 'center' }} src={props.productImage} alt="Product" className="w-100" />
        </div>
    </div>
    );
};

export default BestProduct;