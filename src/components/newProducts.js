import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Headphone from '../assets/images/Headphone1.png';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
const NewProducts = () => {

    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.image', {
            duration: 2200,
            distance: '50px',
            origin: 'right',
            easing: 'ease-in-out',
        }); ScrollReveal().reveal('.text1', {
            duration: 2200,
            distance: '50px',
            origin: 'left',
            easing: 'ease-in-out',
        });
     ScrollReveal().reveal('.text2', {
        duration: 2200,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out',
    });
    ScrollReveal().reveal('.btn', {
        duration: 1200,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out',
    });
    },

        []);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/shop');
    }
    return (
        <div className=" flex justify-around items-center bg-gradient-to-t from-gray-100 via-white to-#F9F9F9 relative pb-5">
            <div className='flex flex-col justify-center items-star pl-14 gap-6' style={{ width: '50%' }}>
                <div>
                    <h1 className='text1' style={{ fontSize: '2.5rem', fontWeight: 'bold', paddingTop: '4%', fontFamily: 'Quicksand' }}>Enhance Your Music Experience</h1>
                </div>
                <div>
                    <ul className='flex gap-4 p-0 text2'>
                        <li className=' bg-gray-100' style={{ borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3% 3%' }}><p style={{ margin: 0 }}>16</p> <p style={{ fontSize: '12px', margin: 0, fontWeight: 'bold' }}>Version</p></li>
                        <li className=' bg-gray-100' style={{ borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3% 5%' }}><p style={{ margin: 0 }}>10</p> <p style={{ fontSize: '12px', margin: 0, fontWeight: 'bold' }}>Min</p></li>
                        <li className=' bg-gray-100' style={{ borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3% 5%' }}><p style={{ margin: 0 }}>54</p> <p style={{ fontSize: '12px', margin: 0, fontWeight: 'bold' }}>Max</p></li>
                        <li className=' bg-gray-100' style={{ borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3% 3%' }}><p style={{ margin: 0 }}>56</p> <p style={{ fontSize: '12px', margin: 0, fontWeight: 'bold' }}>Minutes</p></li>
                    </ul>
                </div>
                <div className='btn'>
                    <Button onClick={handleButtonClick} style={{ padding: '3% 6%', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='bg-black text-white'> <p className=' text-1xl font-bold m-0'>View All</p></Button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center' style={{ width: '20%' }}>
                <img style={{ position: 'absolute', right: '16%', bottom: '10%' }} className='w-64 image' src={Headphone} alt="New Products" />
            </div>
        </div>
    );
};

export default NewProducts;