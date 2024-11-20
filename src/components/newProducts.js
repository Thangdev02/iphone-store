import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Headphone from '../assets/images/Headphone1.png';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const NewProducts = () => {
    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.imageProduct', {
            duration: 2200,
            distance: '50px',
            origin: 'right',
            easing: 'ease-in-out',
        });

        ScrollReveal().reveal('.text1', {
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
    }, []);

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/shop');
    };

    return (
        <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-t from-gray-100 via-white to-gray-100 relative pb-5">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-start pl-4 md:pl-14 gap-6 w-full md:w-1/2 text-center md:text-left">
                <div>
                    <h1 className="text1 text-2xl md:text-4xl font-bold pt-4 font-quicksand">
                        Enhance Your Music Experience
                    </h1>
                </div>
                <div>
                    <ul className="flex flex-wrap gap-4 justify-center md:justify-start p-0 text2">
                        <li className="bg-gray-100 rounded-full flex flex-col items-center justify-center p-3 w-16 h-16">
                            <p className="m-0 text-lg font-bold">16</p>
                            <p className="text-sm m-0 font-semibold">Version</p>
                        </li>
                        <li className="bg-gray-100 rounded-full flex flex-col items-center justify-center p-3 w-16 h-16">
                            <p className="m-0 text-lg font-bold">10</p>
                            <p className="text-sm m-0 font-semibold">Min</p>
                        </li>
                        <li className="bg-gray-100 rounded-full flex flex-col items-center justify-center p-3 w-16 h-16">
                            <p className="m-0 text-lg font-bold">54</p>
                            <p className="text-sm m-0 font-semibold">Max</p>
                        </li>
                        <li className="bg-gray-100 rounded-full flex flex-col items-center justify-center p-3 w-16 h-16">
                            <p className="m-0 text-lg font-bold">56</p>
                            <p className="text-sm m-0 font-semibold">Minutes</p>
                        </li>
                    </ul>
                </div>
                <div className="btn">
                    <Button
                        onClick={handleButtonClick}
                        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                    >
                        <p className="text-md md:text-xl font-bold m-0">View All</p>
                    </Button>
                </div>
            </div>

            {/* Image Section */}
            <div className=" absolute bottom-4 left-20 md:left-0 md:bottom-0 md:relative flex justify-center items-center w-full md:w-1/2">
                <img
                    className="w-20 md:w-64 lg:w-72 imageProduct"
                    src={Headphone}
                    alt="New Products"
                />
            </div>
        </div>
    );
};

export default NewProducts;
